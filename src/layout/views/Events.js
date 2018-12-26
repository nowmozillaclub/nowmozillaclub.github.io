import React, { Component } from 'react';

class Events extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render() {
    return (
      <div className="Events">
        <section className="hero is-fullheight-with-navbar">
          <div className="hero-body">
            <div className="container">
              <h1 className="title has-text-centered">Events</h1>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Events;
