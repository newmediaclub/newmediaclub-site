import React from 'react';

import EventCard from './Members/SpotlightCard.jsx';
import eventData from '../assets/spotlightData.json';




class Spotlights extends React.Component {
	constructor(props) {
		super(props);

	}

	createEvent = (spotlight) => {
		return <EventCard date={spotlight.date} title={spotlight.title} description={spotlight.description} link={spotlight.link} image={spotlight.image} buttonText={spotlight.buttonText} account={spotlight.account}/>;
	};


	createEvents = (events) => {
		return events.map(this.createEvent);
	};

	render() {

		return (
				<div className="currentEventsHome">
					{this.createEvents(eventData.spotlight)}
				</div>
		);
	}
}

export default Spotlights;
