import React from 'react';
import Link from 'gatsby-link'

import NMC_logo from '../assets/imagenavicon.png';

class Navigation extends React.Component {

	render() {
		return (

			<div className="navBackground">
				<div className="wrapContainer">
					<div className="navContainer ">
						<img src={__PATH_PREFIX__ + NMC_logo} className="navIcon"/>

						<div>
							<Link className = "navLink" to ='/' >Home</Link>
							<Link className = "navLink" to ='/mentorship/'>Mentorship</Link>
							<Link className = "navLink" to ='/events/'>Events</Link>
							<Link className = "navLink" to ='/spotlight/'>Spotlight</Link>
							<Link className = "navLink" to ='/resources/'>Resources</Link>
							<Link className = "navLink" to ='/contact/'>Contact</Link>
						</div>
					</div>
				</div>
			</div>

		);
	}
}

export default Navigation;
