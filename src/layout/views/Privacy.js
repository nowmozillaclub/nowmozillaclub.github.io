import React, { Component } from 'react';
import Helmet from 'react-helmet';

class Privacy extends Component {
  componentWillMount() {
    window.scroll({top: 0, left: 0, behavior: 'smooth' })
  }
  
  render() {
    return (
      <div className="Privacy">
        <Helmet>
          <title>NOW - Privacy</title>
        </Helmet>
        <section className="hero is-fullheight-with-navbar is-light">
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-spaced">Privacy Policy</h1>
              <p className="subtitle">Your privacy is important to us. It is Network for the Open Web's policy to respect your privacy regarding any information we may collect from you across our website, <a className="has-text-info" href="http://nowmozillaclub.github.io" rel>http://nowmozillaclub.github.io</a>, and other sites we own and operate.</p>
              <p className="subtitle">We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</p>
              <p className="subtitle">We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure, copying, use or modification.</p>
              <p className="subtitle">We don’t share any personally identifying information publicly or with third-parties, except when required to by law.</p>
              <p className="subtitle">Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.</p>
              <p className="subtitle">You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.</p>
              <p className="subtitle">Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.</p>
              <p className="subtitle">This policy is effective as of 1 January 2019.</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Privacy;
