import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { NavLink } from 'react-router-dom';

class Events extends Component {
  componentWillMount() {
    window.scroll({top: 0, left: 0, behavior: 'smooth' })
  }
  
  render() {
    return (
      <div className="Events">
        <Helmet>
          <title>NOW - Events</title>
        </Helmet>
        <section className="hero is-fullheight-with-navbar is-info">
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-1 is-spaced">Recruit</h1>
              <p className="subtitle is-3">
                Become a part of <b>NOW Mozilla Club</b> at <b>NMIMS MPSTME!</b>
              </p>
              <p className="subtitle is-3">
                Keep an eye out on a <b>notice board</b> near you! 😉
              </p>
            </div>
          </div>
        </section>
        <section className="hero is-fullheight-with-navbar is-warning">
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-1 is-spaced">GameScript</h1>
              <p className="subtitle is-3">
                Learn how to make simple web games playable in any internet browser using only <b>HTML</b>, <b>CSS</b> and <b>JavaScript!</b>
              </p>
              <p className="subtitle is-3">
                <NavLink to="/gamescript" className="button is-dark is-large">Learn More</NavLink>
              </p>
            </div>
          </div>
        </section>
        <section className="hero is-fullheight-with-navbar is-danger">
          <div className="hero-body">
            <div className="container">              
              <h1 className="title is-1 is-spaced">GitHack</h1>
              <p className="subtitle is-3">
                A <b>crash course</b> on everything <b>Git</b> and an introduction to <b>Open Source</b> and the <b>Open Web Culture</b>.
              </p>
              <p className="subtitle is-3">
                <NavLink to="/githack" className="button is-dark is-large">Learn More</NavLink>
              </p>
            </div>
          </div>
        </section>
        <section className="hero is-fullheight-with-navbar is-success">
          <div className="hero-body">
            <div className="container">              
              <h1 className="title is-1 is-spaced">Android Workshop</h1>
              <p className="subtitle is-3">
                An <b>Android App Contest</b> organised in collaboration with the <b>Computer Engineering Department</b> of <b>NMIMS MPSTME</b>.
              </p>
              <p className="subtitle is-3">
                <NavLink to="/android" className="button is-dark is-large">Learn More</NavLink>
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Events;
