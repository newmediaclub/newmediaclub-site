import React from 'react';
import EboardPerson from './Members/EboardPerson.jsx';

import data from '../assets/data.json';
import mentor from '../assets/mentorData.json';
import classnames from 'classnames';

var jsonFile = mentor;
class Eboard extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			selected : "data",
			button_active__eboard: "button_active__eboard",
			button_active__mentor: "",
		}
		// this.handleClick = this.handleClick.bind(this);
		this.setData = this.setData.bind(this);
		this.setMentor = this.setMentor.bind(this);
	}
	createPerson = (person) => {
		return <EboardPerson imageURL={person.image} key={person.name} name={person.name} title={person.title} bio={person.bio} color={person.color}/>;
	};

	createPeople = (people) => {
		return people.map(this.createPerson);
	};

	setData = () => {

		this.setState({
			selected : "data",
			button_active__eboard: "button_active__eboard",
			button_active__mentor: ""
		});

	};
	setMentor = () => {

		this.setState({
			selected : "mentor",
			button_active__mentor: "button_active__mentor",
			button_active__eboard: ""
		});

	};
	render() {

		const currentData = this.state.selected === "mentor" ? mentor : data;
		if (this.state.selected == data) {

		}

		return (
			<div className="container">
				<div className="peoplesortingContainer">

					<div className="buttonContainer">
						<p className="peopleHeading">Groups</p>
						<div onClick={this.setData} className={classnames('buttonPeople', this.state.button_active__eboard)}>
							Eboard
						</div>
						<div onClick={this.setMentor} className={classnames('buttonPeople', this.state.button_active__mentor)}>
							Mentors
						</div>
					</div>

					<div className="sortingLine"></div>

					<div className="sortingContainer">
						<p className="peopleHeading">Sorting</p>
						<div className="sortingButtonsContainer">
							<p className="sortingContainer-button sortingContainer-button-active">
								All
							</p>
							<p className="sortingContainer-button">
								UI
							</p>
							<p className="sortingContainer-button">
								UX
							</p>
							<p className="sortingContainer-button">
								Motion
							</p>
							<p className="sortingContainer-button">
								Visual
							</p>
							<p className="sortingContainer-button">
								Illustration
							</p>
							<p className="sortingContainer-button">
								Prototyping
							</p>
							<p className="sortingContainer-button">
								3D
							</p>
						</div>
					</div>
				</div>
				<div className="eboard">
					<div className="eboard-people">{this.createPeople(currentData.people)}</div>
				</div>
			</div>
		);
	}
}

export default Eboard;
