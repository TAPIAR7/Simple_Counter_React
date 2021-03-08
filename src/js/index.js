//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

function stringZeros(value) {
	let amountZeros = 5;
	let zerosTrail = "0";
	if (value.length <= amountZeros) {
		for (let index = 1; index < amountZeros - value.length; index++) {
			zerosTrail = zerosTrail + "0";
		}
	} else {
		zerosTrail = "";
	}
	console.log(amountZeros);
	return zerosTrail;
}
//render your react application
let secondsNew = 0;
function updateCounter() {
	ReactDOM.render(
		<Home
			seconds={stringZeros(secondsNew.toString()) + secondsNew.toString()}
		/>,
		document.querySelector("#app")
	);
	secondsNew += 1;
	console.log(secondsNew);
}
setInterval(updateCounter, 1000);
