
import React, { Component } from 'react';
import { Initial } from './src/components/screens/containers/initial';
import { GlobalProvider } from "./src/context/GlobalState";
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { AppRegistry } from 'react-native';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:5000/graphql'
});

const client = new ApolloClient({
  cache,
  link
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
