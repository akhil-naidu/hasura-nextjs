import { gql } from 'urql';

const UserProfileGQL = gql`
  mutation userProfileMutation($uid: String!) {
    user_profile(id: $uid) {
      id
      email
      displayName
    }
  }
`;

export default UserProfileGQL;
