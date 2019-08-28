import React from "react";
import axios from "axios";

export default class TeamImg extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            img: ''
        }
    }
    arrayBufferToBase64( buffer ) {
        var binary = '';
        var bytes = new Uint8Array( buffer );
        var len = bytes.byteLength;
        for (var i = 0; i < len; i++) {
            binary += String.fromCharCode( bytes[ i ] );
        }
        return window.btoa( binary );
    }
    // arrayBufferToBase64(buffer) {
    //
    //     var binary = '';
    //     var bytes = [].slice.call(new Uint8Array(buffer));
    //     bytes.forEach((b) => binary += String.fromCharCode(b));
    //     return window.btoa(binary);
    // };

    componentDidMount() {
        axios.get('http://localhost:5000/test')
            .then(response => {
                console.log(response.data.img.data.data)

                var base64Flag = 'data:image/jpeg;base64,';
                var imageStr = this.arrayBufferToBase64(response.data.img.data.data)

                console.log(imageStr)
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
                alt='Helpful alt text'/>
        )
    }

}