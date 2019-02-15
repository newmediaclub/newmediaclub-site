import React from 'react';
import MentorPerson from './Members/MentorPerson.jsx';
import AlumniPerson from './Members/AlumniPerson.jsx';

import alumni from '../assets/alumniData.json';
import mentor from '../assets/mentorData.json';
import classnames from 'classnames';

var jsonFile = mentor;
class Mentors extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: "alumni",
			selectedFilter: "All",
			button_active__eboard: "button_active__eboard",
			button_active__mentor: "",
		}
	}

	createPerson = (person) => {
		return <MentorPerson person={person} />;
	};

	createAlumni = (person) => {
		return <AlumniPerson person={person} />;
	};

	createPeople = (people) => {
		if (this.state.selected === "alumni") {
			console.log("alumnifunction");
		}
		const needle = this.state.selectedFilter.toLowerCase();

		const filtered = people.filter(person => {
			const haystack = person.title.toLowerCase();

			return needle === 'all' || haystack.indexOf(needle) > - 1;
		});

		if (this.state.selected == "alumni") {
			return filtered.map(this.createAlumni);
		}

		if (this.state.selected == "mentor") {
			return filtered.map(this.createPerson);
		}
	};

	setData = () => {
		this.setState({
			selected: "alumni",
			button_active__eboard: "button_active__eboard",
			button_active__mentor: ""
		});
	};

	setMentor = () => {
		this.setState({
			selected: "mentor",
			button_active__mentor: "button_active__mentor",
			button_active__eboard: ""
		});
	};

	updateSelectedFilter = (option) => {
		this.setState({
			selectedFilter: option,
		})
	};

	render() {
		const filterOptions = ['All', 'UI', 'UX', 'Motion', 'Visual', 'Illustration', 'Prototyping', '3D', 'Drawing', 'Coding', 'Photography', 'Printing'];

		const currentData = this.state.selected === "mentor" ? mentor : alumni;

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
						<p className={`peopleHeading ${this.state.selected === "alumni" ? "deactivateHeader" : ''}`}>Filtering</p>
						<div className="sortingButtonsContainer">
							{
								filterOptions.map(option => {
									const { selectedFilter } = this.state;
									const activeClassName = 'sortingContainer-button-active';

									return (
										<p
											key={option}
											onClick={() => this.updateSelectedFilter(option)}
											className={`sortingContainer-button ${selectedFilter === option ? activeClassName : ''}
											${this.state.selected === "alumni" ? " deactivateButtons" : ''}
											`}>
											{option}
										</p>
									)
								})
							}
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
