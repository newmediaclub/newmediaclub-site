import React from 'react';
import Link from 'gatsby-link'

class Navigation extends React.Component {

	render() {
		return (<div className="container">
		<div className="navContainer">
			<Link to ='/contact/' >Contact</Link>
			<Link to ='/mentorship/' >Mentorship</Link>
		</div>
	</div>);
}
}

export default Navigation;
