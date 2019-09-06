import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Consumer } from './Context';

export default ({ component: Component, ...rest }) => { //The function first destructures and renames the component prop in its parameters.
  // It also collects any props that get passed to it in a ...rest variable:
  {/*In this case, a <Route> component is rendered inside the consumer and any specified props (like path)
             are passed to it via ...rest.*/}

  return (


    <Consumer>
      { context => (
        <Route // route has access to authUser state bc context
            //The value of context.authenticatedUser is either an object holding the authenticated user's name and username, or null.
          {...rest}

          render={props => context.authenticatedUser ? (//If the user is authenticated, the component specified in <PrivateRoute>'s component prop gets rendered.
              //If the user not authenticated, redirect to /signin:
            <Component {...props} />
            ) : (
             // Pass a state property whose value is the current location of the route the user tried to access:
            <Redirect to={{pathname: '/login'}} /> //The object contains information about the path to redirect to (if not authenticated),
              // and the route the user was trying to access before being redirected.

            //Since pathname: '/signin' renders the UserSignIn component on redirect, you can access from via this.props
            // location.state.from within the UserSignIn component.

            )}

        />
      )}
    </Consumer>
  );
};