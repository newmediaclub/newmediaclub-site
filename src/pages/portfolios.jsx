import React, { Component } from 'react'

import PortfolioGrid from '../components/PortfolioGrid'

import Navigation from '../components/Navigation'
import ToTop from '../components/ToTop'
import Footer from '../components/Footer'

import MetaTags from 'react-meta-tags'
import NMC_favicon from '../assets/NMC_favicon.png'
export default class PortfolioPage extends Component {
  render() {
    return (
      <div id="top">
        <ToTop />
        <MetaTags>
          <title>Portfolios</title>
          <link rel="icon" href={NMC_favicon} type="image/png" />
        </MetaTags>
        <Navigation page={'portfolios'} />
        <div className="wrapContainer">
          <div className="container">
            <div className="headingContainer">
              <div className="pageHeading">Look at all those chickens!</div>
              <div className="pageDescription">
                Checkout all the creative talent that the New Media Club has to
                offer!
              </div>
            </div>
          </div>
          <PortfolioGrid />
        </div>
        <Footer />
      </div>
    )
  }
}
