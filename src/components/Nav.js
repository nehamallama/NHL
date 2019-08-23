import React, {Component} from 'react';
import {
    Button, Form, FormControl, Navbar


} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./Header"
export default class Nav extends React.PureComponent {

    render() {
        return (
                <Navbar className="bg-light justify-content-between">
                    <Form inline>
                        <FormControl type="text" placeholder="Search Team" className=" mr-sm-2" />
                        <Button type="submit">Submit</Button>
                    </Form >
                    <Form >
                        NHL

                    </Form>

                    <Form inline>
                        <Button type="submit">Login</Button>
                    </Form>
                </Navbar>
        );
    }

}