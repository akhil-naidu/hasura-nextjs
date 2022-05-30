import { gql } from 'urql';

const AddTodoGQL = gql`
  mutation AddTo($task: String!) {
    insert_todos_one(object: { task: $task }) {
      id
      task
      is_completed
    }
  }
`;

export default AddTodoGQL;
