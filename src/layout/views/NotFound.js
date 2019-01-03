import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { NavLink } from 'react-router-dom';

class NotFound extends Component {
  componentWillMount() {
    window.scroll({top: 0, left: 0, behavior: 'smooth' })
  }
  
  render() {
    return (
      <div className="NotFound has-text-centered">
        <Helmet>
          <title>NOW - 404 Not Found</title>
        </Helmet>
        <section className="hero is-fullheight-with-navbar is-light">
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
