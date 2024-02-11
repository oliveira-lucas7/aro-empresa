import React from "react";
import Style from "./css/Avisar.module.css";

function Aviso() {
	const scrollToSection = (id) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<div className={Style.container}>
			<h2>Fale com os nossos profissionais</h2>
			<button
				className={Style.seravisado}
				onClick={() => scrollToSection("contato")}
				data-id="contato">
				Tirar dúvida
			</button>
		</div>
		//<div><p>Preencha o formulário abaixo e seja avisado das promoções</p></div>
	);
}

export default Aviso;
