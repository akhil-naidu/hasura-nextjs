import { gql } from 'urql';

const CreateUserMutation = gql`
  mutation createUser(
    $email: String!
    $password: String!
    $displayName: String
  ) {
    create_user(
      credentials: {
        email: $email
        password: $password
        displayName: $displayName
      }
    ) {
      id
      email
      displayName
    }
  }
`;

export default CreateUserMutation;
