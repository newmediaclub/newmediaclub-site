import React from 'react'

let EboardPerson = function statelessFunctionComponentClass(props) {
	let imageURL = '../assets/' + props.imageURL
	let myColor = props.color ;

	let altText = props.name;

	let cardColor = function(myColor) {
		return {
			background: myColor,
		}
	}



	return (
		//if prop title contains "motion design" then display block else none
		<div className="personCard">
			<div className="colorSwatch" style={cardColor(myColor)}></div>
			<img className="photo" src={__PATH_PREFIX__ + imageURL} alt={altText} />
			<div className="personInfo">
				<div className="name">{props.name}</div>
				{/* <div className="mentorTag">{props.title}</div>  */}
				<div className="title">
				{props.title}
				</div>

				<div className="description">{props.bio}</div>
			</div>
		</div>

	)
}

export default EboardPerson
