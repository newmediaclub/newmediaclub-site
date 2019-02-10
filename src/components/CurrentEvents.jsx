import React from 'react';

import EventCard from './Members/EventCard.jsx';
import eventData from '../assets/currenteventData.json';

import classnames from 'classnames';


class CurrentEventCards extends React.Component {
	constructor(props) {
		super(props);

	}

	createEvent = (currEvents) => {
		return <EventCard date={currEvents.date} title={currEvents.title} description={currEvents.description} link={currEvents.link} image={currEvents.image} buttonText={currEvents.buttonText}  />;
	};


	createEvents = (events) => {
		return events.map(this.createEvent);
	};

	render() {

		return (
				<div className="currentEventsHome">
					{this.createEvents(eventData.currEvents)}
				</div>
		);
	}
}

export default CurrentEventCards;
