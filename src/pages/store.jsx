import React, { Component } from 'react'
import { Link } from "gatsby"

import Eboard from '../components/Eboard'
import Email from '../components/Email'
import About from '../components/About'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import StoreItems from '../components/StoreItems'

import MetaTags from 'react-meta-tags'

export default class ResourcesPage extends Component {
	render() {

		return (
			<div>
				<MetaTags>
					<title>Store</title>
				</MetaTags>
				<Navigation page={'store'} />
				<div className="wrapContainer">
				<div className="container">
					<div className="headingContainer">
						<div className="pageHeading">Grab some swag!</div>
						<div className="pageDescription">Checkout the club store to grab yourself a New Media Club mug, t-shirt, or sticker. </div>
					</div>
				</div>
				<StoreItems />
			</div>
			<Footer />
		</div>
		)
	}
}
