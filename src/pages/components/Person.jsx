import React from 'react'

let Person = function statelessFunctionComponentClass(props) {
  let imageURL = './assets/' + props.imageURL

  return (
    <div className="grid grid__col grid__col--3-of-6 eboard-person">

      <div className="grid__col grid__col--m-6-of-6 eboard-image">
        <img src={__PATH_PREFIX__ + imageURL}/>
      </div>

      <div className="grid__col grid__col--m-6-of-6 eboard-content">
        <p className="eboard-title">{props.title}</p>
        <h2 className="eboard-name">{props.name}</h2>
        <p className="eboard-bio">{props.bio}</p>
      </div>

    </div>
  )
}

export default Person
