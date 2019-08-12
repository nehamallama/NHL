import React, {Component} from 'react';
import {
    Carousel, CarouselItem, Container, Jumbotron, Card, Button


} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
export default class Footer extends React.PureComponent {
    render() {

        return (

            <footer>
                <h3>DesignLabs by aldocaava</h3>
                <p>Support <br/> DesignLabs@supportme.com</p>
                <ul>
                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                </ul>
            </footer>

        );
    }
}