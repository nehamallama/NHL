import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    Navbar, Form, InputGroup, FormControl,Button, Nav, NavDropdown


} from 'react-bootstrap';

const Header = () => (

  <header>
      <Navbar className="bg-light justify-content-between" >
          <Form inline>
              <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
              <Button type="submit">Submit</Button>
          </Form>
          <Form inline adjustsFontSizeToFit={true} >
              {' NHL'}

          </Form>

          <Form inline>
                  <Button type="submit">Login</Button>
          </Form>
      </Navbar>
  </header>
);

export default Header;