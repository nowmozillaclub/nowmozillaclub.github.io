import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="footer">
          <div className="container">
            <div className="columns direction">
              <div className="column">
                <ul>
                  <li>
                    <NavLink className="subtitle is-size-6 is-uppercase has-text-weight-bold" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="subtitle is-size-6 is-uppercase has-text-weight-bold" to="/">
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="subtitle is-size-6 is-uppercase has-text-weight-bold" to="/">
                      Events
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="subtitle is-size-6 is-uppercase has-text-weight-bold" to="/">
                      Projects
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="subtitle is-size-6 is-uppercase has-text-weight-bold" to="/">
                      Contact
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="subtitle is-size-6 is-uppercase has-text-weight-bold" to="/">
                      Privacy Policy
                    </NavLink>
                  </li>
                </ul>
                <br/>
                <p className="subtitle is-size-6">&copy; 2018 Network for the Open Web, Mumbai.</p>
              </div>
              <div className="column has-text-centered">
                <NavLink to="/"><img src="/logo.png" width="100" height="100" alt="Logo"/></NavLink>
              </div>
              <div className="column">
                <p className="subtitle is-size-5 has-text-weight-bold">Subscribe to our Newsletter</p>
                <form className="has-text-centered">
                  <div className="field has-addons has-text-centered">
                    <div className="control">
                      <input className="input is-medium" type="email" placeholder="Email address"/>
                    </div>
                    <div className="control">
                      <input className="button is-warning is-medium" type="button" value="Subscribe" disabled/>
                    </div>
                  </div>
                </form>
                <p className="subscribe is-size-6">Be the first to know about events and workshops!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
