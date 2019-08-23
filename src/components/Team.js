import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";


export default class Landing extends Component{
    constructor(props) {
        super(props);
        this.state = {}
    }

    async componentDidMount() {
        const url = ('https://statsapi.web.nhl.com/api/v1/teams');
        const response = await (fetch(url));
        const data = await response.json();
        console.log(this.props.match)
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
                            <h1>Full Stack Web Developer</h1>

                            <hr/>

                            <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | MongoDB</p>

                            <div className="social-links">

                                {/* LinkedIn */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* Github */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>

                                {/* Freecodecamp */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-free-code-camp" aria-hidden="true" />
                                </a>

                                {/* Youtube */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-youtube-square" aria-hidden="true" />
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
                <Footer/>
            </div>
        )
    }
}

