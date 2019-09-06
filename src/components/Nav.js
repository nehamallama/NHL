import React from 'react';
import {
    Button, Form, FormControl, Navbar


} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import {Link, Redirect} from 'react-router-dom'
import {NavLink} from "react-router-dom";

export default class Nav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            isRedirected: false
        }
    }

    onSearchChange = e => {
        console.log(e.target.value)
        this.setState({ searchText: e.target.value });
    }

    submit = e => {
        e.preventDefault();
        // with the new search state from above, get the state and perform a search with it to local/team/"searchValue"

        e.currentTarget.reset();
    }

    redirectIt = () => {
        this.setState({isRedirected: true})
    }
    render() {
        const { context } = this.props;
        const authUser = context.authenticatedUser; //either an object holding the authenticated user's name and username values, or null.
        // change the to prop to the next component
        // if (this.state.isRedirected) return <Redirect to={`/teams/${this.state.searchText}`} />

        return (
            <Navbar className="bg-light justify-content-between">
                <Form inline onSubmit={this.submit}>
                    <FormControl inline type="text" placeholder="Search Team" className="mr-sm-2" onChange={this.onSearchChange} />
                    <Button inline onClick={this.redirectIt}>Submit</Button>
                </Form >
                <nav className="navhere">
                    <NavLink to={`/`} className="selected" ><img
                        className="homelogo"
                        src={require("../img/NHL_Logo.png")}
                    /></NavLink>
                    {/*we want an nhl logo image here that we can click that will redirect us*/}
                </nav>
                <nav>
                    {authUser ?
                        <React.Fragment>
                            <span>Welcome, {authUser.email}!</span>
                            <Link className="signout" to="/signout">Sign Out</Link>
                        </React.Fragment>
                        :
                        <React.Fragment>
                            <NavLink to="/login">
                                <Button renderas="button">
                                    <span>Login</span>
                                </Button>
                            </NavLink>
                        </React.Fragment>
                    }
                </nav>
            </Navbar>
        );
    }}