import React, { Component } from 'react';

class Contact extends Component {
  componentWillMount() {
    window.scroll({top: 0, left: 0, behavior: 'smooth' })
  }
  
  render() {
    return (
      <div className="Contact">
        <section className="hero is-fullheight-with-navbar">
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-1 has-text-centered">Say Hello! <i class="far fa-hand-spock"/></h1>
              <div className="columns">
                <div className="column is-3"></div>
                <div className="column is-6">
                  <form className="control">
                    <div className="field">
                      <label className="label is-medium">Name</label>
                      <div className="control">
                        <input className="input is-large" type="text" placeholder="Your name" required/>
                      </div>
                    </div>
                    <div className="field">
                      <label className="label is-medium">Email</label>
                      <div className="control">
                        <input className="input is-large" type="email" placeholder="Your email" required/>
                      </div>
                    </div>
                    <div className="field">
                      <label className="label is-medium">Message</label>
                      <div className="control">
                        <textarea className="textarea is-large" placeholder="Your message" required/>
                      </div>
                    </div>
                    <em className="is-size-5 has-text-danger"><sup>This form has been temporarily disabled.</sup></em>
                    <div className="field">
                      <div className="control">
                        <button className="button is-info is-large" disabled>Send</button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="column is-3"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
