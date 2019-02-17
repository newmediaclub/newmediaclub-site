import React from 'react'

let ResourceCard = function statelessFunctionComponentClass(props) {

	let imageURL = '../eventAssets/' + props.image;
console.log(imageURL);
	return (

		<div className="resourceCardContainer">
				
				<img src={imageURL} className="resourceImage"></img>
				
				<div className="resourceTitle">{props.title}</div>
		</div>
	)
}

export default ResourceCard
