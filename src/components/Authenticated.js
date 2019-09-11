import React from 'react';

export default ({context}) => { // subscirber to the whats provided in the values of Context class

  const authUser = context.authenticatedUser; //weve subscribed the authenticated file to the provider and will now be able to access the context props
  console.log(authUser)
  return (

  <div className="bounds">
    <div className="grid-100">
      <h1> {authUser} is authenticated!</h1>
    </div>
  </div>
  );
}