import React, { Component } from 'react'
import Link from 'gatsby-link'

import Eboard from '../components/Eboard'
import Email from '../components/Email'
import About from '../components/About'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import MetaTags from 'react-meta-tags'

export default class ContactPage extends Component {
	render() {

		return (
			<div>
				<MetaTags>
					<title>Contact</title>
				</MetaTags>
				<Navigation page={'contact'} />
				<div className="wrapContainer">
					<div className="container">
						<div className="contactContainer">
							<div className="headingContainer">
								<div className="pageHeading">Like Snail Mail Only Faster!</div>
								<div className="pageDescription">Question, comment or concern? Let us know! We would love to help you out anyway we can.</div>
							</div>
							<div className="emailForm">
								<input placeholder="Full Name" type="text" name="NAME" id="mce-EMAIL" required="" className="emailName"></input>
								<input placeholder="E-mail" type="email" name="EMAIL" id="mce-EMAIL" required="" className="emailName"></input>
								<textarea placeholder="Message" className="emailMessage" ></textarea>

								<input type="submit" value="Send Away" name="subscribe" id="mc-embedded-subscribe" className="contactButton"></input>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}
