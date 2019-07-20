import React from 'react';
import ReactDOM from 'react-dom';

const render = () => {
    try {
        ReactDOM.render(
            <h1>Hello from app</h1>,
            document.getElementById('root')
        );
    } catch (err) {
        console.error(err);
    }
};

render();
