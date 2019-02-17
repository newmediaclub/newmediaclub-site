import React, { Component } from 'react'
import Link from 'gatsby-link'

import Eboard from '../components/Eboard'
import Email from '../components/Email'
import About from '../components/About'
import Navigation from '../components/Navigation'

import CurrentEvents from '../components/CurrentEvents'
import PastEvents from '../components/PastEvents'

import MetaTags from 'react-meta-tags'

export default class MentorshipPage extends Component {
	render() {

		return (
			<div>
				<MetaTags>
					<title>Event</title>
				</MetaTags>
				<Navigation page={'events'} />
				<div className="wrapContainer">
					<div className="headingContainer">
						<div className="pageHeading">See what’s up and coming</div>
						<div className="pageDescription">Here we list any upcoming events or opportunities that the club is having. </div>
					</div>

					<div className="container">
						<div className="headingContainer">
							<div className="pageHeading">Upcoming Events</div>
						</div>
					</div>

					<CurrentEvents />

					<div className="container">
						<div className="headingContainer">
							<div className="pageHeading">Past Events</div>
						</div>
					</div>

					<PastEvents />

				</div>
			</div>
		)
	}
}