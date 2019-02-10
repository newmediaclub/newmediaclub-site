import React from 'react'

let EventCard = function statelessFunctionComponentClass(props) {

	let imageURL = '../eventAssets/' + props.image;
console.log(imageURL);
	return (

		<div className="eventCardContainer">
			<img src={imageURL} className="eventImage"></img>
			<div className="eventinfoArea">
				<div className="eventInfo">
					<div className="eventDate">{props.date}</div>
					<div className="eventTitle">{props.title}</div>
					<div className="eventDescription">{props.description} </div>
				</div>
				<div className="eventButton">{props.buttonText}</div>
			</div>
		</div>
	)
}

export default EventCard
