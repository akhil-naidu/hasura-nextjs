import {
  cacheExchange,
  createClient,
  dedupExchange,
  fetchExchange,
} from 'urql';

const client = createClient({
  url: process.env.NEXT_PUBLIC_HASURA_URL,
  exchanges: [dedupExchange, cacheExchange, fetchExchange],
  fetchOptions: () => {
    const token = '';
    return token ? { headers: { 'x-hasura-admin-secret': token } } : {};
  },
});

export { client };
