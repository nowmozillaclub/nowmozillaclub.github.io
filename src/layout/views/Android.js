import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { NavLink } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';

import "react-image-gallery/styles/css/image-gallery.css";

class Android extends Component {
  componentWillMount() {
    window.scroll({top: 0, left: 0, behavior: 'smooth' })
  }
  
  render() {
    const images = [
      {
        original: 'images/events/android/201801.jpg'
      }, {
        original: 'images/events/android/201802.jpg'
      }, {
        original: 'images/events/android/201803.jpg'
      }, {
        original: 'images/events/android/201804.jpg'
      }
    ];
    return (
      <div className="Android">
        <Helmet>
          <title>NOW - Android Workshop</title>
        </Helmet>
        <section className="hero is-fullheight-with-navbar" style={{ backgroundColor: 'mediumseagreen' }}>
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-1 is-spaced" style={{ color: 'white' }}>Android Workshop</h1>
              <p className="subtitle is-3" style={{ color: 'white' }}>
                Participate in the annual <b>Android App Contest</b> and stand a chance to <b>win exciting prizes!</b>
              </p>
              <p className="subtitle" style={{ color: 'white' }}>
                Organised in collaboration with Computer Engineering Department, NMIMS MPSTME.
              </p>
              <p className="subtitle is-3">
                <NavLink to="/register" className="button is-dark is-large">Register Now</NavLink>
              </p>
              <br/><br/>
              <p className="title is-3" style={{ color: 'white' }}>2018 Photos</p>
              <div style={{ border: '2px solid white', borderRadius: '2px' }}>
                <ImageGallery items={images} showPlayButton={false} showThumbnails={false}/>
              </div>
              <br/>
              <a className="button" style={{ color: 'white', backgroundColor: '#3c5a99', borderColor: '#3c5a99' }} 
                href="https://www.facebook.com/media/set/?set=a.317576472183815&type=1&l=689b1654f5" 
                target="_blank" rel="noopener noreferrer">
                  <span className="icon"><i className="fab fa-facebook-f"/></span>
                  <span>View More</span>
              </a>
              <br/><br/><br/>
              <p className="title is-3" style={{ color: 'white' }}>Rules &amp; Regulations</p>
              <p className="title is-4" style={{ color: 'white' }}>
                1. Who Should Apply?
              </p>
              <p className="subtitle is-5" style={{ color: 'white', lineHeight: '1.6' }}>
                Students are invited to compete individually or in teams of up to four student members.
                Any student currently in their 2nd year of an undergraduate course at NMIMS MPSTME can compete.
                Teams must adhere to the deadline timetable as defined by the Computer Engineering Department.
                Teams must not accept or use any help from people not in their team.
                Usage of free and/or open source Internet resources is allowed, but plagiarism and cheating is not.
              </p>              
              <p className="title is-4" style={{ color: 'white' }}>
                2. How To Apply?
              </p>
              <p className="subtitle is-5" style={{ color: 'white', lineHeight: '1.6' }}>
                A team of upto four students are invited to devise and develop mobile applications that be will be beneficial to science, technology, education or health.
                Register your team by entering your details in the form below.
              </p>              
              <p className="title is-4" style={{ color: 'white' }}>
                Win Amazing Prizes
              </p>
              <p className="subtitle is-5" style={{ color: 'white', lineHeight: '1.6' }}>
                We have awesome prizes for you plus all participants who submit an app will be given a certificate of participation.
              </p>
              <br/>
              <p className="subtitle is-3">
                <NavLink to="/register" className="button is-dark is-large">Register Now</NavLink>
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Android;
