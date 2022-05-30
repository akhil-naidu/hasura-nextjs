import { gql } from 'urql';

const getAllTodosGQL = gql`
  query getTodos {
    todos(order_by: { created_at: asc }) {
      id
      task
      is_completed
    }
  }
`;

export default getAllTodosGQL;
