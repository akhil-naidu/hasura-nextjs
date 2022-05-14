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
import { useFormik } from 'formik';

import {
  initialValues,
  validationSchema,
  onSubmit,
} from '@/components/login/formik';

const Login = () => {
  const [showSignup, setShowSignup] = useState(false);
  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  return (
    <Container
      maxW='lg'
      py={{ base: '12', md: '24' }}
      px={{ base: '0', sm: '8' }}
    >
      <form onSubmit={formik.handleSubmit}>
        <VStack spacing='5' py={{ base: '4' }}>
          <Heading>{showSignup ? 'Signup' : 'Login'}</Heading>
          <FormControl isInvalid={formik.errors.username}>
            <FormLabel>Username</FormLabel>
            <Input
              type='text'
              name='username'
              placeholder='Choose an username of your choice'
              onChange={formik.handleChange}
              value={formik.values.username}
            />
            <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={formik.errors.password}>
            <FormLabel>Password</FormLabel>
            <Input
              type='password'
              name='password'
              placeholder='Choose a strong password'
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
          </FormControl>

          {showSignup && (
            <FormControl isInvalid={formik.errors.confirmPassword}>
              <FormLabel>Confirm Password</FormLabel>
              <Input
                type='password'
                name='confirmPassword'
                placeholder='Conform your password'
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
              />
              <FormErrorMessage>
                {formik.errors.confirmPassword}
              </FormErrorMessage>
            </FormControl>
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
            >
              {showSignup ? 'Login' : 'Signup'}
            </Button>
          </HStack>

          <Button type='submit' variant='outline'>
            {showSignup ? 'Signup' : 'Login'}
          </Button>
        </HStack>
      </form>
    </Container>
  );
};

export default Login;
