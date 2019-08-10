import React, {Component} from 'react';
import {
    Carousel, CarouselItem, Container, Jumbotron


} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
export default class Caro extends React.PureComponent {
    render() {

        return(




                    <Carousel className={'mycaro'}>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={require("../img/NHL_Logo.png")}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={require("../img/rink2.jpg")}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="../img/NHL_Logo.png"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>



        );




    }


}
