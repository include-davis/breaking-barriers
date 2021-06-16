import './whoWeAre.css';

import React, { useEffect } from 'react';

const WhoWeAre = () =>{
	return(
		<React.Fragment>
			<div className="barriers-who-we-are">
				<h1>Who We Are</h1>
				<div className="first-frame">
					<img src="images/WhoWeAre.svg" class="dog"></img><br></br>
					<img src="images/circles/LPRectangle600.svg" class="wframe"></img><br></br>
				</div>
				<h2>We are a <strong>student-led organization</strong> at UC Davis seeking to build lasting relationships with older adults through various projects. The gap between older adults and the younger generations does not get any smaller as time goes on.</h2>
				<button class="learn-more" onclick="">learn more </button>
			</div>
			
		</React.Fragment>
	);
}

export default WhoWeAre; 