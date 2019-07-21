import React, {Fragment} from 'react';
import DesktopMenu from 'components/DesktopMenu';
import {Link} from 'react-router-dom';
import logo from '../img/logo.jpg';
const Header = () => {
    return (
        <Fragment>
            <header
                style={{
                    background: 'white',
                    borderBottom: '1px solid lightgray',
                    minHeight: '55px',
                    position: 'relative'
                }}
                className="header"
            >
                <div className="wrapper d-flex justify-content-between align-items-center">
                    <Link to="/">
                        <img width="70" height="55" src={logo} />
                    </Link>
                    <DesktopMenu />
                </div>
            </header>
        </Fragment>
    );
};

export default Header;
