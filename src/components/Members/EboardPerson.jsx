import React from 'react'

let EboardPerson = function statelessFunctionComponentClass(props) {
	let imageURL = '../assets/' + props.imageURL
	let myColor = props.color ;
	// console.log(props.color);
	let cardColor = function(myColor) {
		return {
			background: myColor,
		}
	}

	// let string = props.title;
	// string.split(" ");
	// let i = 0, length = string.length;
	// for (i; i < length; i++) {
	// 	var div = document.createElement('div');
	// 	// div.innerHTML = '<span className="mentorTag">' + string[i] + '</span>';
	// 	const title = React.createElement('h1', {}, 'My First React Code');
	// }

	function createTable() {
		let tagsArr = []

		// Outer loop to create parent

		// let children = []
		let tags = props.title.split(" ");;
		//Inner loop to create children
		for (let j = 0; j < tags.length; j++) {
			tagsArr.push(<p className="mentorTag">{tags[j]}</p>)
		}
		//Create the parent and add the children
		// table.push(<div>{children}</div>)

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
