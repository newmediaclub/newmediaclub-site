import React, { Component } from 'react'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import ResourceCards from '../components/ResourceCards'

import MetaTags from 'react-meta-tags'
import NMC_favicon from '../assets/NMC_favicon.png'
export default class ResourcesPage extends Component {
  render() {
    return (
      <div>
        <MetaTags>
          <title>Resources</title>
          <link rel="icon" href={NMC_favicon} type="image/png" />
        </MetaTags>
        <Navigation page={'resources'} />
        <div className="wrapContainer">
          <div className="container">
            <div className="headingContainer">
              <div className="pageHeading">Learn something new!</div>
              <div className="pageDescription">
                We have compiled links to various resources to aid your design
                journey.
              </div>
            </div>
          </div>
          <ResourceCards />
        </div>
        <Footer />
      </div>
    )
  }
}
