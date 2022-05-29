import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import Login from '@/components/login/Login';
import { useAuth } from '@/utils/context/AuthContext';

const LoginIndex = () => {
  const router = useRouter();
  const { loggedInUser } = useAuth();

  useEffect(() => {
    loggedInUser && router.push('/');
  }, [loggedInUser, router]);

  return <Login />;
};

export default LoginIndex;
