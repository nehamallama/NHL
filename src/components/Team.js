import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Nav from "./Nav";
import Footer from "./Footer";
import {Table} from "react-bootstrap";
import TeamImg from "./TeamImg"
import {NavLink} from "react-router-dom";

export default class Landing extends Component{
    constructor(props) {
        super(props);
        this.state = {
            teamsName: "",
            officialSiteUrl: "",
            firstYearOfPlay: "",
            locationName: "",
            venueName: "",
            confRank:"",
            roster: []
        }
    }

    getTeamStates(data) {
        // if the team name key is in the data.teams object
        //
        const teamNamewSpaces = this.addSpacesToTeamName();

        data.teams.map((element) =>{
            if (element.name === teamNamewSpaces){
                // this.setState({roster: element.roster})
                // // element.roster.roster.map(( element2 ) => {
                // //     this.setState({roster:})
                // // });
              this.setState(
                {
                    teamsName: element.name,
                    locationName: element.locationName,
                    venueName: element.venue.name,
                    firstYearOfPlay: element.firstYearOfPlay,
                    roster: element.roster.roster
                        },
                  // ()=>{
                  //   this.state.roster.map((element)=>{
                  //       console.log(element)
                  //     })
                  // }
              );
            }
        });
    }

    async componentWillMount() {

        const url = ('https://statsapi.web.nhl.com/api/v1/teams?expand=team.roster');
        const response = await (fetch(url));
        const data = await response.json();
        this.getTeamStates(data)
        // console.log('test')
        // console.log(this.state.teamsName)
    }

    addSpacesToTeamName() {
        const teamName = this.props.match.params.team;
        const teamNameForTeamHeader = teamName.replace(/([a-z])([A-Z])/g, '$1 $2');
        return teamNameForTeamHeader

    }

    getTeamRoster() {
        this.state.roster.map((player) => {
            return(
                <td>{player.jerseyNumber}</td>
            );
        })
    }

    cityLink() {

        return (
            <a href={`https://www.google.com/maps/place/${this.state.locationName}`}>{this.state.locationName} </a>

        )

    }

    render() {


        return(
            //if we  have a change in nav and someone presses the button, do a new get with the new match params
            <div style={{width: '100%', margin: 'auto'}}>

                <Grid className="landing-grid">
                    <Cell col={12}>
                       <TeamImg data={this.props.match.params.team}/>
                        <div className="banner-text">
                            <a href={`https://www.${this.props.match.params.team}.com`}>
                                <h1>{this.addSpacesToTeamName()}</h1>
                            </a>

                            <hr/>
                            <div>
                              <p>City: {this.cityLink()} | Venue: {this.state.venueName} | First Year Of Play: {this.state.firstYearOfPlay}</p>

                            </div>

                        </div>

                        <div className="services-team">
                            <div className="service-one">
                                <p className="service-icon"><i className="far fa-calendar-alt"></i></p>
                                <p className="service-title"> Roster: {this.addSpacesToTeamName()} </p>
                                <Table striped bordered hover>
                                    <thead>
                                    <tr>
                                        <th>Player</th>
                                        <th>Jersey Number</th>
                                        <th>Position</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                            {/*state will hold an array of the roster.... index into the roster where each player
                                            printed from map will be a single player from the selected teams  roster*/}
                                            {this.state.roster.map((player,index) => {
                                        return(
                                            //make a row for each player.person.fullName from the player array since were still inside map func
                                            <tr key={index}> {player.person.fullName}
                                            {/*add table data to each column*/}
                                            <td>{player.jerseyNumber}</td>
                                                {/*col1^^^*/}
                                            <td>{player.position.name}</td>
                                                {/*col2 ^^^*/}
                                            </tr>
                                        );
                                            })}

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
