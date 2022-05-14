import * as yup from 'yup';

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username cannot be empty')
    .min(5, 'username is too short'),
  password: yup
    .string()
    .required('Password cannot be empty')
    .min(8, 'password must be at least 8 characters long'),
  confirmPassword: yup
    .string()
    .required('Confirm Password cannot be empty')
    .oneOf([yup.ref('password'), null], 'Password must match'),
});

export default validationSchema;
