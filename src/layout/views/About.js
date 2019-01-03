import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { NavLink } from 'react-router-dom';

import 'bulma-extensions/bulma-timeline/dist/css/bulma-timeline.min.css';

class About extends Component {
  constructor() {
    super();
    this.state = {
      timeline: 'timeline',
      timeline2018: [
        {
          date: 'February 2018', 
          name: 'Inception', 
          desc: 'Not the movie, but rather the start of something amalgamated from an idea.',
          icon: 'fas fa-play',
          tint: 'is-success'
        },
        {
          date: 'March 2018', 
          name: 'GameScript', 
          desc: 'Our first event where we taught participants how to make the classic Snake game using vanilla JavaScript.',
          icon: 'fas fa-gamepad',
          tint: 'is-warning'
        },
        {
          date: 'March 2018', 
          name: 'Recruitments', 
          desc: 'One event down, we agreed it was time to bring more people into the fold and help us grow.',
          icon: 'fas fa-users',
          tint: 'is-info'
        },
        {
          date: 'April 2018', 
          name: 'Saavishkar', 
          desc: 'Working closely with the Computer Engineering Department, we organized a Final Year Project Competition for our senior year students.',
          icon: 'fas fa-project-diagram',
          tint: 'is-danger'
        },
        {
          date: 'April 2018', 
          name: 'Android Workshop', 
          desc: 'Collaborating with our Computer Engineering Department for the second time, this event was geared towards sophomores.',
          icon: 'fab fa-android',
          tint: 'is-success'
        },
        {
          date: 'September 2018', 
          name: 'Recruitments', 
          desc: 'With the start of a new academic year, we decided to bring in fresher faces who wanted to explore the world of Open Source.',
          icon: 'fas fa-users',
          tint: 'is-info'
        },
        {
          date: 'October 2018', 
          name: 'GitHack', 
          desc: 'In keeping with the spirit of Hacktoberfest, we conducted a workshop on Git and GitHub.',
          icon: 'fas fa-code-branch',
          tint: 'is-danger'
        },
      ]
    };
    this.setTimeline = this.setTimeline.bind(this);
  }

  setTimeline() {
    if (window.innerWidth > 480) {
      this.setState({ timeline: 'timeline is-centered' });
    } else {
      this.setState({ timeline: 'timeline' });
    }
  }

  componentWillMount() {
    this.setTimeline();
    window.addEventListener('resize', this.setTimeline);
    window.scroll({top: 0, left: 0, behavior: 'smooth' })
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setTimeline);
  }
  
  render() {
    return (
      <div className="About">
        <Helmet>
          <title>NOW - About Us</title>
        </Helmet>
        <section className="hero is-fullheight-with-navbar is-warning">
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-1 is-spaced">About Us</h1>
              <p className="subtitle is-3">
                Network for the Open Web was founded to serve as a platform for <b>Internet Education</b>.
              </p>
              <p className="subtitle is-3">
                We strive to <b>Learn</b>, <b>Build</b> and <b>Advocate</b> for the <b>Open Web</b>.
              </p>
            </div>
          </div>
        </section>
        <section className="hero is-fullheight-with-navbar is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-1 is-spaced">Activities</h1>
              <p className="subtitle is-3">
                <b>Develop</b> new skills and contribute to projects.
              </p>
              <p className="subtitle is-3">
                Be a part of a powerful <b>network</b> of students dedicated to keeping the internet a global public resource, <b>open</b> and <b>accessible</b> to all.
              </p>
              <p className="subtitle is-3">
                <NavLink to="/events" className="button is-dark is-large">View Events</NavLink>
              </p>
            </div>
          </div>
        </section>
        <section className="hero is-fullheight-with-navbar is-light">
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-1 is-spaced">Our Story</h1>
              <div className={this.state.timeline}>
                <header className="timeline-header">
                  <span className="tag is-large is-warning has-text-weight-bold">2018</span>
                </header>
                {this.state.timeline2018.map(function(item) { return (
                <div className="timeline-item">
                  <div className={"timeline-marker is-icon " + item.tint}>
                    <i class={item.icon + " fa-xs"} style={{ color: 'white' }}/>
                  </div>
                  <div className="timeline-content">
                    <p className="heading">{item.date}</p>
                    <p className="title is-4">{item.name}</p>
                    <p className="subtitle is-5">{item.desc}</p>
                  </div>
                </div>
                )})}
                <header className="timeline-header">
                  <span className="tag is-large is-warning has-text-weight-bold">NOW</span>
                </header>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
