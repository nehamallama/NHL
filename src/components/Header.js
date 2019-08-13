import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import Nav from "./Nav";
export default class Header extends React.PureComponent {

    render() {
        return (

            <header>
                <Nav/>
                <div className="head">
                    <h1>NHL 2018-2019< br/> Data and Statistics</h1>
                    <div>
                        <p>View your favorite NHL team and their statistics for the past season 2018-2019 NHL regular season. Enjoy the state of the art react.js front end.</p>
                        <div><a className="contact" href="#">Contact Us</a></div>
                    </div>
                </div>

            </header>
        );
    }
}