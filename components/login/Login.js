import React, { useState } from 'react';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Input,
  VStack,
  Text,
  Container,
} from '@chakra-ui/react';
import { Field, Formik, useFormik } from 'formik';
import * as yup from 'yup';

import FormikInput from '@/components/shared/FormikInput';

const Login = () => {
  const [showSignup, setShowSignup] = useState(false);

  const initialValues = {
    username: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .required('Username cannot be empty')
      .min(5, 'username is too short'),
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
    console.log(values, actions);
    actions.resetForm();
  };

  console.log(initialValues, validationSchema);

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
        {({ errors, handleSubmit, touched, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <VStack spacing='5' py={{ base: '4' }}>
              <Heading>{showSignup ? 'Signup' : 'Login'}</Heading>
              <FormikInput
                label='Username'
                name='username'
                type='text'
                placeholder='Enter your username'
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
