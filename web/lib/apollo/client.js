import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const cache = new InMemoryCache({
  resultCaching: false,
});

const link = createHttpLink({
  uri: process.env.NEXT_PUBLIC_CMS_SITE_URL,
});

const client = new ApolloClient({
  link,
  cache,
});

export default client;
