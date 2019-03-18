import React from 'react';
import Link from 'gatsby-link'

import NMC_logo from '../assets/imagenavicon.svg';

class Navigation extends React.Component {
	constructor(props){
		super();
		this.state = {
			showMenu: false
		}

		this.showMobileNav = this.showMobileNav.bind(this);
	}

	showMobileNav = () => {
		this.setState({showMenu: !this.state.showMenu})
	}

	render() {


		return (

			<div className="navBackground">
				<div className="wrapContainer">
					<div className="navContainer ">

						<Link to ='/' >
							<img src={NMC_logo} className="navIcon"/>
						</Link>

						<div className="desktopNav">
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
							{/*<Link className = "navLink" to ='/contact/'>Contact
								<div
								className={"navUnderline " + (this.props.page==='contact' ? 'displayShow' : 'displayHidden')}
								>
								</div>
								</Link>*/}
							</div>
							<div className={"mobilepageHeader " + (this.props.page==='home' ? 'displayShow' : 'displayHidden')} >
								Home
							</div>
							<div className={"mobilepageHeader " + (this.props.page==='mentorship' ? 'displayShow' : 'displayHidden')} >
								Mentorship
							</div>
							<div className={"mobilepageHeader " + (this.props.page==='events' ? 'displayShow' : 'displayHidden')} >
								Events
							</div>
							<div className={"mobilepageHeader " + (this.props.page==='spotlight' ? 'displayShow' : 'displayHidden')} >
								Spotlight
							</div>
							<div className={"mobilepageHeader " + (this.props.page==='resources' ? 'displayShow' : 'displayHidden')} >
								Resources
							</div>
							{/*<div className={"mobilepageHeader " + (this.props.page==='contact' ? 'displayShow' : 'displayHidden')} >
							Contact
							</div>*/}
							<div className="mobileNavContainer" onClick={this.showMobileNav}>
								<div className="navLine"></div>
								<div className="navLine"></div>
								<div className="navLine"></div>
							</div>

						</div>
						<div className={'mobileNav '+(this.state.showMenu ? 'displayFlex': 'displayHide')}>
							<Link className="mobileLink " to ='/' >Home

							</Link>

							<Link className = "mobileLink" to ='/mentorship/'>Mentorship

							</Link>
							<Link className = "mobileLink" to ='/events/'>Events

							</Link>
							<Link className = "mobileLink" to ='/spotlight/'>Spotlight

							</Link>
							<Link className = "mobileLink" to ='/resources/'>Resources

							</Link>
							{/*<Link className = "mobileLink" to ='/contact/'>Contact

							</Link>*/}
						</div>
					</div>
				</div>

			);
		}
	}

	export default Navigation;
