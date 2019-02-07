import React, { Component } from 'react'
import Link from 'gatsby-link'

import Eboard from '../components/Eboard'
import Email from '../components/Email'
import About from '../components/About'

export default class IndexPage extends Component {
	render() {

		return (
			<div>
				<About />
				<Email />
				<div className="container">
					<div className="headingContainer">
						<div className="pageHeading">Make Some Friends!</div>
						<div className="pageDescription">See who our fabulous mentors are as well as learn about our extensive alumni network.</div>
					</div>
				</div>
				<Eboard />
				<Link to ='/contact.html' >Helloooooo</Link>
				<div className="container containerCenter">
					<div className="headingContainer">
						<div className="pageHeading">Like Snail Mail Only Faster!</div>
						<div className="pageDescription">Question, comment or concern? Let us know! We would love to help you out anyway we can.</div>
					</div>

						<input placeholder="Full Name" type="text" name="NAME" id="mce-EMAIL" required="" className="emailName"></input>
						<input placeholder="E-mail" type="email" name="EMAIL" id="mce-EMAIL" required="" className="emailName"></input>
						<textarea placeholder="Message" className="emailMessage"></textarea>

				</div>

			</div>
		)
	}
}
