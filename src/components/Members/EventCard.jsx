import React from 'react'

let EventCard = function statelessFunctionComponentClass(props) {

	let imageURL = '../eventAssets/' + props.image;
	let altText = props.title;

	return (

		<div className="eventCardContainer">
			<img src={imageURL} className="eventImage" alt={altText}></img>
			<div className="eventinfoArea">
				<div className="eventInfo">
					<p className="eventDate">{props.date}</p>
					<p className="eventDate">{props.account}</p>
					<div className="eventTitle">{props.title}</div>
					<div className="eventDescription">{props.description} </div>
				</div>
				<a href={props.link} target="_blank" rel="noopener noreferrer"><div className="eventButton">{props.buttonText}</div></a>
			</div>
		</div>
	)
}

export default EventCard
