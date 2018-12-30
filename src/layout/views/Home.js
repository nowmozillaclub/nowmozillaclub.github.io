import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class Home extends Component {
  componentWillMount() {
    window.scroll({top: 0, left: 0, behavior: 'smooth' })
  }
  
  render() {
    return (
      <div className="Home">
        <Fade>
          <section className="hero is-fullheight-with-navbar is-light">
            <div className="hero-body">
              <div className="container">
                <h1 className="title is-1 is-spaced">Network for the Open Web</h1>
                <h1 className="subtitle is-3">A Mozilla Campus Club at NMIMS MPSTME</h1>
              </div>
            </div>
          </section>
        </Fade>
      </div>
    );
  }
}

export default Home;
