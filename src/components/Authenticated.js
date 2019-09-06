import React from 'react';

export default ({context}) => { // subscirber to the whats provided in the values of Context class

  // const authUser = context.authenticatedUser; //first prop in Context's values
  return (
  <div className="bounds">
    <div className="grid-100">
      <h1>You are authenticated!</h1>
    </div>
  </div>
  );
}