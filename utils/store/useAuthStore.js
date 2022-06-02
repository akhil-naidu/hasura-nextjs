import create from 'zustand';
import { register, login, logout } from './authStoreFunctions';

const useAuthStore = create((set, get) => ({
  loggedInUser: null,
  register,
  login,
  logout,
  setLoggedInUser: (user) => set(() => ({ loggedInUser: user })),
  getAccessToken: () => get().loggedInUser?.accessToken,
}));

export default useAuthStore;
