import React, { Component } from 'react'
import Link from 'gatsby-link'

import Eboard from '../components/Eboard'
import Email from '../components/Email'
import About from '../components/About'

export default class IndexPage extends Component {
  render() {
    
    return (
      <div>
        <About />
        <Email />
        <Eboard />
      </div>
    )
  }
}
