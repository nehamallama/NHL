import React, { Component } from 'react';
import Caro from "./Caro";
import axios from "axios";
import {
    Table


} from 'react-bootstrap';
import Video from "./Video";


export default class Main extends Component {
    state = {
        latest: ""
    }

    async componentDidMount() {

        const url = ('https://statsapi.web.nhl.com/api/v1/standings');
        const response = await (fetch(url));
        const data = await response.json();
        const here = await data.records;
        console.log(here);


        this.setState({latest: here})

    }



    render() {



        return (
            <main>


                <section className="intro">
                    <h2 > about </h2>
                    <div>

                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel gravida nisi. Vestibulum ac consequat lorem. In in mi massa. Donec ut tellus sit amet sem ornare fermentum at et nunc. Pellentesque ac elementum metus. Praesent non venenatis lacus. In sagittis urna in nulla sagittis mattis.</p>
                    </div>
                </section>

                <div>
                    <Caro/>
                    <div className="services">


                        <div className="service-one">
                            <p className="service-icon"><i className="far fa-calendar-alt"></i></p>
                            <p className="service-title">Planning</p>

                                <Table striped bordered hover>
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td colSpan="2">Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr><tr>
                                        <td>3</td>
                                        <td colSpan="2">Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr><tr>
                                        <td>3</td>
                                        <td colSpan="2">Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr><tr>
                                        <td>3</td>
                                        <td colSpan="2">Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr><tr>
                                        <td>3</td>
                                        <td colSpan="2">Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr><tr>
                                        <td>3</td>
                                        <td colSpan="2">Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr><tr>
                                        <td>3</td>
                                        <td colSpan="2">Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                    </tbody>
                                </Table>

                        </div>
                        <div className="service-two">
                            <p className="service-icon"><i className="fas fa-crop"></i></p>
                            <p className="service-title">Design</p>
                            <p>Nulla eu metus faucibus, vehicula tortor quis, venenatis odio. Nullam purus mauris, feugiat in odio vitae, posuere volutpat libero. Sed et convallis libero.</p>

                        </div>
                        <div className="service-three">
                            <p className="service-icon"><i className="fas fa-code"></i></p>
                            <p className="service-title">Development</p>
                            <p>Ut ornare vitae enim a rhoncus. Nullam aliquet tristique scelerisque. Sed volutpat dictum risus ac laoreet. Suspendisse id lorem in enim sollicitudin varius.</p>

                        </div>
                        <div className="service-three">
                            <p className="service-icon"><i className="fas fa-code"></i></p>
                            <p className="service-title">Development</p>
                            <p>Ut ornare vitae enim a rhoncus. Nullam aliquet tristique scelerisque. Sed volutpat dictum risus ac laoreet. Suspendisse id lorem in enim sollicitudin varius.</p>

                        </div>
                    </div>

                </div>
            </main>
        );
    }
}

