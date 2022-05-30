import { gql } from 'urql';

const GetAllTodosGQL = gql`
  query getTodos {
    todos(order_by: { created_at: asc }) {
      id
      task
      is_completed
    }
  }
`;

export default GetAllTodosGQL;
