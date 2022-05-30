import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import { auth } from '@/utils/firebase';

const register = async (email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    return user;
  } catch (error) {
    console.error(error);
  }
};

const login = async (email, password, backend = false) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    if (!backend) window.localStorage.setItem('accessToken', user.accessToken);

    return user;
  } catch (error) {
    console.error(error);
  }
};

const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error(error);
  }
};

export { register, login, logout };
