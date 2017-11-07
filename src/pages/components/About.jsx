import React from 'react';

import NMC_logo from '../../assets/NMC_logo.svg';

class About extends React.Component {

  render() {
    return (
      <div className="container flex">
        <div className="about-media flex flex-column flex-align-items-center">
          <img src={NMC_logo} className="about-media-NMC_logo"></img>
          <h1>New Media Club</h1>
        </div>
        <div className="about-text"></div>
      </div>
    );
  }
}

export default About;
