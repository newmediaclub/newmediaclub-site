import React, { Component } from 'react'
import { Link } from "gatsby"

import Eboard from '../components/Eboard'
import Email from '../components/Email'
import About from '../components/About'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Spotlights from '../components/Spotlights'

import MetaTags from 'react-meta-tags'

export default class Spotlight extends Component {
	render() {

		return (
			<div>
				<MetaTags>
					<title>Spotlight</title>
				</MetaTags>
				<Navigation page={'spotlight'} />
				<div className="wrapContainer">
					<div className="container">
						<div className="headingContainer">
							<div className="pageHeading">Check out your fellow students</div>
							<div className="pageDescription">See what work your classmates have been working on in our Instagram student spotlights.</div>
						</div>
					</div>

					<Spotlights />

				</div>
				<Footer />
			</div>
		)
	}
}
