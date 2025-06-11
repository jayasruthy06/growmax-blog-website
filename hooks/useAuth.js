import { useEffect, useState, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fetchLoading, setFetchLoading] = useState(false);
  const [isAuth, setIsAuth] = useState('loading');
  const router = useRouter();
  
  const fetchingRef = useRef(false);
  const cacheRef = useRef({ user: null, userInfo: null, timestamp: 0 });
  const CACHE_DURATION = 30 * 1000; 

  const refreshToken = useCallback(async () => {
    try {
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
      console.error('Error in logging out:', error);
    } finally {
      setUser(null);
      setUserInfo(null);
      setIsAuth('false');
      cacheRef.current = { user: null, userInfo: null, timestamp: 0 };
      router.push('/login');
    }
  }, [router]);

  const fetchUserData = useCallback(async (useCache = true) => {
    if (fetchingRef.current) return;
    
    const now = Date.now();
    if (useCache && cacheRef.current.timestamp > 0 && 
        (now - cacheRef.current.timestamp) < CACHE_DURATION) {
      setUser(cacheRef.current.user);
      setUserInfo(cacheRef.current.userInfo);
      setIsAuth(cacheRef.current.user ? 'true' : 'false');
      setLoading(false);
      return;
    }

    fetchingRef.current = true;
    setFetchLoading(true);
    
    try {
      const response = await fetch('/api/auth/profile', {
        method: 'GET',
        headers: {
          'Cache-Control': 'no-cache'
        },
        credentials: 'include'
      });

      if (!response.ok) {
        setIsAuth('false');
        setUser(null);
        setUserInfo(null);
        cacheRef.current = { user: null, userInfo: null, timestamp: now };
        return;
      }

      const data = await response.json();
      
      if (data.success && data.user && data.userInfo) {
        setUser(data);
        setUserInfo(data.userInfo);
        setIsAuth('true');
        
        cacheRef.current = {
          user: data,
          userInfo: data.userInfo,
          timestamp: now
        };
      } else {
        setIsAuth('false');
        setUser(null);
        setUserInfo(null);
        cacheRef.current = { user: null, userInfo: null, timestamp: now };
      }
    } catch (error) {
      console.error('❌ Error fetching user:', error);
      setIsAuth('false');
      setUser(null);
      setUserInfo(null);
      cacheRef.current = { user: null, userInfo: null, timestamp: now };
    } finally {
      setFetchLoading(false);
      setLoading(false);
      fetchingRef.current = false;
    }
  }, []);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  useEffect(() => {
    if (!user) return;

    const interval = setInterval(async () => {
      const success = await refreshToken();
      if (!success) {
        logout();
      }
    }, 10 * 60 * 1000);

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
    refetchUserData: () => fetchUserData(false) 
  };
};