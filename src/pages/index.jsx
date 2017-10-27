import React from 'react'
import Link from 'gatsby-link'

import Mailchimp from './components/mailchimp'
import Posts from './components/posts'

const IndexPage = ({data}) => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <h2>Index</h2>
    <Mailchimp />
  </div>
)

export default IndexPage
