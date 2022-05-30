import { gql } from 'urql';

const CreateUserGQL = gql`
  mutation createUser($credentials: SignupCredentials!) {
    create_user(credentials: $credentials) {
      id
      email
    }
  }
`;

export default CreateUserGQL;
