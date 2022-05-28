import React, { useState } from 'react';
import { useRouter } from 'next/router';
import {
  Button,
  Heading,
  HStack,
  VStack,
  Text,
  Container,
} from '@chakra-ui/react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useMutation } from 'urql';

import FormikInput from '@/components/shared/FormikInput';

import { useAuth } from '@/utils/context/AuthContext';
import { CreateUserGQL, LoginUserGQL, UserProfileGQL } from '@/graphql/user';

const Login = () => {
  const router = useRouter();
  const [showSignup, setShowSignup] = useState(false);

  const [createUserMutationResult, createUserMutation] =
    useMutation(CreateUserGQL);
  const [loginUserMutationResult, loginUserMutation] =
    useMutation(LoginUserGQL);

  const { logout, loggedInUser, setLoggedInUser } = useAuth();
  // For registration on user I can directly use the register function from the useAuth() hook,
  // But that only creates an user in the firebase but not in my Hasura database
  // So I created an Hasura Action, called createUser which triggers the NextJS function createUser
  // The createUser Hasura actions return us the user information, by which I like to create an user in Hasura database

  if (loggedInUser?.email) {
    router.push('/');
  }

  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('enter a valid email address')
      .required('email cannot be empty'),
    password: yup
      .string()
      .required('Password cannot be empty')
      .min(8, 'password must be at least 8 characters long'),
    ...(showSignup
      ? {
          confirmPassword: yup
            .string()
            .required('Confirm Password cannot be empty')
            .oneOf([yup.ref('password'), null], 'Password must match'),
        }
      : {}),
  });

  const registerUserCustomAction = async (email, password) => {
    const variables = { credentials: { email, password } };

    try {
      const { data } = await createUserMutation(variables);
      console.log(data);

      // send email verification
      // display a screen to verify his email address
    } catch (error) {
      console.log(error);
    }
  };

  const loginUserCustomAction = async (email, password) => {
    window.localStorage.clear();

    try {
      const variablesForUserLogin = { credentials: { email, password } };
      const { data: loginResult } = await loginUserMutation(
        variablesForUserLogin,
      );

      window.localStorage.setItem('accessToken', loginResult.login.accessToken);
      window.localStorage.setItem('uid', loginResult.login.uid);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (values, actions) => {
    const { email, password } = values;
    showSignup
      ? registerUserCustomAction(email, password)
      : loginUserCustomAction(email, password);

    actions.resetForm();
  };

  return (
    <Container
      maxW='lg'
      py={{ base: '12', md: '24' }}
      px={{ base: '0', sm: '8' }}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize={true}
      >
        {({ handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <VStack spacing='5' py={{ base: '4' }}>
              <Heading>{showSignup ? 'Signup' : 'Login'}</Heading>
              <FormikInput
                label='Email'
                name='email'
                type='email'
                placeholder='Enter your email'
              />

              <FormikInput
                label='Password'
                name='password'
                type='password'
                placeholder='Enter your password'
              />

              {showSignup && (
                <FormikInput
                  label='Confirm Password'
                  name='confirmPassword'
                  type='password'
                  placeholder='Confirm your password'
                />
              )}
            </VStack>

            <HStack justify='space-between'>
              <HStack spacing='1'>
                <Text color='muted'>
                  {showSignup
                    ? 'Already have an Account'
                    : `Don't have an account?`}
                </Text>

                <Button
                  variant='link'
                  colorScheme='blue'
                  onClick={() => setShowSignup((showSignup) => !showSignup)}
                  disabled={isSubmitting}
                >
                  {showSignup ? 'Login' : 'Signup'}
                </Button>
              </HStack>

              <Button type='submit' variant='outline'>
                {showSignup ? 'Signup' : 'Login'}
              </Button>
            </HStack>
          </form>
        )}
      </Formik>
    </Container>
  );
};

export default Login;
