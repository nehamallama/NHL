import axios from 'axios'
export default class Data {
    //path is an api end point, req type, body is what will hold the data that is returned from the reqs
    //requiresAuth =false
    // api(path, method = 'POST', body = null, credentials = null)  {
    //     const url = 'http://localhost:5000/' + path; //'http://localhost:5000/api' + path
    //
    //     const options = {
    //         method,
    //         headers: {
    //             'Content-Type': 'application/json; charset=utf-8',
    //         },
    //     };
    //
    //     if (body !== null) {
    //         console.log("brehhhh")
    //         options.body = JSON.stringify(body);
    //     }
    //     else{
    //         console.log("nathan here")
    //     }
    //     // if (requiresAuth){
    //     //     const encodedCredentials = btoa(`${credentials.username}:${credentials.password}`); //      The btoa() method creates a base-64 encoded ASCII string from a "string" of data.
    //     //     // We'll use btoa() to encode the username and password credentials passed to the api() method.
    //     //     // The credentials will be passed as an object containing username and password properties.
    //     //     options.headers['Authorization'] = `Basic ${encodedCredentials}`;
    //     //     //  Authorization: Basic am9lQHNtaXRoLmNvbTpqb2U=
    //     //
    //     // }
    //
    //     return fetch(url, options);
    // }
    //
    // async getUser(username,password) {
    //     const response = await this.api(`/login`, 'POST', null, { username, password });
    //     if (response.status === 200) {
    //         return response.json().then(data => data);
    //     }
    //     else if (response.status === 401) {
    //         return null;
    //     }
    //     else {
    //         throw new Error();
    //     }
    // }

    async getIt(email,password){

        const user = {
                    email: email,
                    password: password,

                }
        const users_email = await axios.post('http://localhost:5000/login', user)
            .then(response => {
                if (response.data){
                    console.log(response.data)
                    return response.data
                }




                // console.log(res.data)
                // //if the user has a session id
                // if (res.data.userId) {
                //     // if we print frig, change the state to true and then do the redirect?
                //     this.setState({isAuthed: true});
                //     this.setState({isAuthed: false});
                //
                //     // we want to redirect on this submit to an authed page or sumn like dat
                //
                // }
            })
        return users_email
    }

    async createUser(user) {
        const response = await this.api('/users', 'POST', user); // gets
        if (response.status === 201) {
            return [];
        }
        else if (response.status === 400) {
            return response.json().then(data => {
                return data.errors;
            });
        }
        else {
            throw new Error();
        }
    }
}
