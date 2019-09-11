import React from 'react'

let AlumniPerson = function statelessFunctionComponentClass(props) {
  let imageURL = '/assets/' + props.person.image

  let altText = props.person.name

  let myColor = props.person.color

  let cardColor = function(myColor) {
    return {
      background: myColor,
    }
  }

  // function createTable() {
  // 	let tagsArr = [];

  // 	let tags = props.person.title.split(" ");

  // 	for (let j = 0; j < tags.length; j++) {
  // 		tagsArr.push(<p className="mentorTag">{tags[j]}</p>)
  // 	}
  // 	return tagsArr
  // }

  const { person } = props

  return (
    //if prop title contains "motion design" then display block else none
    <div className="personCard alumniCardHeight">
      <div className="colorSwatch" style={cardColor(myColor)}></div>
      <img className="photo" src={__PATH_PREFIX__ + imageURL} alt={altText} />
      <div className="personInfo">
        <div className="name">{person.name}</div>
        {/* <div className="mentorTag">{props.title}</div>  */}
        <div className="tagContainer">
          {person.title} at {person.company}
        </div>
        <div className="alumniLinkContainer">
          <a href={person.website} target="_blank" rel="noopener noreferrer">
            <p className="alumniLink">{person.website}</p>
          </a>
          <p className="alumniLink">{person.email}</p>
        </div>
      </div>
    </div>
  )
}

export default AlumniPerson
