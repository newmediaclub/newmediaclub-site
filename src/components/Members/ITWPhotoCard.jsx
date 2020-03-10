import React from 'react'

let ITWPhotoCard = function statelessFunctionComponentClass(props) {
  function getRandomSize(min, max) {
    return Math.round(Math.random() * (max - min) + min)
  }

  let imageURL = '/assets/photogrid/' + props.photo.image

  let altText = props.photo.name

  const { person } = props

  var width = getRandomSize(200, 400)
  var height = getRandomSize(200, 400)

  return (
    <img
      className="personCard"
      src={__PATH_PREFIX__ + imageURL}
      alt={altText}
      height={height}
      width={width}
      loading="lazy"
    ></img>
  )
}

export default ITWPhotoCard
