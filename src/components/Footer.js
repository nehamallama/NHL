import React, {Component} from 'react';
import {
    Carousel, CarouselItem, Container, Jumbotron, Card, Button, Nav,


} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { SocialIcon } from 'react-social-icons';

export default class Footer extends React.PureComponent {
    render() {

        return (

            <footer>
                <h1>Follow the NHL on Social Media</h1>
                <SocialIcon url="https://twitter.com/NHL"/>
                <SocialIcon url="https://www.instagram.com/nhl/?hl=en"/>
                <SocialIcon url="https://www.facebook.com/NHL/"/>
                <h4>A Website by @nehamallama</h4>
                <SocialIcon url="https://twitter.com/nehamallama"/>


            </footer>

        );
    }
}