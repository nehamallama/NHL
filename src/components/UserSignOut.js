import React from 'react';
import { Redirect } from 'react-router-dom';

export default ({ context }) => { //Extract the context property from props in the function's parameters:
  context.actions.signOut();

  return (
      <Redirect to="/" />
  );
}