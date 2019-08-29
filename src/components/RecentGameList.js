import React, { Component } from 'react';
import axios from "axios";
import Main from "./Main";

export default class RecentGameList extends Component {

    constructor(props) {
        super(props);


    }
    componentDidMount() {

        axios.get('https://nhl-score-api.herokuapp.com/api/scores/latest')
            .then(response => {
                this.setState({
                    latest: response.data
                })

            })
    }




    render() {
        return (
            <Main data={this.state.latest}/>


        );
    }
}


