import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import Login from '@/components/login/Login';
import { useAuthStore } from '@/utils/store';

const LoginIndex = () => {
  const router = useRouter();
  const loggedInUser = useAuthStore((state) => state.loggedInUser);

  useEffect(() => {
    loggedInUser && router.push('/');
  }, [loggedInUser, router]);

  return <Login />;
};

export default LoginIndex;
