"use client";

import { FC, PropsWithChildren } from "react";
import { ApolloProvider } from "@apollo/client";
import { useApolloClient } from "@/lib/apollo";

interface ApolloClientProviderProps extends PropsWithChildren {}

const ApolloClientProvider: FC<ApolloClientProviderProps> = ({ children }) => {
  const client = useApolloClient();

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloClientProvider;
