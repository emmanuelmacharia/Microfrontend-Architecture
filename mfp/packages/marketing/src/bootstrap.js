import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const mount = (el) => {
        ReactDOM.render( <App />, el)
        }

        console.log('Hi there, we are marketing');

        // mount fumction to start the app

        // if we are in dev and in isolation, call mountt immediately

        if (process.env.NODE_ENV === 'development') {
            const el = document.querySelector('#marketing-react-dev-root');
            if (el) {
                mount(el)
            }
        }

        // we are running through the container,
        // we should export the mount functtion
        export { mount }