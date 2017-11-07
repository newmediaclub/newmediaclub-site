import React from 'react'
import Link from 'gatsby-link'

import Posts from './components/posts'
import Eboard from './components/Eboard'
import Mailchimp from './components/Mailchimp'
import About from './components/About'

import textBalancer from 'text-balancer';

textBalancer.balanceText();

const IndexPage = ({data}) => (
  <div>
    <Link to="/page-2/">Go to page 2</Link>
    <About/>
    <Mailchimp/>
    <Eboard/>
  </div>
)

export default IndexPage
