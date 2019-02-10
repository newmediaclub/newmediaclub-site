import React, { Component } from 'react'
import Link from 'gatsby-link'

import Eboard from '../components/Eboard'
import Email from '../components/Email'
import About from '../components/About'
import Navigation from '../components/Navigation'

import MetaTags from 'react-meta-tags'

export default class MentorshipPage extends Component {
	render() {

		return (
			<div>
				<MetaTags>
					<title>Resources</title>
				</MetaTags>
				<Navigation page={'resources'} />
				<div className="wrapContainer">
				<div className="container">
					<div className="headingContainer">
						<div className="pageHeading">Learn something new!</div>
						<div className="pageDescription">We have compiled links to various resources to aid your design journey.</div>
					</div>
				</div>
				<Eboard />
			

			</div>
		</div>
		)
	}
}
