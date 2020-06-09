import React from 'react'
// import Mentorportfolios from './Members/Mentorportfolios.jsx'
// import Alumniportfolios from './Members/Alumniportfolios.jsx'
import SinglePortfolio from './Members/SinglePortfolio.jsx'

// import alumni from '../assets/alumniData.json'
import portfolioData from '../assets/portfolioData.json'
import classnames from 'classnames'

class PortfolioGrid extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 'mentor',
      selectedFilter: 'All',
      button_active__eboard: '',
      button_active__mentor: 'button_active__eboard',
    }
  }

  createPortfolio = portfolio => {
    return (
      <SinglePortfolio
        portfolio={portfolio}
        key={portfolio.name + portfolio.link}
      />
    )
  }

  // createAlumni = portfolios => {
  //   return <Alumniportfolios portfolios={portfolios} key={portfolios.website + portfolios.name} />
  // }

  createPortfolios = portfolios => {
    // if (this.state.selected === "alumni") {
    // 	console.log("alumnifunction");
    // }
    const needle = this.state.selectedFilter.toLowerCase()

    const filtered = portfolios.filter(portfolio => {
      const haystack = portfolio.fieldTags.toLowerCase()

      return needle === 'all' || haystack.indexOf(needle) > -1
    })

    // if (this.state.selected === 'alumni') {
    //   return people.map(this.createAlumni)
    // }

    if (this.state.selected === 'mentor') {
      return filtered.map(this.createPortfolio)
    }
  }

  // setData = () => {
  //   this.setState({
  //     selected: 'alumni',
  //     button_active__eboard: 'button_active__eboard',
  //     button_active__mentor: '',
  //   })
  // }

  setMentor = () => {
    this.setState({
      selected: 'mentor',
      button_active__mentor: 'button_active__mentor',
      button_active__eboard: '',
    })
  }

  updateSelectedFilter = option => {
    this.setState({
      selectedFilter: option,
    })
  }

  render() {
    const filterOptions = [
      'All',
      'UI',
      'UX',
      'Motion',
      'Visual',
      'Illustration',
      'Prototyping',
      '3D',
      'Web Development',
    ]

    const currentData = portfolioData

    return (
      <div className="container">
        <div className="peoplesortingContainer">
          <div className="sortingContainer">
            <p className="peopleHeading">Filtering</p>
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
        <div className="eboard">
          <div className="eboard-people">
            {this.createPortfolios(currentData.portfolios)}
          </div>
        </div>
      </div>
    )
  }
}

export default PortfolioGrid
