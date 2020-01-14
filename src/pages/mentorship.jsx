import React, { Component } from 'react'

import Mentors from '../components/Mentors'

import Navigation from '../components/Navigation'
import ToTop from '../components/ToTop'
import Footer from '../components/Footer'

import MetaTags from 'react-meta-tags'
import NMC_favicon from '../assets/NMC_favicon.png'
export default class MentorshipPage extends Component {
  render() {
    return (
      <div id="top">
        <ToTop />
        <MetaTags>
          <title>Mentorship</title>
          <link rel="icon" href={NMC_favicon} type="image/png" />
        </MetaTags>
        <Navigation page={'mentorship'} />
        <div className="wrapContainer">
          <div className="container">
            <div className="headingContainer">
              <div className="pageHeading">Make Some Friends!</div>
              <div className="pageDescription">
                See who our fabulous mentors are as well as learn about our
                extensive alumni network.
              </div>
            </div>
          </div>
          <Mentors />
        </div>
        <Footer />
      </div>
    )
  }
}
