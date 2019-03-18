import React from 'react'
import Link from 'gatsby-link'
import SubscribeFrom from "react-mailchimp-subscribe";
import NMC_logo from '../assets/NMC_logo.svg';

let adamImageURL = './assets/Adam_head.png';

class Email extends React.Component {
	render() {
		return (<div className="email-container flex flex-justify-center flex-align-items-center" id="mc_embed_signup">
		<form className="validate flex flex-row" action="https://rit.us14.list-manage.com/subscribe/post?u=8ed84f128f439d4ab46e02db7&amp;id=e367bf5ac6" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" noValidate="novalidate">
			<input className="email-input required email" type="email" name="EMAIL" id="mce-EMAIL" required="" placeholder="Give me the emails"></input>
			<div id="mce-responses" className="clear">
				<div className="response" id="mce-error-response" style={{
						display: 'none'
					}}></div>
					<div className="response" id="mce-success-response" style={{
							display: 'none'
						}}></div>
						<div style={{
								position: 'absolute',
								left: '-5000px'
							}} aria-hidden="true">
							<input type="text" name="b_8ed84f128f439d4ab46e02db7_e367bf5ac6" tabIndex="-1" value=""></input>
						</div>
						<div className="email-button-container clear">
							<img className="email-adam" src={__PATH_PREFIX__ + adamImageURL} alt="Adam's head"></img>
								<input type="submit" value="Let's do this" name="subscribe" id="mc-embedded-subscribe" className="button email-button position-relative"></input>
							</div>
						</div>
					</form>
				</div>)
			}
		}

		export default Email
