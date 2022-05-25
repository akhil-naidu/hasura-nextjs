import React, { useState } from 'react';
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

import FormikInput from '@/components/shared/FormikInput';

import { useAuth } from '@/utils/context/AuthContext';

const Login = () => {
  const [showSignup, setShowSignup] = useState(false);

  const { register, login, logout, loggedInUser } = useAuth();

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

  const onSubmit = (values, actions) => {
    const { email, password } = values;
    showSignup ? register(email, password) : login(email, password);

    actions.resetForm();
  };
  console.log(loggedInUser.accessToken);

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

      {loggedInUser?.email && (
        <>
          {loggedInUser?.email}
          <Button onClick={() => logout()}>Sign Out</Button>
        </>
      )}
    </Container>
  );
};

export default Login;
