
import React, { Component } from 'react';
import { Initial } from './src/components/screens/containers/initial';
import { GlobalProvider } from "./src/context/GlobalState";
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { AppRegistry } from 'react-native';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';

const cache = new InMemoryCache();
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );

  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});
const link = new HttpLink({
  uri: 'http://924f06be1471.ngrok.io/graphql',
  errorLink
});

const client = new ApolloClient({
  link,
  cache
});

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
          <GlobalProvider>
            <Initial />
          </GlobalProvider>
        </ApolloProvider>
    );
  }
}

AppRegistry.registerComponent('JanusApp', () => App);
