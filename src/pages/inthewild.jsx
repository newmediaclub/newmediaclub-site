import React, { Component } from 'react'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import photoGrid from '../assets/photoGrid.json'

import MetaTags from 'react-meta-tags'
import NMC_favicon from '../assets/NMC_favicon.png'
export default class InTheWild extends Component {
  render() {
    function getRandomSize(min, max) {
      return Math.round(Math.random() * (max - min) + min)
    }
    // let imageURL = '../assets/' + mentor[1].people.image
    console.log(photoGrid.photos[1].image)

    let photoArray = []
    function createPhotoGrid() {
      for (var i = 0; i < photoGrid.photos.length; i++) {
        var width = getRandomSize(200, 400)
        var height = getRandomSize(200, 400)

        photoArray.push(
          <img
            src={'/assets/photogrid/' + photoGrid.photos[i].image}
            height={height}
            width={width}
            loading="lazy"
          ></img>
        )
      }
      return photoArray
    }

    return (
      <div>
        <MetaTags>
          <title>In The Wild</title>
          <link rel="icon" href={NMC_favicon} type="image/png" />
        </MetaTags>

        <Navigation page={'inthewild'} />
        <div className="wrapContainer">
          <div className="headingContainer">
            <div className="pageHeading">New Media Club in the Wild!</div>
            <div className="pageDescription">
              Check out the club members in the wild, at events, social
              gathering, workshops, and general meetings.
            </div>
          </div>

          {/*<div className="container">
						<div className="headingContainer">
							<div className="pageHeading">Upcoming Events</div>
						</div>
					</div>*/}

          <section id="photos">{createPhotoGrid()}</section>
        </div>
        <Footer />
      </div>
    )
  }
}
