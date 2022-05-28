import { gql } from 'urql';

const LoginUserGQL = gql`
  mutation loginMutation($credentials: LoginCredentials!) {
    login(credentials: $credentials) {
      accessToken
    }
  }
`;

export default LoginUserGQL;
