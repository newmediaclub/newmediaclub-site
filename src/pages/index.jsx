import React, { Component } from 'react'
import Link from 'gatsby-link'

import Eboard from '../components/Eboard'
import Email from '../components/Email'
import About from '../components/About'
import Navigation from '../components/Navigation'

import MetaTags from 'react-meta-tags'

export default class IndexPage extends Component {
	render() {

		return (
			<div>
				<MetaTags>
					<title>Home</title>
				</MetaTags>
				
				<Navigation />

				<div className="wrapContainer">

					<About />
					<Email />
					<div className="container">
						<div className="headingContainer">
							<div className="pageHeading">Make Some Friends!</div>
							<div className="pageDescription">See who our fabulous mentors are as well as learn about our extensive alumni network.</div>
						</div>
					</div>
					<Eboard />
				</div>
			</div>
		)
	}
}
