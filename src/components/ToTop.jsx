import React from 'react'
import toTop from '../assets/toTop.svg';

let ToTop = function statelessFunctionComponentClass(props) {

	return (
		<a href="#top" className="toTopContainer"><img src={toTop} className="toTopIcon" alt="Back to top icon"></img></a>
	)
}

export default ToTop
