import React from 'react'
import ModalImage from 'react-modal-image'

let ITWPhotoCard = function statelessFunctionComponentClass(props) {
  function getRandomSize(min, max) {
    return Math.round(Math.random() * (max - min) + min)
  }

  let imageURL = '/assets/photogrid/' + props.photo.image

  let altText = props.photo.name

  var width = getRandomSize(200, 400)
  var height = getRandomSize(200, 400)

  return (
    <div>
      {/* <img
        className=""
        src={__PATH_PREFIX__ + imageURL}
        alt={altText}
        height={height}
        width={width}
        loading="lazy"
      ></img> */}
      <ModalImage
        small={__PATH_PREFIX__ + imageURL}
        large={__PATH_PREFIX__ + imageURL}
        height={height}
        width={width}
        loading="lazy"
      />
    </div>
  )
}

export default ITWPhotoCard
