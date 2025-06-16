"use client";

import React, { useEffect, useState } from 'react';
import styles from "./LoginPage.module.css";
import { Eye, EyeOff } from 'lucide-react';
import Image from "next/image";
import Notification from "../../components/Authentication/Notification";
import { useRouter } from "next/navigation";

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

  useEffect(() => {
    const isLoggedIn = document.cookie.includes('token=');
    if (isLoggedIn) {
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
      const res = await fetch(`/api/auth/login`, {
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

      router.push("/");

    } catch (err) {
      showNotification("error", "Network error!");
    }
    finally {
      setLoggingIn(false);
    }
  };

  useEffect(() => {
    if (document.cookie.includes('token=')) {
      window.location.href = "/";
    }
  }, []);

  const fillDemoCredentials = (userType) => {
    if (userType === 'admin') {
      setEmail('sampleadmin@test.com');
      setPassword('sampleadmin123$');
    } else if (userType === 'editor') {
      setEmail('sampleeditor@test.com');
      setPassword('sampleeditor123$');
    }
  };

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
          <Image 
            src="/images/HomePageImg/growmax_logo.png" 
            width={200} 
            height={60} 
            alt="Growmax Logo in the Login Page"
            priority
          />
        </div>

        <form onSubmit={handleSubmit} className={styles.loginWrapper}>
          <div className={styles.loginFieldWrapper}>
            <label className={styles.loginLabel} htmlFor="email">
              Email:
            </label>
            <input 
              id="email"
              className={styles.loginInput} 
              type="email" 
              placeholder="Enter your email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />

            <label className={styles.loginLabel} htmlFor="password">
              Password:
            </label>
            <div className={styles.passwordContainer}>
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.loginInput}
                required
                autoComplete="current-password"
              />
              <span 
                className={styles.toggleEye} 
                onClick={togglePassword}
                role="button"
                tabIndex={0}
                aria-label={showPassword ? "Hide password" : "Show password"}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    togglePassword();
                  }
                }}
              >
                {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </span>
            </div>

            <p 
              className={styles.forgotPassword} 
              onClick={() => router.push("/forgot-password")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  router.push("/forgot-password");
                }
              }}
            >
              Forgot Password?
            </p>
          </div>

          <div className={styles.loginButton}>
            <button 
              type="submit" 
              disabled={loggingIn}
              aria-label={loggingIn ? "Logging in..." : "Log in to your account"}
            >
              {loggingIn ? "LOGGING IN..." : "LOG IN"}
            </button>
          </div>
        </form>

        <div className={styles.demoAccounts}>
          <p className={styles.demoAccountsTitle}>Demo Accounts:</p>
          <div className={styles.demoAccountsContainer}>
            <div 
              className={styles.demoAccount}
              onClick={() => fillDemoCredentials('admin')}
              role="button"
              tabIndex={0}
              aria-label="Fill admin demo credentials"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  fillDemoCredentials('admin');
                }
              }}
            >
              <p className={styles.accountType}>Admin User:</p>
              <p>Email: sampleadmin@test.com</p>
              <p>Password: sampleadmin123$</p>
            </div>
            <div 
              className={styles.demoAccount}
              onClick={() => fillDemoCredentials('editor')}
              role="button"
              tabIndex={0}
              aria-label="Fill editor demo credentials"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  fillDemoCredentials('editor');
                }
              }}
            >
              <p className={styles.accountType}>Editor User:</p>
              <p>Email: sampleeditor@test.com</p>
              <p>Password: sampleeditor123$</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;