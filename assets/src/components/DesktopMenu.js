import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';

const DesktopMenu = () => {
    return (
        <div
            style={{minHeight: 55}}
            className="userMenuDesktop d-flex align-items-center mr-3"
        >
            {/* <div style={{width: 150}} className="d-flex align-items-center">
                <Link to="/my-account" className="mr-2">
                    My Account
                </Link>
                <Link to="/" style={{fontWeight: '600'}}>
                    Logout
                </Link>
            </div> */}
            <div
                className="d-flex justify-content-between align-items-center"
                style={{width: '160px'}}
            >
                <Link to="/sign_in">Sign In</Link>
                <Link to="/sign_up">
                    <Button
                        className="btn-danger"
                        style={{
                            outline: 'none',
                            border: 'none',
                            color: 'white',
                            background: '#cc3333'
                        }}
                    >
                        SIGN UP
                    </Button>
                </Link>
            </div>
            {/* )} */}
        </div>
    );
};

// const mapStateFromProps = state => ({
//     auth: state.auth
// });

export default DesktopMenu;
