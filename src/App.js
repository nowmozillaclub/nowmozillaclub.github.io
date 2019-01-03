import React, { Component } from 'react';
import Helmet from 'react-helmet';

import './App.css';

import Navbar from './layout/Navbar';
import Content from './layout/Content';
import Footer from './layout/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <body className="has-navbar-fixed-top"/>
          <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet"/>
          <script defer src="https://use.fontawesome.com/releases/v5.6.1/js/all.js" integrity="sha384-R5JkiUweZpJjELPWqttAYmYM1P3SNEJRM6ecTQF05pFFtxmCO+Y1CiUhvuDzgSVZ" crossorigin="anonymous"/>
        </Helmet>
        <Navbar/>
        <Content/>
        <Footer/>
      </div>
    );
  }
}

export default App;
