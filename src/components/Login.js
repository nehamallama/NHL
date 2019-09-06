import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';

export default class UserSignIn extends Component {
    state = {
        email: '',
        password: '',
        errors: [],
    }

    render() {
        const {
            email,
            password,
            errors,
        } = this.state;

        return (
            <div className="bounds">
                <div className="grid-33 centered signin">
                    <h1>Sign In</h1>
                    <Form
                        cancel={this.cancel}
                        errors={errors}
                        submit={this.submit}
                        submitButtonText="Sign In"
                        elements={() => (
                            <React.Fragment>
                                <input
                                    id="email"
                                    name="email"
                                    type="text"
                                    value={email}
                                    onChange={this.change}
                                    placeholder="Email" />
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={password}
                                    onChange={this.change}
                                    placeholder="Password" />
                            </React.Fragment>
                        )} />
                    <p>
                        Don't have a user account? <Link to="/register">Click here</Link> to sign up!
                    </p>
                </div>
            </div>
        );
    }

    change = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState(() => {
            return {
                [name]: value
            };
        });
    }

    submit = () => {
        const { context } = this.props; //get providers prop here... found with value in provider func
        console.log(this.props)
        const { from } = this.props.location.state || { from: { pathname: '/authenticated' } };
        //If the user is redirected to /signin from a previous route, submit() should navigate t
        // Them back to the original route once they authenticate.
        const { email, password } = this.state; //unpacking from this.state
        context.actions.signIn(email,password)
            .then( user => {

                if (user === null) {
                    this.setState(() => {
                        return { errors: [ 'Sign-in was unsuccessful' ] };
                    });
                }
                else{
                    this.props.history.push("/authenticated"); //from is the pathname the user was on before clicking the next shit
                    //The from variable passed to history.push(from) contains information about the pathname an unauthenticated
                    // user redirected from (via this.props.location.state). For example, if a user redirects to the sign up page
                    // from /settings, from will be equal to pathname: "/settings".



                }
            })
            .catch( err => {
                console.log(err);
                this.props.history.push('/error');
            })
    }

    cancel = () => {
        this.props.history.push('/');
    }
}
