import { createContext, useState, useContext, useEffect } from 'react';
import { useMutation } from 'urql';

import { register, login, logout } from '@/utils/context/loginFunctions';
import { UserProfileGQL } from '@/graphql/user';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [userProfileMutationResult, userProfileMutation] =
    useMutation(UserProfileGQL);

  const value = {
    register,
    login,
    logout,
    setLoggedInUser,
    loggedInUser,
  };

  useEffect(() => {
    const uid = window.localStorage.getItem('uid');

    const getUserDetails = async () => {
      try {
        const variablesForUserProfile = { uid };
        const { data: userDetails } = await userProfileMutation(
          variablesForUserProfile,
        );

        console.log(userDetails);

        setLoggedInUser(userDetails.user_profile);
      } catch (error) {
        console.error(error);
      }
    };

    if (uid) getUserDetails();
  }, [userProfileMutation]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
