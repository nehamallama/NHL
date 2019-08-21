import React, { Component } from 'react';
import Caro from "./Caro";
import {
    Table
} from 'react-bootstrap';
import NavLink from "react-bootstrap/NavLink";
export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            division: {
                Metropolitan: "",
                Central: "",
                Pacific: "",
                Atlantic: ""
            },
            teamRank: [],
            timmy: [],
            losses:[],
            countWinsAtlantic: -9,
            countWinsPacific: 6,
            countWinsCentral: 1,
            countWinsMetro: -17,
            countLossesAtlantic: -9,
            countLossesCentral:1


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
        //
        let teamRank = [];
        let timmy = [];
        let losses = [];
        data2.records.map((element)=>{
            element.teamRecords.map((element2,index) => {

                const teamNames = element2.team.name;
                const teamWins = element2.leagueRecord.wins;
                const rankAndTeam = teamNames + index;
                teamRank.push(teamNames);
                timmy.push(teamWins);


            });

        })
        data2.records.map((element)=>{
            element.teamRecords.map((element2,index) => {

                const teamNames = element2.team.name;
                const teamLosses = element2.leagueRecord.losses;
                const rankAndTeam = teamNames + index;
                losses.push(teamLosses)


            });

        })
        this.setState({teamRank}, ()=>console.log(this.state.teamRank));
        this.setState({timmy}, ()=>console.log(this.state.timmy));
        this.setState({losses}, ()=>console.log(this.state.losses));



    }
    //we want a function that we can call that will return a table row for each item in the teamRank state array
    render() {
            return (
            <main>
                <section className="intro">
                    <h2 > about  </h2>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel gravida nisi. Vestibulum ac consequat lorem. In in mi massa. Donec ut tellus sit amet sem ornare fermentum at et nunc. Pellentesque ac elementum metus. Praesent non venenatis lacus. In sagittis urna in nulla sagittis mattis.</p>
                    </div>
                </section>
                    <Caro/>
                    <div className="services">
                        <div className="service-one">
                            <p className="service-icon"><i className="far fa-calendar-alt"></i></p>
                            <p className="service-title"> {this.state.division.Metropolitan}</p>
                                <Table striped bordered hover>
                                <thead>
                                <tr>
                                    <th>Rank</th>
                                    <th>Team</th>
                                    <th>Wins</th>
                                    <th>Losses</th>
                                </tr>
                                </thead>
                                    <tbody>

                                        {/*for each listValue in the slice, add a corresponding wins# from the win state*/}
                                        {/*create a global state value and set it to */}

                                        {this.state.teamRank.slice(0,8).map(( listValue, index ) => {
                                            this.state.countWinsMetro = this.state.countWinsMetro + 1;

                                            return (
                                                <tr key={index}>
                                                <td>{index+1}</td>
                                                <NavLink>{listValue }</NavLink>
                                                <td>{this.state.timmy[this.state.countWinsMetro]}</td>

                                                </tr>
                                            );
                                    })
                                        }

                                    </tbody>
                                </Table>
                        </div><div className="service-one">
                        <p className="service-icon"><i className="far fa-calendar-alt"></i></p>
                        <p className="service-title"> {this.state.division.Atlantic}</p>
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>Rank</th>
                                <th>Team</th>
                                <th>Wins</th>
                                <th>Losses</th>
                            </tr>
                            </thead>
                                <tbody>
                                    {/*for each listValue in the slice, add a corresponding wins# from the win state*/}
                                    {/*create a global state value and set it to */}
                                    {this.state.teamRank.slice(8,16).map(( listValue, index ) => {
                                        this.state.countWinsAtlantic = this.state.countWinsAtlantic + 1;
                                        this.state.countLossesAtlantic = this.state.countLossesAtlantic + 1;
                                        return (
                                            <tr key={index}>
                                                <td>{index+1}</td>
                                                <NavLink>{listValue }</NavLink>
                                                <td>{this.state.timmy[this.state.countWinsAtlantic] }</td>
                                                <td>{this.state.losses[this.state.countLossesAtlantic]}</td>
                                            </tr>
                                        );
                                    })
                                    }
                                </tbody>
                        </Table>
                    </div><div className="service-one">
                        <p className="service-icon"><i className="far fa-calendar-alt"></i></p>
                        <p className="service-title"> {this.state.division.Central}</p>
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>Rank</th>
                                <th>Team</th>
                                <th>Wins</th>
                                <th>Losses</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.teamRank.slice(16,23).map(( listValue, index ) => {
                                this.state.countWinsCentral= this.state.countWinsCentral + 1;
                                this.state.countLossesCentral = this.state.countLossesCentral + 1;
                                return (
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <NavLink>{listValue}</NavLink>
                                        <td>{this.state.timmy[this.state.countWinsCentral] }</td>
                                        <td>{this.state.losses[this.state.countLossesCentral]}</td>


                                    </tr>
                                );
                            })}
                            </tbody>
                        </Table>
                    </div><div className="service-one">
                        <p className="service-icon"><i className="far fa-calendar-alt"></i></p>
                        <p className="service-title"> {this.state.division.Pacific}</p>
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>Rank</th>
                                <th>Team</th>
                                <th>Wins</th>
                                <th>Losses</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.teamRank.slice(23,).map(( listValue, index ) => {
                                this.state.countWinsPacific = this.state.countWinsPacific + 1;
                                return (
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <NavLink>{listValue}</NavLink>
                                        <td>{this.state.timmy[this.state.countWinsPacific] }</td>
                                    </tr>
                                );
                            })}
                            </tbody>
                        </Table>
                    </div>
                    </div>
            </main>
        );
    }
}

