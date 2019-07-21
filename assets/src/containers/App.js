import React from 'react';
import {HashRouter} from 'react-router-dom';
import Routes from './Routes';
import Header from '../components/Header';
import './main.scss';

export default function App() {
    return (
        <HashRouter>
            <Header />
            <div className="wrapper">
                <Routes />
            </div>
        </HashRouter>
    );
}
