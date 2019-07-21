import React, {useState} from 'react';
import {Button, Form, Input, InputGroup} from 'reactstrap';
import {toast} from 'react-toastify';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
//import {login, setProfile} from 'redux/modules/auth/action';
import FontAwesome from 'react-fontawesome';
import {gql} from 'apollo-boost';
import {Mutation} from 'react-apollo';

const SignInPage = props => {
    const [login, setLogin] = useState('');
    const [validLogin, checkValidation] = useState(null);
    const [password, setPassword] = useState('');
    const [loading, handleLoading] = useState(false);

    // const check = () => {
    //     client.query({
    //         mutation: gql`
    //             {
    //                 createUser(user: {password: "123123", email: "roma"}) {
    //                     password
    //                     email
    //                 }
    //             }
    //         `
    //     });
    // };
    //     import gql from "graphql-tag";
    //     import { Mutation } from "react-apollo";

    //     const ADD_TODO = gql`
    //   mutation AddTodo($type: String!) {
    //     addTodo(type: $type) {
    //       id
    //       type
    //     }
    //   }
    // `;
    const createUser = gql`
        mutation createUser($email: String!, $password: String!) {
            createUser(user: {email: $email, password: $password}) {
                email
                password
            }
        }
    `;
    const validation = value => {
        if (
            value.split('')[0] === ' ' ||
            value.split('')[value.length - 1] == ' '
        ) {
            return false;
        }

        setLogin(value);

        const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const result = emailRegExp.test(value);

        if (result) {
            checkValidation(1);
        } else {
            checkValidation(2);
        }
    };

    const submit = async () => {
        try {
            handleLoading(true);
            // await props.login(login, password);
            // await props.setProfile()
            props.history.push('/');
        } catch (e) {
            handleLoading(false);
            toast.error(e.message);
            throw e.message;
        }
    };
    return (
        <Mutation mutation={createUser}>
            {(createUser, {data}) => (
                <div
                    className="d-flex flex-column justify-content-center align-items-center"
                    style={{height: 'calc(100vh - 100px)', width: '100%'}}
                >
                    <div
                        style={{width: 300}}
                        className="d-flex flex-column authorization-container"
                    >
                        <h3
                            className="align-self-center mb-2"
                            style={{
                                fontWeight: '600',
                                fontFamily: 'Sans-serif'
                            }}
                        >
                            Sign In
                        </h3>
                        <p className="align-self-center mb-2">
                            Enter your login details
                        </p>
                        <Form>
                            <InputGroup className="mb-2">
                                <div className="input-group-prepend">
                                    <span
                                        style={{width: '40px'}}
                                        className="input-group-text"
                                        id="basic-addon1"
                                    >
                                        <i className="fas fa-at" />
                                    </span>
                                </div>
                                <Input
                                    placeholder="E-mail"
                                    value={login}
                                    onChange={e => validation(e.target.value)}
                                />
                            </InputGroup>
                            <InputGroup>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span
                                            style={{width: '40px'}}
                                            className="input-group-text"
                                            id="basic-addon1"
                                        >
                                            <FontAwesome name="unlock-alt" />
                                        </span>
                                    </div>
                                    <Input
                                        type="password"
                                        placeholder="Password"
                                        onChange={e =>
                                            setPassword(e.target.value)
                                        }
                                        value={password}
                                        className="form-control"
                                        aria-describedby="basic-addon1"
                                    />
                                </div>
                            </InputGroup>
                            <div className="d-flex flex-column align-self-start">
                                <Button
                                    disabled={
                                        validLogin === null ||
                                        validLogin === 2 ||
                                        password.length < 6
                                    }
                                    onClick={() =>
                                        createUser({
                                            variables: {
                                                email: 'roma',
                                                password: '123123'
                                            }
                                        })
                                    }
                                    style={{color: 'white', fontWeight: '600'}}
                                    type="button"
                                    className="btn btn-info"
                                >
                                    {loading && (
                                        <i className="fa fa-spinner fa-spin" />
                                    )}{' '}
                                    Login
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            )}
        </Mutation>
    );
};

export default SignInPage;
