import React from 'react'
import NMC_logo from '../assets/NMC_logo.svg';
import instagram from '../assets/instagram.svg';
import facebook from '../assets/facebook.svg';

let Footer = function statelessFunctionComponentClass(props) {

	return (

		<div className="footerBackground">
			<div className="wrapContainer">
				<div className="footerContainer ">
					<div className="footerLogo">
						<img src={NMC_logo} className="about-media-NMC_logo" alt="New Media Club Logo"></img>
						<div className="footerHeader">New Media Club</div>
					</div>
					<div className="footerTextContainer">
						<div className="footerSocial">
							<div className="footerHeader">Social Media</div>
							<div>
								<a href="https://www.facebook.com/groups/ritnewmediaclub/">
									<img src={facebook} className="about-media-links-logo" alt="facebook icon"></img>
								</a>
								<a href="https://www.instagram.com/ritnewmediaclub/">
									<img src={instagram} className="about-media-links-logo" alt="instagram icon"></img>
								</a>
							</div>
							<div>
								<a href="https://cias.rit.edu/" className="footerLink">CAD </a>
								<a href="http://creativity.cias.rit.edu/index.php?major=NMDE-BFA" className="footerLink"> creativity</a>
							</div>
						</div>
						<div className="footerContact">
							<div className="footerHeader">Contact Us</div>
							<p>newmediaclub@rit.edu</p>
							<div className="footerSpacer"></div>
						</div>
					</div>
				</div>
			</div>
		</div>

	)
}

export default Footer
