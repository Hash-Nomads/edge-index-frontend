import { FC } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { DefaultOptions } from "@apollo/client";

const queryClient = new QueryClient();

export const DefaultApolloClientOptions: DefaultOptions = {
  watchQuery: { notifyOnNetworkStatusChange: true },
  query: { errorPolicy: "all", fetchPolicy: "network-only" },
};

const Network: FC = ({ children }) => {
  const client = new ApolloClient({
    uri: "https://tequila-graph.mirror.finance/graphql",
    cache: new InMemoryCache(),
    connectToDevTools: true,
    defaultOptions: DefaultApolloClientOptions,
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </QueryClientProvider>
  );
};

export default Network;
