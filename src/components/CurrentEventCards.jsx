import React from 'react'

import EventCard from './Members/EventCard.jsx'
import eventData from '../assets/currenteventData.json'

// import classnames from 'classnames';

class CurrentEventCards extends React.Component {
  createEvent = currEvents => {
    return (
      <EventCard
        date={currEvents.date}
        title={currEvents.title}
        description={currEvents.description}
        link={currEvents.link}
        image={currEvents.image}
        buttonText={currEvents.buttonText}
        key={currEvents.title}
      />
    )
  }

  createEvents = events => {
    return events.map(this.createEvent)
  }

  render() {
    return (
      <div className="eventsContainer">
        <div className="currentEventsHome">
          {this.createEvents(eventData.currEvents)}
        </div>
      </div>
    )
  }
}

export default CurrentEventCards
