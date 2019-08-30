import React, {Component} from 'react';
import {
    Button, Form, FormControl, Navbar, Table


} from 'react-bootstrap';
import Nav from "./Nav";
import Footer from "./Footer";
import {Cell, Grid} from "react-mdl";
import {NavLink} from "react-router-dom";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}} className={"login"}>
                    <Nav />
                            <div className="Login">
                                <p className="service-icon"><i className="far fa-calendar-alt"></i></p>
                                <p className="service-title"> </p>
                                    <Form>
                                        <section className="intro2">
                                            <h2 > Login </h2>
                                        </section>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" />
                                            <Form.Text className="text-muted">
                                                We'll never share your email with anyone else.
                                            </Form.Text>
                                        </Form.Group>
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicChecbox">
                                            <NavLink to={"/register"}> New User? Click Here To Sign Up </NavLink>
                                        </Form.Group>
                                        <Button variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </Form>


                            </div>

                    </div>

        );
    }
}
