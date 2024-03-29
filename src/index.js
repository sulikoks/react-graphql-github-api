import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ApolloProvider} from "@apollo/react-common";
import {InMemoryCache} from "apollo-cache-inmemory";
import {HttpLink} from "apollo-link-http";
import ApolloClient from "apollo-client";
import {BrowserRouter} from 'react-router-dom';

const TOKEN = 'ed671146e001c531e1412d31460d556962981bfc'
const cache = new InMemoryCache();
const link = new HttpLink({
    uri: 'https://api.github.com/graphql',
    credentials: 'same-origin',
    headers: {
        Authorization: `Bearer ${TOKEN}`,
    }
});
const client = new ApolloClient({
    cache,
    link
});

ReactDOM.render(
    <BrowserRouter>
        <ApolloProvider client={client}>
            <App/>
        </ApolloProvider>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
