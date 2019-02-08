import React, { Component } from 'react'
import Link from 'gatsby-link'

import Eboard from '../components/Eboard'
import Email from '../components/Email'
import About from '../components/About'

export default class MentorshipPage extends Component {
	render() {

		return (
			<div>
				<div className="container">
					<div className="headingContainer">
						<div className="pageHeading">Make Some Friends!</div>
						<div className="pageDescription">See who our fabulous mentors are as well as learn about our extensive alumni network.</div>
					</div>
				</div>
				<Eboard />
				<Link to ='/index/' >Index</Link>


			</div>
		)
	}
}
