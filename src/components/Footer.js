import React, {Component} from 'react';
import {
    Carousel, CarouselItem, Container, Jumbotron, Card, Button


} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import NavLink from "react-bootstrap/NavLink";
export default class Footer extends React.PureComponent {
    render() {

        return (

            <footer>
                <h3>NHL</h3>
                <p>Support <br/>@LLama</p>
                <ul>
                    <li><NavLink>className="fab fa-facebook-f"></NavLink></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                </ul>
            </footer>

        );
    }
}