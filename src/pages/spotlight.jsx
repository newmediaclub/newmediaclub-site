import React, { Component } from 'react'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Spotlights from '../components/Spotlights'

import MetaTags from 'react-meta-tags'
import NMC_favicon from '../assets/NMC_favicon.png'
export default class Spotlight extends Component {
  render() {
    return (
      <div>
        <MetaTags>
          <title>Spotlight</title>
          <link rel="icon" href={NMC_favicon} type="image/png" />
        </MetaTags>
        <Navigation page={'spotlight'} />
        <div className="wrapContainer">
          <div className="container">
            <div className="headingContainer">
              <div className="pageHeading">Check out your fellow students</div>
              <div className="pageDescription">
                See what work your classmates have been working on in our
                Instagram student spotlights.
              </div>
            </div>
          </div>

          <Spotlights />
        </div>
        <Footer />
      </div>
    )
  }
}
