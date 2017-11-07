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
    return (
    <div className="email-container flex flex-justify-center flex-align-items-center">
          <form className="flex" action="http://eepurl.com/ceufrn" method="post">
            <input className="email-input" type="email" name="EMAIL" required="" placeholder="Give me the emails"/>
            <div className="email-button-container">
              <img className="email-adam" src={Adam_head} alt="Adam's head"></img>
              <button className="email-button position-relative" type="submit">Let's do this</button>
            </div>
          </form>
    </div>)
  }
}

export default Mailchimp
