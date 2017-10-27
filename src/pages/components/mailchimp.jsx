import React from 'react'
import Link from 'gatsby-link'
import SubscribeFrom from "react-mailchimp-subscribe";

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

const Mailchimp = () => <SubscribeFrom {...formData}/>;

export default Mailchimp
