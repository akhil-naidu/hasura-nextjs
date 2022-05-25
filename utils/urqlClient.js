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
    const token = window.localStorage.getItem('accessToken');
    return token ? { headers: { Authorization: `Bearer ${token}` } } : {};
  },
});

export { client };
