import React, { Component } from 'react';
import Caro from "./Caro";
import axios from "axios";
import {
    Table


} from 'react-bootstrap';
import Video from "./Video";


export default class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            latest: "",
            division : {
                Metropolitan: "",
                Central: "",
                Pacific: "",
                Atlantic: ""
            },
            divRank: {

                0:"",
                1:"",
                2:"",
                3:"",
                4:"",
                5:"",
                6:"",
                7:"",
            },
            teamRank: ""
        }


    }

    // state = {
    //     latest: "",
    //     division : {
    //         Metropolitan: "",
    //         Central: "",
    //         Pacific: "",
    //         Atlantic: ""
    //     },
    //     divRank: {
    //
    //         0:"",
    //         1:"",
    //         2:"",
    //         3:"",
    //         4:"",
    //         5:"",
    //         6:"",
    //         7:"",
    //     },
    //     teamRank: ""
    // }


    async componentDidMount() {
        //get division names
        const url = ('https://statsapi.web.nhl.com/api/v1/standings');
        const response = await (fetch(url));
        const data = await response.json();
        for (var i = 0; i < 4; i++) {
            const data3 = data.records[i].division.name; //records store divs,confs,standings,etc,.division key.name of division
            this.setState({division: {...this.state.division, [data3]: data3}})
        }
        const url2 = ('https://statsapi.web.nhl.com/api/v1/standings');
        const response2 = await (fetch(url2));
        const data2 = await response2.json();

        data2.records.map(async function(element){
                element.teamRecords.map(function(element2,index){
                    const teamNames = element2.team.name;
                    const rankAndTeam = teamNames + index;
                    console.log(rankAndTeam)
                    // this.setState({teamRank: rankAndTeam})


            });

        });


    }
    render() {
            return (
            <main>


                <section className="intro">
                    <h2 > about  </h2>

                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel gravida nisi. Vestibulum ac consequat lorem. In in mi massa. Donec ut tellus sit amet sem ornare fermentum at et nunc. Pellentesque ac elementum metus. Praesent non venenatis lacus. In sagittis urna in nulla sagittis mattis.</p>
                    </div>
                </section>

                <div>
                    <Caro/>
                    <div className="services">


                        <div className="service-one">
                            <p className="service-icon"><i className="far fa-calendar-alt"></i></p>
                            <p className="service-title"> {this.state.division.Metropolitan}</p>

                                <Table striped bordered hover>
                                    <thead>
                                    <tr>
                                        <th>{this.state.teamRank}</th>
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
                            <p className="service-title">{this.state.division.Pacific}</p>
                            <p>Nulla eu metus faucibus, vehicula tortor quis, venenatis odio. Nullam purus mauris, feugiat in odio vitae, posuere volutpat libero. Sed et convallis libero.</p>

                        </div>
                        <div className="service-three">
                            <p className="service-icon"><i className="fas fa-code"></i></p>
                            <p className="service-title">{this.state.division.Central}</p>
                            <p>Ut ornare vitae enim a rhoncus. Nullam aliquet tristique scelerisque. Sed volutpat dictum risus ac laoreet. Suspendisse id lorem in enim sollicitudin varius.</p>

                        </div>
                        <div className="service-three">
                            <p className="service-icon"><i className="fas fa-code"></i></p>
                            <p className="service-title">{this.state.division.Atlantic}t</p>
                            <p>Ut ornare vitae enim a rhoncus. Nullam aliquet tristique scelerisque. Sed volutpat dictum risus ac laoreet. Suspendisse id lorem in enim sollicitudin varius.</p>

                        </div>
                    </div>

                </div>
            </main>
        );
    }
}

