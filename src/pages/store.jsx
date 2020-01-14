import React, { Component } from 'react'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import StoreItems from '../components/StoreItems'

import MetaTags from 'react-meta-tags'
import NMC_favicon from '../assets/NMC_favicon.png'
export default class ResourcesPage extends Component {
  render() {
    return (
      <div>
        <MetaTags>
          <title>Store</title>
          <link rel="icon" href={NMC_favicon} type="image/png" />
        </MetaTags>
        <Navigation page={'store'} />
        <div className="wrapContainer">
          <div className="container">
            <div className="headingContainer">
              <div className="pageHeading">Grab some swag!</div>
              <div className="pageDescription">
                Checkout the club store to grab yourself a New Media Club mug,
                t-shirt, or sticker.{' '}
              </div>
            </div>
          </div>
          <StoreItems />
        </div>
        <Footer />
      </div>
    )
  }
}
