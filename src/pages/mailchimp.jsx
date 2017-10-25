import React from 'react'
import Link from 'gatsby-link'
import SubscribeFrom from "react-mailchimp-subscribe";

const mailchimp = {
  action: "http://eepurl.com/ceufrn",
  messages: {
    inputPlaceholder: "Your email",
    btnLabel: "To send",
    sending: "Sending in progress...",
    success: "Thanks for your interest!",
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

const Form = () => <SubscribeFrom {...mailchimp}/>;

export default Form
