import React from 'react'
import MediaQuery from 'react-responsive';

let Clubinfo = function statelessFunctionComponentClass() {

  return (<div className="about-text">
    <MediaQuery query="(min-width: 518px)">
      <h1 className="about-text-header">Wednesday<sup>*</sup>
        &middot; 8:30pm &middot; &nbsp;
        <span className="about-text-header-underline">BOO-1</span>3<span className="about-text-header-underline">0</span>3
      </h1>
    </MediaQuery>
    <MediaQuery query="(max-width: 517px)">
      <h1 className="about-text-header">Wednesday<sup>*</sup>
        &middot; 8:30pm
        <br/>
        <span className="about-text-header-underline">BOO-1</span>3<span className="about-text-header-underline">0</span>3
      </h1>
    </MediaQuery>
    <p className="about-text-info">
      New Media Club is&nbsp;
      <strong>an event oriented club</strong>&nbsp; that seeks to bring New Media Majors, and&nbsp;
      <strong>those interested in New Media Design,&nbsp;</strong>
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
  </div>)
}

export default Clubinfo
