import React from 'react';
import ReactDOM from 'react-dom';

const render = () => {
    try {
        ReactDOM.render(<h1>1 2 sd s</h1>, document.getElementById('root'));
    } catch (err) {
        console.error(err);
    }
};

render();
