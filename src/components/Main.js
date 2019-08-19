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
            teamRank: [],

            }
    }
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
        // data2.records.map((element)=>{
        //         element.teamRecords.map((element2,index) => {
        //             const teamNames = element2.team.name;
        //             const rankAndTeam = (teamNames + index);
        //
        //
        //             const rank2 = rankAndTeam.split(/\[[0-9]+\]/)
        let teamRank = [];
        data2.records.map((element)=>{
            element.teamRecords.map((element2,index) => {
                const teamNames = element2.team.name;
                const rankAndTeam = teamNames + index;
                console.log(rankAndTeam);
                teamRank.push(teamNames)
            });
        })
        this.setState({teamRank}, ()=>console.log(this.state.teamRank))
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
                    <section className="intro">
                        <h2 > Standings  </h2>

                        <div>
                            <p> The final standings for each division during the 2018-2019 NHL season</p>
                        </div>
                    </section>
                    <div className="services">


                        <div className="service-one">
                            <p className="service-icon"><i className="far fa-calendar-alt"></i></p>
                            <p className="service-title"> {this.state.division.Metropolitan}</p>

                                <Table striped bordered hover>
                                    <thead>
                                    <tr>
                                        <th></th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                    </tr>
                                    </thead>
                                    <tbody>

                                    <tr>
                                        <td>1</td>
                                        <td>{this.state.teamRank[0]}</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>{this.state.teamRank[1]}</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr><tr>
                                        <td>3</td>
                                        <td>{this.state.teamRank[2]}</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr><tr>
                                        <td>4</td>
                                        <td>{this.state.teamRank[3]}</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr><tr>
                                        <td>5</td>
                                        <td>{this.state.teamRank[4]}</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr><tr>
                                        <td>6</td>
                                        <td>{this.state.teamRank[5]}</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr><tr>
                                        <td>7</td>
                                        <td>{this.state.teamRank[6]}</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr><tr>
                                        <td>8</td>
                                        <td>{this.state.teamRank[7]}</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>

                                    </tbody>
                                </Table>

                        </div><div className="service-one">
                            <p className="service-icon"><i className="far fa-calendar-alt"></i></p>
                            <p className="service-title"> {this.state.division.Atlantic}</p>

                                <Table striped bordered hover>
                                    <thead>
                                    <tr>
                                        <th></th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                    </tr>
                                    </thead>
                                    <tbody>

                                    <tr>
                                        <td>1</td>
                                        <td>{this.state.teamRank[8]}</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>{this.state.teamRank[9]}</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr><tr>
                                        <td>3</td>
                                        <td>{this.state.teamRank[10]}</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr><tr>
                                        <td>4</td>
                                        <td>{this.state.teamRank[11]}</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr><tr>
                                        <td>5</td>
                                        <td>{this.state.teamRank[12]}</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr><tr>
                                        <td>6</td>
                                        <td>{this.state.teamRank[13]}</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr><tr>
                                        <td>7</td>
                                        <td>{this.state.teamRank[14]}</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr><tr>
                                        <td>8</td>
                                        <td>{this.state.teamRank[15]}</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>

                                    </tbody>
                                </Table>

                        </div><div className="service-one">
                            <p className="service-icon"><i className="far fa-calendar-alt"></i></p>
                            <p className="service-title"> {this.state.division.Central}</p>

                                <Table striped bordered hover>
                                    <thead>
                                    <tr>
                                        <th></th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                    </tr>
                                    </thead>
                                    <tbody>

                                    <tr>
                                        <td>1</td>
                                        <td>{this.state.teamRank[16]}</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>{this.state.teamRank[17]}</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr><tr>
                                        <td>3</td>
                                        <td>{this.state.teamRank[18]}</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr><tr>
                                        <td>4</td>
                                        <td>{this.state.teamRank[19]}</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr><tr>
                                        <td>5</td>
                                        <td>{this.state.teamRank[20]}</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr><tr>
                                        <td>6</td>
                                        <td>{this.state.teamRank[21]}</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr><tr>
                                        <td>7</td>
                                        <td>{this.state.teamRank[22]}</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr><tr>
                                        <td>8</td>
                                        <td>{this.state.teamRank[23]}</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>

                                    </tbody>
                                </Table>

                        </div><div className="service-one">
                            <p className="service-icon"><i className="far fa-calendar-alt"></i></p>
                            <p className="service-title"> {this.state.division.Pacific}</p>

                                <Table striped bordered hover>
                                    <thead>
                                    <tr>
                                        <th></th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                    </tr>
                                    </thead>
                                    <tbody>

                                    <tr>
                                        <td>1</td>
                                        <td>{this.state.teamRank[24]}</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>{this.state.teamRank[25]}</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr><tr>
                                        <td>3</td>
                                        <td>{this.state.teamRank[26]}</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr><tr>
                                        <td>4</td>
                                        <td>{this.state.teamRank[27]}</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr><tr>
                                        <td>5</td>
                                        <td>{this.state.teamRank[28]}</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr><tr>
                                        <td>6</td>
                                        <td>{this.state.teamRank[29]}</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr><tr>
                                        <td>7</td>
                                        <td>{this.state.teamRank[30]}</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr><tr>
                                        <td>8</td>
                                        <td>{this.state.teamRank[31]}</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>

                                    </tbody>
                                </Table>

                        </div>
                    </div>

                </div>
            </main>
        );
    }
}

