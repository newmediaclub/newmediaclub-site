import React from 'react'
import Link from 'gatsby-link'

import Posts from './components/posts'
import Eboard from './components/Eboard'
import Mailchimp from './components/Mailchimp'

const IndexPage = ({data}) => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <h2>Index</h2>
    <Mailchimp/>
    <Eboard/>
  </div>
)

export default IndexPage
