import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { NavLink } from 'react-router-dom';

class Githack extends Component {
  componentWillMount() {
    window.scroll({top: 0, left: 0, behavior: 'smooth' })
  }
  
  render() {
    return (
      <div className="Githack">
        <Helmet>
          <title>NOW - GitHack</title>
        </Helmet>
        <section className="hero is-fullheight-with-navbar is-danger">
          <div className="hero-body">
            <div className="container">
            <h1 className="title is-1 is-spaced">GitHack</h1>
              <p className="subtitle is-3">
                A two hour <b>Git</b> workshop accompanying <b>Hacktoberfest</b>.
              </p>
              <p className="subtitle is-3">
                An <b>introduction</b> to Git and <b>how to get started</b> hosting projects on <b>GitHub</b>.
              </p>
              <p className="subtitle is-3">
                Participants are <b>encouraged to contribute to open source projects</b> and make atleast <b>5 pull requests </b> to any open source project in exchange for some <b>amazing prizes!</b>
              </p>
              <p className="subtitle is-3">
                <NavLink to="/register" className="button is-dark is-large">Register Now</NavLink>
              </p>
            </div>
          </div>
        </section>
        <section className="hero is-fullheight-with-navbar is-danger">
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-3">List of topics covered:</h1>                
                <p className="content subtitle is-4">
                  <ul>
                    <li>Cloning a repository</li>
                    <li>Forking a repository</li>
                    <li>Staging your files</li>
                    <li>Committing your changes</li>
                    <li>Making pull requests</li>
                    <li>Merging pull requests</li>
                    <li>... and many more</li>
                  </ul>
                </p>              
              <p className="subtitle is-4">
                A <b>dummy repository</b> to practice all the above tasks is <b>available</b> whenever you need it on our <b>GitHub</b> profile.
              </p>
              <p className="subtitle is-3">
                <a className="button is-medium is-dark" href="https://github.com/nowmozillaclub/hello-git">Dummy Repo</a>
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Githack;
