import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import App from './containers/App';
import {ApolloProvider} from 'react-apollo';
import client from 'utils/graphql/client';
const render = () => {
    try {
        ReactDOM.render(
            <AppContainer>
                <ApolloProvider client={client}>
                    <App />
                </ApolloProvider>
            </AppContainer>,
            document.getElementById('root')
        );
    } catch (err) {
        console.error(err);
    }
};

render();
