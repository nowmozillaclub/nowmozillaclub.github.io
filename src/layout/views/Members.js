import React, { Component } from 'react';

class Members extends Component {
  componentWillMount() {
    window.scroll({top: 0, left: 0, behavior: 'smooth' })
  }
  
  render() {
    return (
      <div className="Members">
        <section className="hero is-fullheight-with-navbar">
          <div className="hero-body">
            <div className="container">
              <h1 className="title has-text-centered">Members</h1>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Members;
