import React, { Component } from 'react';

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render() {
    return (
      <div className="Home">
        <section className="hero is-fullheight-with-navbar">
          <div className="hero-body">
            <div className="container">
              <h1 className="title has-text-centered">Home</h1>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
