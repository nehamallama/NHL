import React, { Component } from 'react';
import Data from './Data';
import Cookies from 'js-cookie';

const Context = React.createContext();

export class Provider extends Component {

    constructor() {
        super();
        this.data = new Data();
        console.log(this.data);
    }
    state = {
        authenticatedUser:  null
    };

    render() {
        const {authenticatedUser} = this.state;
        const value = {
            authenticatedUser, //get shis prop from above... is the only state of the provider
            data: this.data, //Data->routes
            actions: {
                signIn: this.signIn,
                signOut: this.signOut
            }
        };
        return (
            //  values are passed down from above
            <Context.Provider value={value}>

                {this.props.children}
            </Context.Provider>
        );
    }


    signIn = async (username, password) => {
        const user = await this.data.getUser(username,password); //awaits the promise returned by get user
        // GET DATA FROM MONGOHERE FOR LOG IN
        if (user !== null) {
            this.setState(() => {
                return {
                    authenticatedUser: user,
                };
            });
            Cookies.set('authenticatedUser',JSON.stringify(user),  { expires: 1 });
            // cookie name, The second argument specifies the value to store in the cookie. In this case, store the stringified user object:
            //1, for example, creates a cookie that expires 1 day from now.
        }

        return user;
    }

    // signOut = () => {
    //     this.setState(() => {
    //         return {
    //             authenticatedUser: null,
    //         };
    //     });
    //     Cookies.remove('authenticatedUser');
    // }
}

export const Consumer = Context.Consumer;

/**
 * A higher-order component that wraps the provided component in a Context Consumer component.
 * @param {class} Component - A React component.
 * @returns {function} A higher-order component.
 */

export default function withContext(Component) {
    return function ContextComponent(props) {
        return (
            <Context.Consumer>
                {context => <Component {...props} context={context} />}
            </Context.Consumer>
        );
    }
}

