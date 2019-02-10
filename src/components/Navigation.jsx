import React from 'react';
import Link from 'gatsby-link'

import NMC_logo from '../assets/imagenavicon.png';

class Navigation extends React.Component {
	constructor(props){
		super();
		console.log(props.page);
	}
	render() {


		return (

			<div className="navBackground">
				<div className="wrapContainer">
					<div className="navContainer ">
						<img src={__PATH_PREFIX__ + NMC_logo} className="navIcon"/>

						<div>
							<Link className="navLink " to ='/' >Home
								<div
									className={"navUnderline " + (this.props.page==='home' ? 'displayShow' : 'displayHidden')}
									>
								</div>
							</Link>

							<Link className = "navLink" to ='/mentorship/'>Mentorship
								<div
									className={"navUnderline " + (this.props.page==='mentorship' ? 'displayShow' : 'displayHidden')}
									>
								</div>
							</Link>
							<Link className = "navLink" to ='/events/'>Events
								<div
									className={"navUnderline " + (this.props.page==='events' ? 'displayShow' : 'displayHidden')}
									>
								</div>
							</Link>
							<Link className = "navLink" to ='/spotlight/'>Spotlight
								<div
									className={"navUnderline " + (this.props.page==='spotlight' ? 'displayShow' : 'displayHidden')}
									>
								</div>
							</Link>
							<Link className = "navLink" to ='/resources/'>Resources
								<div
									className={"navUnderline " + (this.props.page==='resources' ? 'displayShow' : 'displayHidden')}
									>
								</div>
							</Link>
							<Link className = "navLink" to ='/contact/'>Contact
								<div
									className={"navUnderline " + (this.props.page==='contact' ? 'displayShow' : 'displayHidden')}
									>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>

		);
	}
}

export default Navigation;
