import React from 'react'
import PropTypes from 'prop-types'
// import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import NMC_favicon from '../assets/NMC_favicon.png'
import Social from '../assets/social.png'

import './index.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <meta name="google" content="notranslate" />
      <meta http-equiv="Content-Language" content="en" />

      <meta
        name="description"
        content="Website for the New Media Club at RIT"
      />

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
      <meta
        property="og:site_name"
        content="http://newmediaclub.cias.rit.edu/"
      />
      <meta property="og:url" content="http://newmediaclub.cias.rit.edu/" />

      <meta name="apple-mobile-web-app-capable" content="yes" />

      <meta itemprop="name" content="New Media Club at RIT" />
      <meta
        itemprop="description"
        content="Website for the New Media Club at RIT"
      />
      <meta itemprop="image" content="New Media Club at RIT" />

      <meta name="author" content="Will McCloskey" />

      <title>New Media Club</title>
      <link rel="shortcut icon" href={NMC_favicon} type="image/x-icon" />
      <link rel="icon" href={NMC_favicon} type="image/x-icon" />
      <link
        href="https://fonts.googleapis.com/css?family=Raleway:300,400,700|Source+Sans+Pro:300,300i,400,600,700"
        rel="stylesheet"
      />
    </Helmet>
    <div className="scrollBarFix">{children()}</div>
  </div>
)

console.log(
  '%c New 2020 Design and Code by Will McCloskey, @will.makes.things, RIT New Media Design 21, Webmaster 2020-2021 ',
  'background: rgb(238,174,202); background: -webkit-linear-gradient(to right, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%); background: linear-gradient(to right, #E684AE, #79CBCA, #77A1D3); border: 1px solid #3E0E02; color: white; display: block; text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3); box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 3px 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset; line-height: 40px; text-align: center; font-weight: bold;'
)
console.log(
  '%c New 2019 Design and Code by Andrew Hurley, @andrew._.hurley, RIT New Media Design 20, Webmaster 2018-2020 ',
  'background: #77A1D3; background: -webkit-linear-gradient(to right, #E684AE, #79CBCA, #77A1D3); background: linear-gradient(to right, #E684AE, #79CBCA, #77A1D3); border: 1px solid #3E0E02; color: white; display: block; text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3); box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 3px 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset; line-height: 40px; text-align: center; font-weight: bold;'
)

console.log(
  '%c Created by Jacob Frank, @jacobdfrank, RIT SOIS 19, Webmaster from 2016-18 ',
  'background: linear-gradient(#e66465, #9198e5); border: 1px solid #3E0E02; color: white; display: block; text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3); box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 3px 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset; line-height: 40px; text-align: center; font-weight: bold;'
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
