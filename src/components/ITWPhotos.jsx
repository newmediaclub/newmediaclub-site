import React from 'react'
import PhotoCard from './Members/ITWPhotoCard.jsx'
import photodata from '../assets/photoGrid.json'

class ITWPhotos extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 'photo',
      selectedFilter: 'All',
    }
  }

  shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[a[i], a[j]] = [a[j], a[i]]
    }
    return a
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

    // if (this.state.selected === 'photo') {
    return this.shuffle(filtered.map(this.createPhoto))
    // }
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
      'Picnic 2019',
      'Summer Recap 2019',
      'Public Speaking',
      'Formal 2019',
      'Formal 2016',
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
