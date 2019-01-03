import React, { Component } from 'react';
import Helmet from 'react-helmet';

class Members extends Component {
  constructor() {
    super();
    this.state = {
      members: [
        {name: 'Rohit Choudhari', role: 'Club Captain', image: 'rohit-choudhari.jpg', github: 'InfernapeXavier'},
        {name: 'Akash Agarwal', role: 'Build Lead', image: 'akash-agarwal.jpg', github: 'akash20995'},
        {name: 'Jay Alaknure', role: 'Advocate Lead', image: 'jay-alaknure.jpg', github: 'boopdsnoot'},
        {name: 'Nishant Deshpande', role: 'Teach Lead', image: 'nishant-deshpande.jpg', github: 'nishantde'},
        {name: 'Akshat Jain', role: 'Representative', image: 'akshat-jain.jpg', github: 'akj007'},
        {name: 'Aman Mishra', role: 'Representative', image: 'aman-mishra.jpg', github: 'aman-mishra'},
        {name: 'Aman Sariya', role: 'Representative', image: 'aman-sariya.jpg', github: 'amansariya'},
        {name: 'Apoorva Singh', role: 'Representative', image: 'apoorva-singh.jpg', github: 'apoorva3010'},
        {name: 'Datream Tanti', role: 'Representative', image: 'datream-tanti.jpg', github: 'datream'},
        {name: 'Dhairya Shah', role: 'Representative', image: 'dhairya-shah.jpg', github: 'AlwaysHungrie'},
        {name: 'Gaurav Khurana', role: 'Representative', image: 'gaurav-khurana.jpg', github: 'gaurav9713'},
        {name: 'Harsh Agarwal', role: 'Representative', image: 'harsh-agarwal.jpg', github: 'Harsh30199'},
        {name: 'Jaydeep Ganatra', role: 'Representative', image: 'jaydeep-ganatra.jpg', github: 'slitheringblob'},
        {name: 'Lokesh Lalwani', role: 'Representative', image: 'lokesh-lalwani.jpg', github: 'LokeshLalwani'},
        {name: 'Mamta Yadav', role: 'Representative', image: 'mamta-yadav.jpg', github: 'mamta9892'},
        {name: 'Mihir Desai', role: 'Representative', image: 'mihir-desai.jpg', github: 'zvuve'},
        {name: 'Naman Jain', role: 'Representative', image: 'naman-jain.jpg', github: 'user-naman'},
        {name: 'Nirmit Agarwal', role: 'Representative', image: 'nirmit-agarwal.jpg', github: 'NirmitAgarwal'},
        {name: 'Payal Soni', role: 'Representative', image: 'payal-soni.jpg', github: 'paayalsoni'},
        {name: 'Paymanshu Sharma', role: 'Representative', image: 'paymanshu-sharma.jpg', github: 'Paymanshus'},
        {name: 'Priyansh Ramnani', role: 'Representative', image: 'priyansh-ramnani.jpg', github: 'prince1998'},
        {name: 'Sarvesh Shinde', role: 'Representative', image: 'sarvesh-shinde.jpg', github: 'illitus'},
        {name: 'Satya Jha', role: 'Representative', image: 'satya-jha.jpg', github: 'satyajha'},
        {name: 'Sheona Das', role: 'Representative', image: 'sheona-das.jpg', github: 'Sheona-D'},
        {name: 'Urmil Shroff', role: 'Representative', image: 'urmil-shroff.jpg', github: 'urmilshroff'},
        {name: 'Varun Khatri', role: 'Representative', image: 'varun-khatri.jpg', github: 'NecronizerFTW'},
        {name: 'Yogya Tewari', role: 'Representative', image: 'yogya-tewari.jpg', github: 'yogyatewari001'},
      ]
    }
  }

  componentWillMount() {
    window.scroll({top: 0, left: 0, behavior: 'smooth' })
  }
  
  render() {
    return (
      <div className="Members">
        <Helmet>
          <title>NOW - Members</title>
        </Helmet>
        <section className="hero is-fullheight-with-navbar is-dark">
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-1 is-spaced">Meet Our Team</h1>
              <p className="subtitle is-3">Dedicated to <b>Open Source</b> and the <b>Open Web</b> culture.</p>
            </div>
          </div>
        </section>
        <section className="hero is-fullheight-with-navbar is-dark">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-multiline">
              {this.state.members.map(function(member) { return (
                <div className="column is-3">
                  <figure className="image is-3by4">
                    <img className="member-image" src={"images/members/" + member.image} alt={member.name} style={{ border: '2px solid white', borderRadius: '10px' }}/>
                  </figure>
                  <div className="is-size-5 has-text-centered has-text-weight-bold ">{member.name}</div>
                  <div className="is-size-6 has-text-centered">{member.role}</div>
                  <div className="is-size-6 has-text-centered">
                    <a href={"https://github.com/" + member.github} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"/> <span style={{ borderBottom: '1px dashed grey'}}>{member.github}</span>
                    </a>
                  </div>
                </div>
              )})}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Members;
