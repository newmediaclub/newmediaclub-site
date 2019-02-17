import React from 'react';

import EventCard from './Members/EventCard.jsx';
import eventData from '../assets/currenteventDataTest.json';

import classnames from 'classnames';


class ResourceCards extends React.Component {
	constructor(props) {
		super(props);

	}

	createEvent = (currEvents) => {
		return <EventCard date={currEvents.date} title={currEvents.title} description={currEvents.description} link={currEvents.link} image={currEvents.image} buttonText={currEvents.buttonText}  />;
	};


	createEvents = (events) => {
		const grouped = events.reduce((toxic, event) => {
			const list = toxic[event.category];

			toxic[event.category] = list ? [...list, event] : [event];

			return toxic;
		}, {});
		console.log(grouped);
		return events.map(this.createEvent);
	};

	render() {

		return (
			<div className="eventsContainer">
				<div className="currentEventsHome">{this.createEvents(eventData.currEvents)}</div>
			</div>
		);
	}
}

export default ResourceCards;
