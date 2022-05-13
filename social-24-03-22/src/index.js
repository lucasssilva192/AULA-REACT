import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Apollo
import { ApolloProvider } from '@apollo/client';
import client from './graphQL/client'
import AuthContext from './auth'

ReactDOM.render(<ApolloProvider client={client}>
                    <AuthContext>
                        <App />
                    </AuthContext>
                </ApolloProvider>, 
    document.getElementById("root"));