import React from 'react';
import MentorPerson from './Members/MentorPerson.jsx';

import alumni from '../assets/alumniData.json';
import mentor from '../assets/mentorData.json';
import classnames from 'classnames';

var jsonFile = mentor;
class Mentors extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			selected : "alumni",
			button_active__eboard: "button_active__eboard",
			button_active__mentor: "",
		}
		// this.handleClick = this.handleClick.bind(this);
		this.setData = this.setData.bind(this);
		this.setMentor = this.setMentor.bind(this);
	}
	createPerson = (person) => {
		return <MentorPerson imageURL={person.image} key={person.name} name={person.name} title={person.title} bio={person.bio} color={person.color}/>;
	};
	createAlumni = (person) => {
		return <AlumniPerson imageURL={person.image} key={person.name} name={person.name} title={person.title} bio={person.bio} color={person.color} email={person.email} website={person.website}/>;
	};
	createPeople = (people) => {

		const filtered = people.filter(person => person.title.toLowerCase().indexOf(this.state.selected) > -1)

		if (this.state.selected == "alumni") {
			console.log("alumni");
			return filtered.map(this.createAlumni);
		}
		if (this.state.selected == "mentor") {
			console.log("mentor");

			return filtered.map(this.createPerson);
		}

	};


	setData = () => {

		this.setState({
			selected : "alumni",
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
		const options = ['UI', 'UX'];
		

		const currentData = this.state.selected === "mentor" ? mentor : alumni;
		if (this.state.selected == alumni) {

		}

		return (
			<div className="container">
				<div className="peoplesortingContainer">

					<div className="buttonContainer">
						<p className="peopleHeading">Groups</p>
						<div onClick={this.setData} className={classnames('buttonPeople', this.state.button_active__eboard)}>
							Alumni

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

export default Mentors;
