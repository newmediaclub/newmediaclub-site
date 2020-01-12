import React, { Component } from 'react'
// import { Link } from 'gatsby'

import Eboard from '../components/Eboard'
// import Email from '../components/Email'
import About from '../components/About'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import '../layouts/index.js'

import CurrentEventCards from '../components/CurrentEventCards'
import MetaTags from 'react-meta-tags'
import '../layouts/metaData.js'

import NMC_favicon from '../assets/NMC_favicon.png'

export default class IndexPage extends Component {
  render() {
    return (
      <div>
        <MetaTags>
          <title>Home</title>
          <meta name="google" content="notranslate" />
          <link rel="icon" href={NMC_favicon} type="image/png" />
        </MetaTags>

        <Navigation page={'home'} />

        <div className="wrapContainer">
          <About />

          {/*<div className="container">
						<div className="headingContainer">
							<div className="pageHeading">Upcoming Events</div>
						</div>
					</div>*/}

          <CurrentEventCards />

          {/* <Email /> */}

          <div className="container">
            <div className="headingContainer">
              <div className="pageHeading">Meet Our Eboard!</div>
              <div className="pageDescription">
                They are responsible for planning and executing all the clubs
                events.{' '}
              </div>
            </div>
          </div>
          <Eboard />
        </div>
        <Footer />
      </div>
    )
  }
}
