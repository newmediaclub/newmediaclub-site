import React from 'react'

let EboardPerson = function statelessFunctionComponentClass(props) {
	let imageURL = '../assets/' + props.imageURL
	let myColor = props.color ;

	let cardColor = function(myColor) {
		return {
			background: myColor,
		}
	}

	function createTable() {
		let tagsArr = []

		let tags = props.title.split(" ");;

		for (let j = 0; j < tags.length; j++) {
			tagsArr.push(<p className="mentorTag">{tags[j]}</p>)
		}
		return tagsArr
	}

	return (
		//if prop title contains "motion design" then display block else none
		<div className="personCard">
			<div className="colorSwatch" style={cardColor(myColor)}></div>
			<img className="photo" src={__PATH_PREFIX__ + imageURL} />
			<div className="personInfo">
				<div className="name">{props.name}</div>
				{/* <div className="mentorTag">{props.title}</div>  */}
				<div className="tagContainer">
					{
						createTable()
					}
				</div>

				<div className="description">{props.bio}</div>
			</div>
		</div>

	)
}

export default EboardPerson
