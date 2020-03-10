import React from 'react'
// import MentorPerson from './Members/MentorPerson.jsx'
// import AlumniPerson from './Members/AlumniPerson.jsx'
import PhotoCard from './Members/ITWPhotoCard.jsx'
// insert new ITW PhotoCard

import photodata from '../assets/photoGrid.json'
// insert the new ITW photo json
// import classnames from 'classnames'

class ITWPhotos extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 'photo',
      selectedFilter: 'All',
    }
  }

  createPhoto = photo => {
    return <PhotoCard photo={photo} key={photo.name + photo.image} />
  }
  createPhotos = photos => {
    const needle = this.state.selectedFilter.toLowerCase()

    const filtered = photos.filter(photo => {
      const haystack = photo.title.toLowerCase()

      return needle === 'all' || haystack.indexOf(needle) > -1
    })

    if (this.state.selected === 'photo') {
      return filtered.map(this.createPhoto)
    }
  }

  updateSelectedFilter = option => {
    this.setState({
      selectedFilter: option,
    })
  }

  render() {
    const filterOptions = [
      'All',
      'Facebook',
      'Mentor Flags',
      'Potluck',
      'Summer Recap 2019',
      'Public Speaking',
    ]

    const currentData = photodata

    return (
      <div className="container">
        <div className="peoplesortingContainer">
          <div className="sortingContainer">
            <p
              className={`peopleHeading ${
                this.state.selected === 'alumni' ? 'deactivateHeader' : ''
              }`}
            >
              Filtering
            </p>
            <div className="sortingButtonsContainer">
              {filterOptions.map(option => {
                const { selectedFilter } = this.state
                const activeClassName = 'sortingContainer-button-active'

                return (
                  <p
                    key={option}
                    onClick={() => this.updateSelectedFilter(option)}
                    className={`sortingContainer-button ${
                      selectedFilter === option ? activeClassName : ''
                    }
											${this.state.selected === 'alumni' ? ' deactivateButtons' : ''}
											`}
                  >
                    {option}
                  </p>
                )
              })}
            </div>
          </div>
        </div>

        <section id="photos">{this.createPhotos(currentData.photos)}</section>
      </div>
    )
  }
}

export default ITWPhotos
