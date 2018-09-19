import React from 'react';
import Person from './Person.jsx';
import data from '../../assets/data.json';
import mentor from '../../assets/mentorData.json';
var jsonFile = mentor;
class Eboard extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			selected : "data"
		}
		// this.handleClick = this.handleClick.bind(this);
		this.setData = this.setData.bind(this);
		this.setMentor = this.setMentor.bind(this);
	}
	createPerson = (person) => {
		return <Person imageURL={person.image} key={person.name} name={person.name} title={person.title} bio={person.bio}/>;
	};

	createPeople = (people) => {
		return people.map(this.createPerson);
	};

	setData(){

		this.setState({
			selected : "data"
		});

	};
	setMentor(){

		this.setState({
			selected : "mentor"
		});

	};
	// handleClick(){
	//
	// 	if (this.state.selected == "data") {
	// 		this.setState({
	// 			selected : "mentor"
	// 		});
	// 	}else if (this.state.selected == "mentor"){
	// 		this.setState({
	// 			selected : "data"
	// 		});
	// 	}
	//
	// };
	render() {

	 const currentData = this.state.selected === "mentor" ? mentor : data;

		return (
			<div className="container">
				<div className="buttonContainer">
					<button onClick={this.setData} className="buttonPeople">
						Eboard
					</button>
					<button onClick={this.setMentor} className="buttonPeople buttonPeople-active" >
						Mentors
					</button>
				</div>
				<div className="eboard">
					<h1 className="eboard-header">Brought to you by</h1>
					<div className="eboard-people">{this.createPeople(currentData.people)}</div>
				</div>
			</div>
		);
	}
}

export default Eboard;
