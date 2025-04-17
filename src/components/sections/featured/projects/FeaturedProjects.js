import React from 'react';
import './FeaturedProjects.css';

import { useGateway } from '../../../../context/GatewayContext';

import ProjectCard from '../../../common/card/project/ProjectCard';

const FeaturedProjects = () => {
	const { featuredProjects } = useGateway();

	return (
		<section className="featured-projects">
		<div className="featured-content">
			<div className="featured-title">
				Our <b>leading</b> projects
			</div>
			<p className="featured-subheading">
				Real-world applications of our cutting-edge digital twin projects.
			</p>
			<div className="project-grid">
				{featuredProjects.map((project, idx) => (
					<ProjectCard 
						key={idx} 
						project={project} 
					/>
				))}
			</div>
		</div>
		</section>
	);
};

export default FeaturedProjects;