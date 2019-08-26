import React, {Component} from 'react';
import {
    Button, Form, FormControl, Navbar


} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import Header from "./Header"
import { Redirect } from 'react-router-dom'

export default class Nav extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        }
        this.submit = this.submit.bind(this);
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
        this.props.history.push(`teams/${this.state.searchText}`)
    }
    render() {
        return (
                <Navbar className="bg-light justify-content-between">
                    <Form onSubmit={this.submit}  >
                        <FormControl type="text" placeholder="Search Team" className=" mr-sm-2" onChange={this.onSearchChange} />
                        <Button   type="submit">Submit</Button>
                    </Form >
                    <div className='logo'>NHL</div>
                    <Form inline>
                        <Button type="submit" onClick={this.redirectIt}>Login</Button>
                    </Form>
                </Navbar>
        );
    }
}