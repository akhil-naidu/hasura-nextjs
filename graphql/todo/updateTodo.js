import { gql } from 'urql';

const UpdateTodoGQL = gql`
  mutation UpdateTodo($id: Int!, $task: String!) {
    update_todos_by_pk(pk_columns: { id: $id }, _set: { task: $task }) {
      id
      task
      is_completed
    }
  }
`;

export default UpdateTodoGQL;
