import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NotFound extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render() {
    return (
      <div className="NotFound has-text-centered">
        <section className="hero is-light is-medium">
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-1 has-text-centered">
                404
              </h1>
              <h1 className="title is-3 has-text-centered">
                Page Not Found
              </h1>
              <h1 className="subtitle has-text-centered">
                The page you requested does not exist.
              </h1>
              <NavLink className="button is-medium is-dark" to="/">Home</NavLink>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default NotFound;
