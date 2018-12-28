import React, { Component } from 'react';

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render() {
    return (
      <div className="Home">
        <section className="hero is-fullheight-with-navbar is-light">
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-1 is-spaced">Network for the Open Web</h1>
              <h1 className="subtitle is-3">A Mozilla Campus Club at NMIMS MPSTME</h1>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
