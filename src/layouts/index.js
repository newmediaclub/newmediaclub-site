import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.scss'

const Header = () => (
  <div>

  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="New Media Club Website"
      link href="https://fonts.googleapis.com/css?family=Raleway:300,400,700|Source+Sans+Pro:300,300i,400,600,700" rel="stylesheet"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}

    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
