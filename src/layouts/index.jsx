import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import favicon from '../assets/favicon.png';
import Social from '../assets/social.png';



import './index.scss'

const TemplateWrapper = ({children}) => (<div>
  <Helmet>

    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=Edge"/>
    <meta name="google" content="notranslate"/>
    <meta http-equiv="Content-Language" content="en"/>
    <meta name="viewport" content="width=device-width initial-scale=1.0 maximum-scale=1.0 user-scalable=no"/>

    <meta name="description" content="Developer, Designer, Student"/>

    <meta property="og:title" content="Jacob Frank; Developer, Designer, and Student"/>
    <meta property="og:description" content="Developer, Designer, and Student at RIT"/>
    <meta property="og:type" content="website"/>
    <meta property="og:image" content="http://jacobdfrank.com/media/social.png"/>
    <meta property="og:image:type" content="image/jpeg"/>
    <meta property="og:image:width" content="1200"/>
    <meta property="og:image:height" content="630"/>
    <meta property="og:site_name" content="http://jacob"/>
    <meta property="og:url" content="http://jacobdfrank.com"/>

    <meta name="apple-mobile-web-app-capable" content="yes"/>

    <meta itemprop="name" content="New Media Club at RIT"/>
    <meta itemprop="description" content="Website for the New Media Club at RIT"/>
    <meta itemprop="image" content="New Media Club at RIT"/>

    <meta name="author" content="Jacob Frank"/>

    <title>Jacob Frank - Developer &amp; Designer</title>
    <link rel="shortcut icon" href={favicon} type="image/x-icon"/>
    <link rel="icon" href={favicon} type="image/x-icon"/>
    <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,700|Source+Sans+Pro:300,300i,400,600,700" rel="stylesheet"/>


  </Helmet>
  <div>
    {children()}
  </div>
</div>)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
