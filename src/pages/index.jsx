import React from 'react'
import Link from 'gatsby-link'

import Eboard from './components/Eboard'
import About from './components/About'

const IndexPage = ({data}) => (
  <div>
    <About/>
    <Eboard/>
  </div>
)

export default IndexPage
