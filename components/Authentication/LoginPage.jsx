"use client";

import React, { useEffect, useState } from 'react';
import styles from "./LoginPage.module.css";
import { Eye , EyeOff } from 'lucide-react';
import Image from "next/image";
import Notification from "../../components/Authentication/Notification";
import {useRouter} from "next/navigation";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggingIn, setLoggingIn] = useState(false);
  const [notification, setNotification] = useState({
    isVisible: false,
    type: 'success',
    message: ''
  });

  const [alreadyLoggedIn, setAlreadyLoggedIn] = useState(false);
  const router = useRouter();

  const togglePassword = () => setShowPassword(prev => !prev);

  const showNotification = (type, message) => {
    setNotification({ isVisible: true, type, message });
  };

  const hideNotification = () => {
    setNotification(prev => ({ ...prev, isVisible: false }));
  };

  const isEmailValid = (email) => email.includes('@') && email.includes('.com');

  const isPasswordValid = (password) => {
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const match = password.match(specialCharRegex);
    const specialCharCount = match ? match.length : 0;
    return password.length >= 8 && specialCharCount > 0;
  };

  useEffect(()=>{
    const isLoggedIn = document.cookie.includes('auth_token=');
    if(isLoggedIn){
      setAlreadyLoggedIn(true);
    }
  }, []);

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (alreadyLoggedIn) {
    showNotification("error", "User already logged in!");
    return;
  }

  if (!isEmailValid(email)) {
    showNotification("error", "Please check your Email!");
    return;
  }

  if (!isPasswordValid(password)) {
    showNotification("error", "Password must be at least 8 characters and include a special character.");
    return;
  }

  try {
    setLoggingIn(true);
    const res = await fetch(`/api/auth/login `, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      showNotification("error", data.error || "Something went wrong!");
      return;
    }

    setLoggingIn(false);
    showNotification("success", data.message || "Login successful!");

    // ✅ Redirect to homepage after login
    router.push("/");

  } catch (err) {
    showNotification("error", "Network error!");
  }
};


useEffect(() => {
  if (document.cookie.includes('auth_token=')) {
    window.location.href = "/";
  }
}, []);

  return (
    <div className={styles.loginBody}>
      <Notification
        type={notification.type}
        message={notification.message}
        isVisible={notification.isVisible}
        onClose={hideNotification}
      />
      <div className={styles.loginBox}>
        <div className={styles.loginLogo}>
          <Image src="/images/HomePageImg/growmax_logo.png" width={200} height={60} alt="Growmax Logo in the Login Page" />
        </div>
        <div className={styles.loginWrapper}>
          <div className={styles.loginFieldWrapper}>
            <label className={styles.loginLabel}>Email:</label>
            <input className={styles.loginInput} type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <label className={styles.loginLabel}>Password:</label>
            <div className={styles.passwordContainer} style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                style={{ paddingRight: '40px' }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.loginInput}
              />
              <span className={styles.toggleEye} onClick={togglePassword}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                }}>
                {showPassword ? <Eye/> : <EyeOff/>}
              </span>
            </div>
          </div>
        </div>

        <div className={styles.loginButton}>
          <button onClick={handleSubmit}>{loggingIn? "LOGGING IN...": "LOG IN"}</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
