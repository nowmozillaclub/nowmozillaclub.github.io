import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      title: 'NOW',
      isMenuActive: false,
    };
    this.setTitle = this.setTitle.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  setTitle() {
    if (window.innerWidth > 480) {
      this.setState({ title: 'Network for the Open Web'});
    } else {
      this.setState({ title: 'NOW'});
    }
  }

  toggleMenu() {
    this.setState({ isMenuActive: !this.state.isMenuActive });
  }

  componentWillMount() {
    this.setTitle();
    window.addEventListener('resize', this.setTitle);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setTitle);
  }

  render() {
    var navbarMenu = "navbar-menu";
    var navbarBurger = "navbar-burger burger";
    if (this.state.isMenuActive) {
      navbarMenu = "navbar-menu is-active";
      navbarBurger = "navbar-burger burger is-active";
    }
    return (
      <div className="Navbar">
        <nav className="navbar is-fixed-top is-spaced has-shadow is-light" role="navigation" aria-label="main navigation">
          <div className="container">
            <div className="navbar-brand">
              <NavLink className="navbar-item" to="/">
                <span className="title">{this.state.title}</span>
              </NavLink>
              <a className="navbar-item is-hidden-desktop" href="https://facebook.com/nowmozillaclub" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-lg fa-facebook-f"/>
              </a>
              <a className="navbar-item is-hidden-desktop" href="https://instagram.com/nowmozillaclub" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-lg fa-instagram"/>
              </a>
              <a className="navbar-item is-hidden-desktop" href="https://twitter.com/nowmozillaclub" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-lg fa-twitter"/>
              </a>
              <a className="navbar-item is-hidden-desktop" href="https://github.com/nowmozillaclub" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-lg fa-github"/>
              </a>
              <div className={navbarBurger} onClick={this.toggleMenu} role="button" aria-label="menu" aria-expanded="false" data-target="nowNavbar">
                <span aria-hidden="true"/>
                <span aria-hidden="true"/>
                <span aria-hidden="true"/>
              </div>
            </div>
            <div className={navbarMenu} id="nowNavbar">
              <div className="navbar-end">              
                <NavLink className="navbar-item" onClick={this.toggleMenu} to="/about">
                  <span className="subtitle">
                    <span>About</span>
                    <span className="is-hidden-desktop has-text-grey-light"> &mdash; Who we are</span>
                  </span>
                </NavLink>
                <NavLink className="navbar-item" onClick={this.toggleMenu} to="/events">
                  <span className="subtitle">
                    <span>Events</span>
                    <span className="is-hidden-desktop has-text-grey-light"> &mdash; What we do</span>
                  </span>
                </NavLink><NavLink className="navbar-item" onClick={this.toggleMenu} to="/members">
                  <span className="subtitle">
                    <span>Members</span>
                    <span className="is-hidden-desktop has-text-grey-light"> &mdash; Meet the team</span>
                  </span>
                </NavLink>
                <NavLink className="navbar-item" onClick={this.toggleMenu} to="/contact">
                  <span className="subtitle">
                    <span>Contact</span>
                    <span className="is-hidden-desktop has-text-grey-light"> &mdash; Get in touch</span>
                  </span>
                </NavLink>
                <a className="navbar-item is-hidden-touch" href="https://facebook.com/nowmozillaclub" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-lg fa-facebook-f"/>
                </a>
                <a className="navbar-item is-hidden-touch" href="https://instagram.com/nowmozillaclub" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-lg fa-instagram"/>
                </a>
                <a className="navbar-item is-hidden-touch" href="https://twitter.com/nowmozillaclub" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-lg fa-twitter"/>
                </a>
                <a className="navbar-item is-hidden-touch" href="https://github.com/nowmozillaclub" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-lg fa-github"/>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
