import React from 'react';
import Person from './Person.jsx';
import data from '../../assets/data.json';
import mentor from '../../assets/mentorData.json';
var jsonFile = mentor;
class Eboard extends React.Component {

	createPerson = (person) => {
		return <Person imageURL={person.image} key={person.name} name={person.name} title={person.title} bio={person.bio}/>;
	};

	createPeople = (people) => {
		return people.map(this.createPerson);
	};

	// createPerson = (mentor) => {
	// 	return <Person imageURL={mentor.image} key={mentor.name} name={mentor.name} title={mentor.title} bio={mentor.bio}/>;
	// };
	//
	// createPeople = (mentor) => {
	// 	return mentor.map(this.createPerson);
	// };

	handleClick(){
		// if (jsonFile == "data") {
		// 	jsonFile = "mentor";
		// 	console.log("mentordata");
		// 	createPerson = (person) => {
		// 		return <Person imageURL={person.image} key={person.name} name={person.name} title={person.title} bio={person.bio}/>;
		// 	};
		// 	createPeople = (people) => {
		// 		return people.map(this.createPerson);
		// 	};
		// }else if (jsonFile == "mentor"){
		// 	jsonFile = "data";
		// 	console.log("eboarddata");
		// }else{
		// 	jsonFile = "data";
		// 	console.log("fallbackeboard");
		// }
	};
	render() {
		return (
			<div className="container">
				<div className="buttonContainer">
					<button onClick={this.handleClick} className="buttonPeople">
						Eboard
					</button>
					<button onClick={this.handleClick} className="buttonPeople buttonPeople-active" >
						Mentors
					</button>
				</div>
				<div className="eboard">
					<h1 className="eboard-header">Brought to you by</h1>
					<div className="eboard-people">{this.createPeople(jsonFile.people)}</div>
				</div>
			</div>
		);
	}
}

export default Eboard;
