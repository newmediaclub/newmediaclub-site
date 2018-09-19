import React from 'react'

import NMC_logo from '../assets/NMC_logo.svg';
import instagram from '../assets/instagram.svg';
import facebook from '../assets/facebook.svg';

let Clubmedia = function statelessFunctionComponentClass() {

  return (<div className="about-media flex flex-column flex-align-items-center">
    <img src={NMC_logo} className="about-media-NMC_logo"></img>
    <h1>New Media Club</h1>
    <div className="about-media-links">
      <div className="flex flex-align-center flex-row about-media-links-logos">
        <a href="https://www.facebook.com/groups/ritnewmediaclub/">
          <img src={facebook} className="about-media-links-logo"></img>
        </a>
        <a href="https://www.instagram.com/ritnewmediaclub/">
          <img src={instagram} className="about-media-links-logo"></img>
        </a>
      </div>
      <div className="flex flex-justify-around flex-row about-media-links-sites">
        <h3 className="about-media-links-sites-space">
          <a href="https://cias.rit.edu/">CAD</a>
        </h3>
        <h3>
          <a href="http://creativity.cias.rit.edu/index.php?major=NMDE-BFA">creativity</a>
        </h3>
      </div>
    </div>
  </div>)
}

export default Clubmedia
