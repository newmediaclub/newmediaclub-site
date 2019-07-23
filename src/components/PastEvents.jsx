import React from 'react';

import EventCard from './Members/EventCard.jsx';
import eventData from '../assets/pasteventData.json';




class PastEvents extends React.Component {
	constructor(props) {
		super(props);

	}

	createEvent = (pastEvents) => {
		return <EventCard key={pastEvents.title} date={pastEvents.date} title={pastEvents.title} description={pastEvents.description} link={pastEvents.link} image={pastEvents.image} buttonText={pastEvents.buttonText} />;
	};


	createEvents = (events) => {
		return events.map(this.createEvent);
	};

	render() {

		return (
				<div className="currentEventsHome">
					{this.createEvents(eventData.pastEvents)}
				</div>
		);
	}
}

export default PastEvents;
