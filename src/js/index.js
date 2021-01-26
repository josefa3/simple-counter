//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

window.on = true;
function Contador(props) {
	return (
		<div className="contadorTotal">
			<div className="relojIcon">
				<i className="far fa-clock" />
			</div>
			<div className="hora">
				{props.hora.toString().length > 1
					? props.hora
					: `0${props.hora}`}
			</div>
			<div className="minuto">
				{props.minuto.toString().length > 1
					? props.minuto
					: `0${props.minuto}`}
			</div>
			<div className="segundo">
				{props.segundo.toString().length > 1
					? props.segundo
					: `0${props.segundo}`}
			</div>
			<button
				type="button"
				className="btn btn-primary"
				onClick={() => {
					window.on = !window.on;
				}}>
				{props.buttonLabelPararRei}
			</button>
		</div>
	);
}
Contador.propTypes = {
	hora: PropTypes.number,
	minuto: PropTypes.number,
	segundo: PropTypes.number,
	buttonLabelPararRei: PropTypes.string
	// buttonLabelComenzar: PropTypes.string
};
//render your react application
let timer = 0;
setInterval(function() {
	let segundos = 0;
	let minutos = 0;
	let horas = 0;
	let total = timer;
	horas = Math.floor(total / 3600);
	total = total % 3600;
	minutos = Math.floor(total / 60);
	segundos = total % 60;
	window.on && timer++;

	ReactDOM.render(
		<Contador
			segundo={segundos}
			minuto={minutos}
			hora={horas}
			buttonLabelPararRei="Parar/ Iniciar"
			// buttonLabelComenzar="Reiniciar"
		/>,
		document.querySelector("#app")
	);
}, 1000);
