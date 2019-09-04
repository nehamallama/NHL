import React, {Component} from 'react';
import {
    Button, Form, FormControl, Navbar, Table


} from 'react-bootstrap';
import Nav from "./Nav";
import {NavLink, Redirect} from "react-router-dom";
import axios from "axios"


export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
        this.onChangeUsername =this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            isAuthed: false,
            email:" ",
            password:" ",
            confirmPassword: " "

        }
    }


    onChangeUsername = (e) => {
        this.setState( {
            email: e.target.value
        })
    }
    onChangePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    onChangeConfirmPassword = (e) => {
        this.setState({
            confirmPassword: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword
        }

        // console.log(user);

        axios.post('http://localhost:5000/register', user)
            .then(res => {

                if (res.data === "Frig" ) {
                    // if we print frig, change the state to true and then do the redirect?
                    this.setState({isAuthed: true});
                    this.setState({isAuthed: false});
                    console.log(this.state.isAuthed )
                    // we want to redirect on this submit to an authed page or sumn like dat

                }
            })



    }
    //proper form entry for all three of the properties of a person object
    render() {

        if (this.state.isAuthed) return <Redirect to={'/'} />

        return (
            <div style={{width: '100%', margin: 'auto'}} className={"login"}>
                <Nav  />
                <div className="Login">
                    <p className="service-icon"><i className="far fa-calendar-alt"></i></p>
                    <p className="service-title"> </p>
                    <Form onSubmit={this.onSubmit}>
                        <section className="intro">
                            <h2 > Register </h2>
                        </section>
                        {/*email*/}
                        <Form.Group  controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <input  type="text"
                                    required
                                    className="form-control"
                                    value={this.state.email}
                                    onChange={this.onChangeUsername}
                                    name='email' placeholder="Enter email"
                            />
                            {/*<Form.Control type="email" name='email' placeholder="Enter email"  />*/}
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        {/*passwprd*/}
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' name='password' placeholder="Password" onChange={this.onChangePassword} />
                        </Form.Group>
                        {/*confirm password*/}
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type='password' name='confirmPassword' placeholder="Confirm Password" onChange={this.onChangeConfirmPassword}/>
                        </Form.Group>
                        {/*back to login*/}
                        <Form.Group controlId="formBasicChecbox">
                            <NavLink to={"/login"}> Already registered? Click Here To Login </NavLink>
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={this.onSubmit}>
                            Submit
                        </Button>
                    </Form>


                </div>

            </div>

        );
    }
}
