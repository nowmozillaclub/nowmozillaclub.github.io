import React, { Component } from 'react';
import Helmet from 'react-helmet';

class Home extends Component {
  componentWillMount() {
    window.scroll({top: 0, left: 0, behavior: 'smooth' })
  }
  
  render() {
    return (
      <div className="Home">
        <Helmet>
          <title>Network for the Open Web</title>
        </Helmet>
        <section className="hero is-fullheight-with-navbar is-light">
          <div className="hero-body">
            <div className="container is-hidden-desktop">
              <h1 className="title is-1 is-spaced">Network for the Open Web</h1>
              <h1 className="subtitle is-3">A Mozilla Campus Club at NMIMS MPSTME</h1>
            </div>
            <div className="container is-hidden-touch">
              <h1 className="subtitle is-1 is-spaced">A <b>Mozilla Campus Club</b> at <b>NMIMS MPSTME</b></h1>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
