import React from 'react'

let Person = function statelessFunctionComponentClass(props) {
	let imageURL = '../assets/' + props.imageURL
	let myColor = props.color ;
	console.log(props.color);
	let cardColor = function(myColor) {
		return {
			background: myColor,
		}
	}
	let allTerms = "design visual";
	let sortTerm = allTerms;
	console.log(sortTerm);
	if (props.title.indexOf(sortTerm)>=0) {
		console.log("yes it does");
		console.log(props.title);
	}else{
		console.log("no it does not");
	}
	return (
//if prop title contains "motion design" then display block else none
		<div className="personCard">
			<div className="colorSwatch" style={cardColor(myColor)}></div>
			<img className="photo" src={__PATH_PREFIX__ + imageURL} />
			<div className="personInfo">
				<div className="name">{props.name}</div>
				<div className="title">{props.title}</div>
				<div className="description">{props.bio}</div>
			</div>
		</div>

	)
}

export default Person
