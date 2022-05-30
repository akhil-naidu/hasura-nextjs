import { gql } from 'urql';

const DeleteTodoGQL = gql`
  mutation DeleteTodo($id: Int!) {
    delete_todos_by_pk(id: $id) {
      id
      task
      is_completed
    }
  }
`;

export default DeleteTodoGQL;
