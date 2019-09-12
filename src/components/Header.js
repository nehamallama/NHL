import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
// import { SocialIcon } from 'react-social-icons';
// import {NavLink} from "react-router-dom";
import Nav from "./Nav";
import {Button} from "react-bootstrap";
import {NavLink} from "react-router-dom";

export default class Header extends React.PureComponent {

    render() {
        return (

            <header>
                {/*<Nav/>*/}
                <div className="head">
                    <h1>NHL 2018-2019< br/> Data and Statistics</h1>
                    <div>

                        <p>View your favorite NHL team and their statistics for the past season 2018-2019 NHL regular season. Built with MongoDB, Express.js, React.js, and Node.js.</p>
                        <NavLink to="/register" className="contact">
                            <Button renderas="button">
                                <span>New User? Click Here to Register</span>
                            </Button>
                        </NavLink>
                    </div>
                </div>

            </header>
        );
    }
}