import React from 'react'

let Person = function statelessFunctionComponentClass(props) {
  let imageURL = './assets/eboard/' + props.imageURL

  return (<div className="eboard-person grid grid__col grid__col--3-of-6 ">

    <div className="eboard-image grid__col grid__col--m-6-of-6">
      <img src={__PATH_PREFIX__ + imageURL} />
    </div>

    <div className="eboard-content grid__col grid__col--m-6-of-6">
      <p className="eboard-title">{props.title}</p>
      <h2 className="eboard-name">{props.name}</h2>
      <p className="eboard-bio">{props.bio}</p>
    </div>

  </div>)
}

export default Person
