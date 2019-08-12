import React, { Component } from 'react';
import Caro from "./Caro";
import Video from "./Video";


export default class Main extends Component {
    render() {
        return (
            <main>


                <section className="intro">
                    <h2>About Us</h2>
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
                            <p>Mauris vitae turpis ut sem blandit consequat et at ligula. Suspendisse quam lectus, tristique dapibus sapien et, tempus suscipit nisl.</p>
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
                    </div>

                </div>
            </main>
        );
    }
}

