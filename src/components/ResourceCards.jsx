import React from 'react';

import ResourceCard from './Members/ResourceCard.jsx';
import eventData from '../assets/currenteventDataTest.json';

import classnames from 'classnames';


class ResourceCards extends React.Component {
	constructor(props) {
		super(props);

	}

	createEvent = (currEvents) => {
		return <ResourceCard key={currEvents.title} date={currEvents.date} title={currEvents.title} description={currEvents.description} link={currEvents.link} image={currEvents.image} buttonText={currEvents.buttonText}  />;
	};


	createEvents = (events) => {
		const grouped = {};

		for (const event of events) {
			const categoryEvents = grouped[event.category];

			let newList;
			if(categoryEvents) {
				newList = categoryEvents.concat([event]);
			} else {
				newList = [event];
			}

			grouped[event.category] = newList;
		}

		return Object.keys(grouped).map((category) => {
			return this.createCategory(category, grouped[category])
		});
	};

	createCategory = (categoryName, events) => {
		return (
			<div className="resourceTitleRow">
				<p className="pageHeading">{categoryName}</p>
				<div className="resourceRow">
				{
					events.map(this.createEvent)
				}
				</div>
			</div>
		)
	}

	render() {
		return (
			<div className="resourcesWholeContainer">
				<div className="resourceContainer">{this.createEvents(eventData.currEvents)}</div>
			</div>
		);
	}
}

export default ResourceCards;
