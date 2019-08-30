import React from 'react';
import {
    Button, Form, FormControl, Navbar


} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import { Redirect } from 'react-router-dom'
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

    shouldWe = () => {
        if (this.state.isRedirected) return <Redirect to={`/teams/${this.state.searchText}`} />
    }

    render() {
        // change the to prop to the next component
        if (this.state.isRedirected) return <Redirect to={`/teams/${this.state.searchText}`} />

        return (
            <Navbar className="bg-light justify-content-between">
                <Form inline onSubmit={this.submit}>
                    <FormControl inline type="text" placeholder="Search Team" className=" mr-sm-2" onChange={this.onSearchChange} />
                    <Button inline onClick={this.redirectIt}>Submit</Button>
                </Form >
                <nav className="navhere">
                    <NavLink to={`/`} className="selected" >NHL</NavLink>
                </nav>
                <NavLink to="/login">
                    <Button renderas="button">
                        <span>Login</span>
                    </Button>
                </NavLink>
            </Navbar>
        );
    }}