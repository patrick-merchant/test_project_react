import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './custom.scss';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:8081/graphql',
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query getPosts {
    feed {
        id
        userId
        title
        body
        }
      }
    `,
  })
  .then((result) => console.log(result.data.feed));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);