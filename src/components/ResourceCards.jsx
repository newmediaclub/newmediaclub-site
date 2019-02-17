import React from 'react';

import ResourceCard from './Members/ResourceCard.jsx';
import resourceData from '../assets/resourceData.json';

import classnames from 'classnames';


class ResourceCards extends React.Component {
	constructor(props) {
		super(props);

	}

	createResource = (Resources) => {
		return <ResourceCard key={Resources.title} date={Resources.date} title={Resources.title} link={Resources.link} image={Resources.image} />;
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

	createCategory = (categoryName, resources) => {
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
	}

	render() {
		return (
			<div className="resourcesWholeContainer">
				<div className="resourceContainer">{this.createResources(resourceData.Resources)}</div>
			</div>
		);
	}
}

export default ResourceCards;
