import React from 'react'
import Link from 'gatsby-link'
import SubscribeFrom from "react-mailchimp-subscribe";
import Adam_head from '../../assets/Adam_head.png';

class Mailchimp extends React.Component {
  render() {
    const formData = {
      action: "http://eepurl.com/ceufrn",
      messages: {
        inputPlaceholder: "Give me the emails",
        btnLabel: "Let's do this",
        sending: "Sending in progress...",
        success: "You'll get a confirmation email soon",
        error: "Oops, can not save this address"
      },
      styles: {
        sending: {
          fontSize: 18,
          color: "auto"
        },
        success: {
          fontSize: 18,
          color: "green"
        },
        error: {
          fontSize: 18,
          color: "red"
        }
      }
    };
    return (<div>
      {/* <div className="email-container flex flex-justify-center flex-align-items-center">
        <form className="flex" action="http://eepurl.com/ceufrn" method="post">
          <input className="email-input" type="email" name="EMAIL" required="" placeholder="Give me the emails"/>
          <div className="email-button-container">
            <img className="email-adam" src={Adam_head} alt="Adam's head"></img>
            <button className="email-button position-relative" type="submit">Let's do this</button>
          </div>
        </form>
      </div> */}

      <div className="email-container flex flex-justify-center flex-align-items-center" id="mc_embed_signup">
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
              <img className="email-adam" src={Adam_head} alt="Adam's head"></img>
              <input type="submit" value="Let's do this" name="subscribe" id="mc-embedded-subscribe" className="button email-button position-relative"></input>
            </div>
          </div>
        </form>
      </div>
    </div>)
  }
}

export default Mailchimp
