import React from 'react'
import Link from 'gatsby-link'

import Eboard from './components/Eboard'
import Email from './components/Email'
import About from './components/About'

const IndexPage = ({data}) => (
  <div>
    <About/>
    <Email/>
    <Eboard/>
  </div>
)

export default IndexPage
