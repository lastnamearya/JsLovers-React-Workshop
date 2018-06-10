import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './sass/style.css';
import Header from './Header';
import Nav from './Nav';
import Bio from './Bio';
import Portfolio from './Portfolio';
import Footer from './Footer';


const App = () => {
  return (
    <React.Fragment>
      <Header/>
      <Nav />
      <Bio />
      <Portfolio />
      <Footer />
    </React.Fragment>
  )
}

export default App;
