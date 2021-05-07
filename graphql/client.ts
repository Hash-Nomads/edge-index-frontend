import { FC } from "react"
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"
import { DefaultOptions } from "@apollo/client"

export const DefaultApolloClientOptions: DefaultOptions = {
  watchQuery: { notifyOnNetworkStatusChange: true },
  query: { errorPolicy: "all", fetchPolicy: "network-only" },
}

const client = new ApolloClient({
  uri: "https://tequila-graph.mirror.finance/graphql",
  cache: new InMemoryCache(),
  connectToDevTools: true,
  defaultOptions: DefaultApolloClientOptions,
})
