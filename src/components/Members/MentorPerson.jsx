import React from 'react'

let MentorPerson = function statelessFunctionComponentClass(props) {
  let imageURL = '/assets/' + props.person.image

  let myColor = props.person.color

  let altText = props.person.name

  let cardColor = function(myColor) {
    return {
      background: myColor,
    }
  }

  function createTable() {
    let tagsArr = []

    let tags = props.person.title.split(' ')

    for (let j = 0; j < tags.length; j++) {
      tagsArr.push(<p className="mentorTag">{tags[j]}</p>)
    }
    return tagsArr
  }

  const { person } = props

  return (
    //if prop title contains "motion design" then display block else none
    <div className="personCard">
      <div className="colorSwatch" style={cardColor(myColor)}></div>
      <img
        className="photo"
        loading="auto"
        src={__PATH_PREFIX__ + imageURL}
        alt={altText}
      />
      <div className="personInfo">
        <div className="name">{person.name}</div>
        {/* <div className="mentorTag">{props.title}</div>  */}
        <div className="tagContainer">{createTable()}</div>

        <div className="description">{person.bio}</div>
      </div>
    </div>
  )
}

export default MentorPerson
