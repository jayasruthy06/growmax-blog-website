import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fetchLoading, setFetchLoading] = useState(false);
  const [isAuth, setIsAuth] = useState('loading');
  const router = useRouter();

  const refreshToken = useCallback(async () => {
    try {
      console.log('calling refresh api');//testing, needs to be removed
      const response = await fetch('/api/auth/refresh', {
        method: 'POST',
        credentials: 'include'
      });
      
      if (!response.ok) {
        throw new Error('Token refresh failed');
      }
      
      const data = await response.json();
      return data.success;
    } catch (error) {
      return false;
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include'
      });
    } catch (error) {
      alert('Error in logging out');
    } finally {
      setUser(null);
      setUserInfo(null);
      setIsAuth('false');
      router.push('/login');
    }
  }, [router]);

  const fetchUserData = useCallback(async () => {
    setFetchLoading(true);
    try {
      const authResponse = await fetch('/api/auth/me', {
        method: 'GET',
        headers: {
          'Cache-Control': 'no-cache'
        },
      });
      
      if (!authResponse.ok) {
        setIsAuth('false');
        setUser(null);
        setUserInfo(null);
        return;
      }

      const authData = await authResponse.json();
      const userEmail = authData.user.email;
      setUser(authData);
      setIsAuth('true');
      
      const timestamp = new Date().getTime();
      const response = await fetch(`/api/users?email=${encodeURIComponent(userEmail)}&t=${timestamp}`, {
        method: 'GET',
        headers: {
          'Cache-Control': 'no-cache',
        },
      });
      
      const data = await response.json();
      
      if (data.success) {
        setUserInfo(data.user);
      } 
    } catch (error) {
      console.error('❌ Error fetching user:', error);
      setIsAuth('false');
      setUser(null);
      setUserInfo(null);
    } finally {
      setFetchLoading(false);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  useEffect(() => {
    if (!user) return;

    const interval = setInterval(async () => {
      console.log("calling refresh api function")//testing, should be removed
      const success = await refreshToken();
      if (!success) {
        logout();
      }
    }, 15 * 1000); //testing, should be 10 minutes

    return () => clearInterval(interval);
  }, [user, refreshToken, logout]);


  return { 
    user, 
    userInfo, 
    loading, 
    fetchLoading,
    isAuth,
    logout, 
    refreshToken,
    refetchUserData: fetchUserData
  };
};