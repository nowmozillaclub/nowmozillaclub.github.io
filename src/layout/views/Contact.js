import React, { Component } from 'react';
import Helmet from 'react-helmet';

class Contact extends Component {
  componentWillMount() {
    window.scroll({top: 0, left: 0, behavior: 'smooth' })
  }
  
  render() {
    return (
      <div className="Contact">
        <Helmet>
          <title>NOW - Contact Us</title>
        </Helmet>
        <section className="hero is-medium is-light">
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-1">Say Hello! <i class="far fa-hand-spock"/></h1>
              <div className="buttons">
                <a className="button is-large is-dark" 
                  href="mailto:nowmozillaclub@gmail.com"
                  style={{ backgroundColor: '#ffb94a' }}
                  target="_blank" rel="noopener noreferrer">
                    <span className="icon is-small"><i className="fas fa-envelope fa-lg"/></span>
                </a>
                <a className="button is-large is-dark" 
                  href="https://facebook.com/nowmozillaclub"
                  style={{ backgroundColor: '#3b5998' }}
                  target="_blank" rel="noopener noreferrer">
                    <span className="icon is-small"><i className="fab fa-facebook-f fa-lg"/></span>
                </a>
                <a className="button is-large is-dark" 
                  href="https://instagram.com/nowmozillaclub"
                  style={{ backgroundColor: '#c13584' }}
                  target="_blank" rel="noopener noreferrer">
                    <span className="icon is-small"><i className="fab fa-instagram fa-lg"/></span>
                </a>
                <a className="button is-large is-dark" 
                  href="https://twitter.com/nowmozillaclub"
                  style={{ backgroundColor: '#1da1f2' }}
                  target="_blank" rel="noopener noreferrer">
                    <span className="icon is-small"><i className="fab fa-twitter fa-lg"/></span>
                </a>
                <a className="button is-large is-dark" 
                  href="https://github.com/nowmozillaclub"
                  style={{ backgroundColor: '#333333' }}
                  target="_blank" rel="noopener noreferrer">
                    <span className="icon is-small"><i className="fab fa-github fa-lg"/></span>
                </a>
              </div>
              <p className="subtitle is-5">nowmozillaclub@gmail.com</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
