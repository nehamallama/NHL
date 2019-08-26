import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import Nav from "./Nav";
import { SocialIcon } from 'react-social-icons';
import {NavLink} from "react-router-dom";

export default class Header extends React.PureComponent {

    render() {
        return (

            <header>
                <Nav/>
                <div className="head">
                    <h1>NHL 2018-2019< br/> Data and Statistics</h1>
                    <div>

                        <p>View your favorite NHL team and their statistics for the past season 2018-2019 NHL regular season. Built with MongoDB, Express.js, React.js, and Node.js.</p>
                        <div><a className="contact" href="#">Contact Us</a></div>
                    </div>
                </div>

            </header>
        );
    }
}