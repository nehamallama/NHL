import React, {Component} from 'react';
import {
    Carousel, CarouselItem, Container, Jumbotron, Card, Button


} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
export default class Caro extends React.PureComponent {
    render() {

        return(

            <Card style={{ width: '50rem' }}>
                <Card.Body>
                    <Carousel className={'mycaro'}>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={require("../img/NHL_Logo.png")}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={require("../img/rink2.jpg")}
                                alt="Third slide"
                            />
                        </Carousel.Item>

                    </Carousel>


                </Card.Body>
            </Card>

        );




    }


}
