import React, { Component } from 'react';
import Helmet from 'react-helmet';

class Gamescript extends Component {
  componentWillMount() {
    window.scroll({top: 0, left: 0, behavior: 'smooth' })
  }
  
  render() {
    return (
      <div className="Gamescript">
        <Helmet>
          <title>NOW - GameScript</title>
        </Helmet>
        <section className="hero is-fullheight-with-navbar is-warning">
          <div className="hero-body">
            <div className="container">
            <h1 className="title is-1 is-spaced">GameScript</h1>
              <p className="subtitle is-3">
                The <b>first ever event</b> organised by NOW in <b>March 2018</b> by a small team of five members.
              </p>
              <p className="subtitle is-3">
                Participants were taught how to make the classic <b>Snake</b> game in pure <b>JavaScript</b> using nothing other than a simple text editor and a web browser of choice.
              </p>
              <p className="subtitle is-3">
                <a className="button is-medium is-dark" href="https://github.com/nowmozillaclub/gamescript/tree/master/snake" target="_blank" rel="noopener noreferrer">View Source Code</a>
              </p>
              <br/>
              <p className="subtitle is-3">
                <b>GameScript will be back in 2019</b>. Watch this space for more!
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Gamescript;
