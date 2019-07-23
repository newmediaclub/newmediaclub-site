import React from 'react';

import StoreItem from './Members/StoreItem.jsx';
import storeData from '../assets/storeData.json';




class StoreItems extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedFilter: "All",
		}
		this.filterOptions=["All"];
	}

	createResource = (Resources) => {
		return <StoreItem key={Resources.title} date={Resources.date} title={Resources.title} link={Resources.link} image={Resources.image} />;
	};

	createResources = (resources) => {
		const grouped = {};

		for (const resource of resources) {
			const categoryResource = grouped[resource.category];

			let newList;
			if(categoryResource) {
				newList = categoryResource.concat([resource]);
			} else {
				newList = [resource];
			}

			grouped[resource.category] = newList;
		}

		return Object.keys(grouped).map((category) => {
			return this.createCategory(category, grouped[category])
		});
	};

	updateSelectedFilter = (option) => {
		this.setState({
			selectedFilter: option,
		})
	};

	createCategory = (categoryName, resources) => {
		{
			if (categoryName === this.state.selectedFilter){
				return (
					<div className="resourceTitleRow">
						<p className="pageHeading">{categoryName}</p>
						<div className="resourceRow">
							{
								resources.map(this.createResource)
							}
						</div>
					</div>
				)
			}else if("All" == this.state.selectedFilter) {
				return(
					<div className="resourceTitleRow">
						<p className="pageHeading">{categoryName}</p>
						<div className="resourceRow">
							{
								resources.map(this.createResource)
							}
						</div>
					</div>
				)
			}

		}

	}

	render() {

		const filterOptions = ['All', 'NMC', 'Inspiration', 'Typography', 'Prototyping', 'Web Development', 'User Experience'];

		return (
			<div className="resourcesWholeContainer">
				<div className="resourceContainer">
					{this.createResources(storeData.Resources)}
				</div>
			</div>
		);
	}
}

export default StoreItems;
