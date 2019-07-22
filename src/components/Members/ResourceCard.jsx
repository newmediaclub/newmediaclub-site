import React from 'react'

let ResourceCard = function statelessFunctionComponentClass(props) {

	let imageURL = '../resourceAssets/' + props.image;

	return (

		<div className="resourceCardContainer">

				<a href={props.link} target="_blank"><img src={imageURL} className="resourceImage" alt={props.title}></img></a>

				<div className="resourceTitle">{props.title}</div>
		</div>
	)
}

export default ResourceCard
