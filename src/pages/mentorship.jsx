import React, { Component } from 'react'
import { Link } from "gatsby"

import Mentors from '../components/Mentors'
import Email from '../components/Email'
import About from '../components/About'
import Navigation from '../components/Navigation'
import ToTop from '../components/ToTop'
import Footer from '../components/Footer'

import MetaTags from 'react-meta-tags'

export default class MentorshipPage extends Component {
	render() {

		return (
			<div id="top">
				<ToTop />
				<MetaTags>
					<title>Mentorship</title>
				</MetaTags>
				<Navigation page={'mentorship'} />
				<div className="wrapContainer">
					<div className="container">
						<div className="headingContainer">
							<div className="pageHeading">Make Some Friends!</div>
							<div className="pageDescription">See who our fabulous mentors are as well as learn about our extensive alumni network.</div>
						</div>
					</div>
					<Mentors />
				</div>
				<Footer />
			</div>
		)
	}
}
