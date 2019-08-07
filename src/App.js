import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import Header from "./components/Header";


function App() {
  return (
      <BrowserRouter>
        <Header/>

      </BrowserRouter>

  );
}

export default App;
