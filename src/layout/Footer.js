import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="footer has-background-light">
          <div className="container">
            <div className="columns direction">
              <div className="column">
                <ul>
                  <li>
                    <NavLink className="subtitle is-size-6 is-uppercase has-text-weight-bold" to="/home">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="subtitle is-size-6 is-uppercase has-text-weight-bold" to="/about">
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="subtitle is-size-6 is-uppercase has-text-weight-bold" to="/events">
                      Events
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="subtitle is-size-6 is-uppercase has-text-weight-bold" to="/members">
                      Members
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="subtitle is-size-6 is-uppercase has-text-weight-bold" to="/gamescript">
                      GameScript
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="subtitle is-size-6 is-uppercase has-text-weight-bold" to="/githack">
                      GitHack
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="subtitle is-size-6 is-uppercase has-text-weight-bold" to="/android">
                      Android
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="subtitle is-size-6 is-uppercase has-text-weight-bold" to="/contact">
                      Contact
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="subtitle is-size-6 is-uppercase has-text-weight-bold" to="/privacy">
                      Privacy
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
                <form className="has-text-centered" action="https://facebook.us12.list-manage.com/subscribe/post" method="POST">
                  <input type="hidden" name="u" value="5e7bc22114e069041bcc912ce"/>
                  <input type="hidden" name="id" value="3ea9945a0e"/>
                  <div className="field has-addons has-text-centered">
                    <div className="control">
                      <input className="input is-medium" placeholder="Email address" type="email" name="EMAIL" id="EMAIL"/>
                      <input className="is-hidden" type="text" name="b_5e7bc22114e069041bcc912ce_3ea9945a0e" tabindex="-1" value=""/>
                    </div>
                    <div className="control">
                      <input className="button is-warning is-medium" type="submit" name="subscribe" value="Subscribe"/>
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
