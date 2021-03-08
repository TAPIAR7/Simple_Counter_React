import React from "react";
import PropTypes from "prop-types";

function SecondsCounter(props) {
	return <div></div>;
}
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home(props) {
	return (
		<div className="text-center mt-5 bg-dark">
			<h1 className="text-white">
				<i className="far fa-clock"></i> {props.seconds}
			</h1>
			{/* <p>
				<img src={rigoImage} />
			</p> */}
			{/* <a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p> */}
		</div>
	);
}

Home.propTypes = {
	seconds: PropTypes.string
};
