import React from 'react'
import Link from 'gatsby-link'

import Posts from './components/posts'
import Eboard from './components/Eboard'
import Mailchimp from './components/Mailchimp'

const IndexPage = ({data}) => (
  <div>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
    {/* <Mailchimp/> */}
    <Eboard/>
  </div>
)

export default IndexPage
