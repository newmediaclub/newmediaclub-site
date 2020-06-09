import React from 'react'
// import backButton from '/assets/backButton.svg'

let SinglePortfolio = function statelessFunctionComponentClass(props) {
  let imageURL = '/portfolioBanners/' + props.portfolio.image
  // console.log(imageURL)
  // let myColor = props.portfolio.color

  let altText = 'A photo of ' + props.portfolio.name
  // let portfoliosLink = props.portfolio.link

  // let cardColor = function(myColor) {
  //   return {
  //     background: myColor,
  //   }
  // }

  function createTable() {
    let tagsArr = []

    let tags = props.portfolio.fieldTags.split(' ')

    for (let j = 0; j < tags.length; j++) {
      tagsArr.push(
        <p className="mentorTag" key={j}>
          {tags[j]}
        </p>
      )
    }
    return tagsArr
  }

  const { portfolio } = props

  return (
    //if prop title contains "motion design" then display block else none
    <a href={portfolio.link} target="_blank" rel="noopener noreferrer">
      <div className="personCard">
        {/* <div className="colorSwatch"> */}
        <img
          className="portfolioBannerImage"
          loading="lazy"
          src={__PATH_PREFIX__ + imageURL}
          alt={altText}
        />
        {/* </div> */}

        <div className="personInfo info">
          <div className="portfolioLink">{portfolio.link}</div>
          <div className="name">{portfolio.name}</div>
          {/* <div className="mentorTag">{props.title}</div>  */}
          <div className="tagContainer portfolioTags">{createTable()}</div>
          {/* <div className="description">{portfolio.bio}</div> */}
          {/* <img src={backButton} className="portfolioLinkButton"></img> */}
        </div>
      </div>
    </a>
  )
}

export default SinglePortfolio
