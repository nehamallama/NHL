import React, { Component } from 'react';
import Caro from "./Caro";
import {
    Table
} from 'react-bootstrap';
import {NavLink} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
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
            countLossesCentral:1,
            countLossesMetro:-17,
            countLossesPacific: 6,
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
                    <Header/>
                    <section className="intro">
                        <h2 > about  </h2>
                        <div>
                            <p>The National Hockey League (NHL; French: Ligue nationale de hockey—LNH) is a professional ice hockey league in North America, currently comprising 31 teams: 24 in the United States and 7 in Canada. The NHL is considered to be the premier professional ice hockey league in the world, and one of the major professional sports leagues in the United States and Canada. The Stanley Cup, the oldest professional sports trophy in North America, is awarded annually to the league playoff champion at the end of each season.</p>
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
                                                this.state.countLossesMetro =this.state.countLossesMetro + 1;
                                                const listValueUrl = listValue.split(" ").join('');
                                                return (
                                                    <tr key={index}>
                                                    <td>{index+1}</td>
                                                    <NavLink to={`teams/${listValueUrl}`}>{listValue } </NavLink>
                                                    <td>{this.state.timmy[this.state.countWinsMetro]}</td>
                                                    <td>{this.state.losses[this.state.countLossesMetro]}</td>
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
                                            const listValueUrl = listValue.split(" ").join('');
                                            return (
                                                <tr key={index}>
                                                    <td>{index+1}</td>
                                                    <NavLink to={`teams/${listValueUrl}`}>{listValue } </NavLink>

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
                                    const listValueUrl = listValue.split(" ").join('');
                                    return (
                                        <tr key={index}>
                                            <td>{index+1}</td>
                                            <NavLink to={`teams/${listValueUrl}`}>{listValue } </NavLink>
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
                                    this.state.countLossesPacific = this.state.countLossesPacific + 1;
                                    const listValueUrl = listValue.split(" ").join('');
                                    return (
                                        <tr key={index}>
                                            <td>{index+1}</td>
                                            <NavLink to={`teams/${listValueUrl}`}>{listValue } </NavLink>
                                            <td>{this.state.timmy[this.state.countWinsPacific] }</td>
                                            <td>{this.state.losses[this.state.countLossesPacific] }</td>
                                        </tr>
                                    );
                                })}
                                </tbody>
                            </Table>
                        </div>
                        </div>
                    <Footer/>
                </main>

        );
    }
}

