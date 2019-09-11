import React from 'react'

import ResourceCard from './Members/ResourceCard.jsx'
import resourceData from '../assets/resourceData.json'

// import classnames from 'classnames';

class ResourceCards extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedFilter: 'All',
    }
    this.filterOptions = ['All']
  }

  createResource = Resources => {
    // if (!this.filterOptions.includes(Resources.category)) {
    // 	this.filterOptions.push(Resources.category);
    // }
    return (
      <ResourceCard
        key={Resources.title}
        date={Resources.date}
        title={Resources.title}
        link={Resources.link}
        image={Resources.image}
      />
    )
  }

  createResources = resources => {
    const grouped = {}

    for (const resource of resources) {
      const categoryResource = grouped[resource.category]

      let newList
      if (categoryResource) {
        newList = categoryResource.concat([resource])
      } else {
        newList = [resource]
      }

      grouped[resource.category] = newList
    }

    return Object.keys(grouped).map(category => {
      return this.createCategory(category, grouped[category])
    })
  }

  updateSelectedFilter = option => {
    this.setState({
      selectedFilter: option,
    })
  }

  createCategory = (categoryName, resources) => {
    if (categoryName === this.state.selectedFilter) {
      return (
        <div className="resourceTitleRow">
          <p className="pageHeading">{categoryName}</p>
          <div className="resourceRow">
            {resources.map(this.createResource)}
          </div>
        </div>
      )
    } else if ('All' === this.state.selectedFilter) {
      return (
        <div className="resourceTitleRow">
          <p className="pageHeading">{categoryName}</p>
          <div className="resourceRow">
            {resources.map(this.createResource)}
          </div>
        </div>
      )
    }
  }

  render() {
    const filterOptions = [
      'All',
      'NMC',
      'Inspiration',
      'Typography',
      'Prototyping',
      'Web Development',
      'User Experience',
    ]
    // const filterOptions = this.filterOptions;
    return (
      <div className="resourcesWholeContainer">
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
											`}
                  >
                    {option}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
        <div className="resourceContainer">
          {this.createResources(resourceData.Resources)}
        </div>
      </div>
    )
  }
}

export default ResourceCards
