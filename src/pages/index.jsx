import React from 'react'
import Link from 'gatsby-link'

import Eboard from './components/Eboard'
import Mailchimp from './components/Mailchimp'
import About from './components/About'

const IndexPage = ({data}) => (
  <div>
    <About/>
    <Mailchimp/>
    <Eboard/>
  </div>
)

export default IndexPage
