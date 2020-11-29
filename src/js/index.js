//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";
import "icons.js";

const Contador = props => {
	return (
		<div className="contadorTotal">
			<div className="relojIcon">
				<i class="far fa-clock" />
			</div>
			<div className="seis">0</div>
			<div className="cinco">0</div>
			<div className="cuatro">0</div>
			<div className="tres">0</div>
			<div className="dos">0</div>
			<div className="uno">0</div>
		</div>
	);
};

//render your react application
ReactDOM.render(<Contador />, document.querySelector("#app"));
