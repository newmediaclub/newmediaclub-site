import React from 'react';
import MediaQuery from 'react-responsive';

import NMC_logo from '../../assets/NMC_logo.svg';
import instagram from '../../assets/instagram.svg';
import facebook from '../../assets/facebook.svg';

class About extends React.Component {

  render() {
    return (<div className="container">
      <div className="flex flex-align-items-center flex-justify-center about">
        <div className="about-media flex flex-column flex-align-items-center">
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
                <a href="https://cias.rit.edu/">cias</a>
              </h3>
              <h3>
                <a href="http://creativity.cias.rit.edu/">creativity</a>
              </h3>
            </div>
          </div>
        </div>
        <div className="about-text">
          <MediaQuery query="(min-width: 445px)">
            <h1 className="about-text-header">Wednesday<sup>*</sup>
              &middot; 8:30pm &middot; &nbsp;
              <span className="about-text-header-underline">BOO-1</span>3<span className="about-text-header-underline">0</span>3
            </h1>
          </MediaQuery>
          <MediaQuery query="(max-width: 444px)">
            <h1 className="about-text-header">Wednesday<sup>*</sup>
              &middot; 8:30pm <br/>
              <span className="about-text-header-underline">BOO-1</span>3<span className="about-text-header-underline">0</span>3
            </h1>
          </MediaQuery>
          <p className="about-text-info">
            New Media Club is
            <strong>an event oriented club</strong>
            that seeks to bring New Media Majors, and
            <strong>those interested in New Media Design,</strong>
            together outside the classroom.
            <br/>
            <br/>
            We also seek to provide a strong mentorship programme that will bolster relationships, encourage constructive conversation, and instill confidence in every member of our community.
            <br/>
            <br/>
            <span className="about-text-reference">
              <sup>*</sup>
              Our general meetings are every other Wednesday. Sign up for emails or follow us on Facebook for up-to-date events!
            </span>
          </p>
        </div>
      </div>
    </div>);
  }
}

export default About;
