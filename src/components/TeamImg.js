import React from "react";
import axios from "axios";

export default class TeamImg extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            img: ''
        }
    }
    arrayBufferToBase64( buffer ) { //where we pass the image data containing the image buffer for the teams assigned photo
        var binary = '';
        var bytes = new Uint8Array( buffer );
        var len = bytes.byteLength;
        for (var i = 0; i < len; i++) {
            binary += String.fromCharCode( bytes[ i ] );
        }
        return window.btoa( binary );
    }
    componentDidMount() {
        // console.log('crap')
        // console.log(this.props.data)
        axios.get(`http://localhost:5000/teams/${this.props.data}`)

            .then(response => {
                // console.log(response.data.img.imgData.data)//lol the dot notation to get to the actual image buffer data
                var base64Flag = 'data:image/jpeg;base64,';
                var imageStr = this.arrayBufferToBase64(response.data.img.imgData.data)
                // console.log(imageStr)
                this.setState({img: base64Flag + imageStr})
            })
            .catch((error) => {
                console.log(error);
            })
    }
    render() {
        return (
            <img
                src={this.state.img}
                alt='Helpful alt text'
                className="avatar-img"/>
        )
    }

}