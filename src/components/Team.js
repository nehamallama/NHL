import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import {NavLink} from "react-router-dom";
import {Table} from "react-bootstrap";
import {thisTypeAnnotation} from "@babel/types";

export default class Landing extends Component{
    constructor(props) {
        super(props);
        this.state = {
            officialSiteUrl: "",
            firstYearOfPlay: "",
            locationName: "",
            venueName: "",
            confRank:"",
        }
    }

    async getTeamStates(data) {
        // if the team name key is in the data.teams object
        console.log(data)
        // var keys = Object.keys(data.teams)
        // console.log(keys)
        const teamNamewSpaces = this.addSpacesToTeamName();

        data.teams.map((element) =>{
            console.log(element)
            if (element.name === teamNamewSpaces){

              this.setState(
                {
                    locationName: element.locationName,
                    venueName: element.venue.name,
                        firstYearOfPlay: element.firstYearOfPlay,
                        }, ()=>console.log(this.state.firstYearOfPlay)
              );
            }
        });



    }

    async componentDidMount() {
        const url = ('https://statsapi.web.nhl.com/api/v1/teams?expand=team.roster');
        const response = await (fetch(url));
        const data = await response.json();
        this.getTeamStates(data)
    }

    addSpacesToTeamName() {
        const teamName = this.props.match.params.team;
        const teamNameForTeamHeader = teamName.replace(/([a-z])([A-Z])/g, '$1 $2');
        return teamNameForTeamHeader

    }
    addSpacesToTeamName2() {
        const teamName = this.props.match.params.team;
        const teamNameForTeamHeader = teamName.replace(/([a-z])([A-Z])/g, '$1 $2');
        return (
            <p>{teamNameForTeamHeader} | {teamNameForTeamHeader}</p>
        );

    }


    render() {
        return(

            <div style={{width: '100%', margin: 'auto'}}>
                    <Header/>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>{this.addSpacesToTeamName()}</h1>

                            <hr/>

                            <p>City: {this.state.locationName} | Venue: {this.state.venueName} | First Year Of Play: {this.state.firstYearOfPlay}</p>


                        </div>

                        <div className="services-team">
                            <div className="service-one">
                                <p className="service-icon"><i className="far fa-calendar-alt"></i></p>
                                <p className="service-title"> team</p>
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

                                        return (
                                            <tr >
                                                <td></td>
                                                <NavLink>hi </NavLink>
                                                <td>hello</td>

                                            </tr>
                                        );
                                    })
                                    }
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </Cell>
                </Grid>
                <Footer/>
            </div>
        )
    }
}
