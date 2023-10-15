import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { useMemo } from "react";

const httpLink = createHttpLink({ uri: "http://localhost:3000/api/graphql" })

const createApolloClient = () =>
  new ApolloClient({
    ssrMode: true,
    link: httpLink,
    cache: new InMemoryCache(),
  });

export const apolloClient = createApolloClient();

export const useApolloClient = () => {
  return useMemo(() => createApolloClient(), []);
};
