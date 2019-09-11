import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';

export default class Register extends Component {
    state = {
        email: '',
        password: '',
        confirmPassword: '',
        errors: [],
    }


    render() {
        console.log(this.state)


        const email = this.state.email; //state that is typed into form
        const password = this.state.password;
        const confirmPassword = this.state.confirmPassword;
        const errors = this.state.errors;



        return (
            <div className="login">
                <div className="Login">
                    <section className="intro">
                        <h2 > Register </h2>
                    </section>
                    <Form
                        cancel={this.cancel}
                        errors={errors}
                        submit={this.submit}
                        submitButtonText="Sign Up"
                        elements={() => (
                            <React.Fragment>
                                {/*onChange is a built in react function that will allow us to record
                  what the user has typed in, each keystroke is an event that gets recorded and updated as its typed in*/}
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={email}
                                    onChange={this.change}
                                    placeholder="email" />
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={password}
                                    onChange={this.change}
                                    placeholder="Password" />
                                <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                value={confirmPassword}
                                onChange={this.change}
                                placeholder="confirmPassword" />
                            </React.Fragment>
                        )} />
                    <p>
                        Already have a user account? <Link to="/login">Click here</Link> to Login!
                    </p>
                </div>
            </div>
        );
    }

    change = (event) => {
        //set the
        const name = event.target.name;
        const value = event.target.value;

        this.setState(() => {
            return {
                [name]: value
            };
        });
    }

    submit = () => {
        console.log(this.props.context)
        const { context } = this.props; // We subscribe to this providers context in the App.js file.. getting props here .. found with value in provider func
        const email = this.state.email; //state that is typed into form
        const password = this.state.password;
        const confirmPassword = this.state.confirmPassword;
        const errors = this.state.errors;
        const user = {
            email,password, confirmPassword
        };
        context.data.createUser(user) //data passes itsself to context.. user sign up is a consumer of the prodvided context so thats how we can get the create User method
            .then(handshake => { // since createUser is an async function, it will return a promise

                if (handshake === null) {
                    this.setState(() => {
                        return { errors: [ 'Sign-in was unsuccessful' ] };
                    });
                }
                else {
                    // console.log(`${username} is signed in and authed`);
                    context.actions.signIn(email, password)
                        .then(() => {
                            this.props.history.push('/authenticated');
                        });
                    //s signIn() is an asynchronous operation that returns a promise.
                    // Once the promise is fulfilled (the user was authenticated),
                    // we'll navigate the user to the /authenticated URL path.

                }
            })
            .catch(err => {
                console.log(err);
                this.props.history.push("/error")// props always will have the history stack attached to it keeping track of browser history
                //React Router lets you create a 404-like error route that displays when a URL's path does not match any of the paths defined in your routes.
                // /error does not match any URL path defined inside the <Switch> component of App.js.
                // Because of this, when the URL path changes to /error, the router is going to render the NotFound component written in components/NotFound.js.
            })
    }




    cancel = () => {
        this.props.history.push('/error');
    }
}