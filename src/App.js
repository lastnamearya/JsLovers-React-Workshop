import React, { Component } from 'react';
import './App.css';
import './sass/style.css';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Main from './Main';
import {BrowserRouter} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header name={"Jigyasu"}/>
        <Nav /> 
        <Main/>
        <Footer />
      </React.Fragment>
    </BrowserRouter>
  )
}

export default App;
