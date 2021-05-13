import './currentProjects.css';

import React, { useEffect } from 'react';
import CurrentProjects_body from '../../components/CurrentProjects/currentProjects_body';
import ProjectSlide from '../../components/CurrentProjects/projectSlide';
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/footer';

const CurrentProjects = () => {
	return(
		<React.Fragment>
			<div className="currentProjects-barriers">
				<Navbar />
				<CurrentProjects_body />
				<ProjectSlide />
				<Footer />
			</div>
		</React.Fragment>
	);
};

export default CurrentProjects;