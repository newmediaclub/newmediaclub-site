import React, { Component } from 'react'
import { Link } from "gatsby"

import Eboard from '../components/Eboard'
import Email from '../components/Email'
import About from '../components/About'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

import eventData from '../assets/mentorData.json';
import CurrentEventCards from '../components/CurrentEventCards'
import MetaTags from 'react-meta-tags'

export default class IndexPage extends Component {
	render() {

		return (



			<div>
				<MetaTags>
					<title>Home</title>
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

					<Email />

					<div className="container">
						<div className="headingContainer">
							<div className="pageHeading">Meet Our Eboard!</div>
							<div className="pageDescription">They are responsible for planning and executing all the clubs events. </div>
						</div>
					</div>
					<Eboard />

				</div>
				<Footer />
			</div>

		)
	}
}
