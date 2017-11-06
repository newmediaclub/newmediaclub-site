import React from 'react'
import Link from 'gatsby-link'
import SubscribeFrom from "react-mailchimp-subscribe";

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
    return (<div className="email-container flex flex-justify-center">
      <div className="email-form">
        <div>
          <form className="flex" action="http://eepurl.com/ceufrn" method="post" novalidate="">
            <div>
              <input className="email-input" type="email" name="EMAIL" required="" placeholder="Give me the emails" value=""/>
              <button className="email-button" type="submit">Let's do this</button>
              </div>
            </form>
          </div>
        </div>
      </div>)
  }
}

export default Mailchimp
