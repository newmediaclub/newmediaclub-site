import React from 'react'
import PropTypes from 'prop-types'
// import Link from 'gatsby-link'
// import Helmet from 'react-helmet'

import NMC_favicon from '../assets/NMC_favicon.png'
import Social from '../assets/social.png'

import './index.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <meta name="google" content="notranslate" />
    <meta http-equiv="Content-Language" content="en" />

    <meta name="description" content="Website for the New Media Club at RIT" />

    <meta property="og:title" content="New Media Club" />
    <meta
      property="og:description"
      content="Website for the New Media Club at RIT"
    />
    <meta property="og:type" content="website" />
    <meta property="og:image" content={Social} />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:width" content="720" />
    <meta property="og:image:height" content="400" />
    <meta property="og:site_name" content="http://newmediaclub.cias.rit.edu/" />
    <meta property="og:url" content="http://newmediaclub.cias.rit.edu/" />

    <meta name="apple-mobile-web-app-capable" content="yes" />

    <meta itemprop="name" content="New Media Club at RIT" />
    <meta
      itemprop="description"
      content="Website for the New Media Club at RIT"
    />
    <meta itemprop="image" content="New Media Club at RIT" />

    <meta name="author" content="Andrew Hurley" />

    <title>New Media Club</title>
    <link rel="shortcut icon" href={NMC_favicon} type="image/png" />
    <link rel="icon" href={NMC_favicon} type="image/png" />
    <link
      href="https://fonts.googleapis.com/css?family=Raleway:300,400,700|Source+Sans+Pro:300,300i,400,600,700"
      rel="stylesheet"
    />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
