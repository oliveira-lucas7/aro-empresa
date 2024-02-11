import React from "react";
//import Carro from "./photos/Carro.png";
import Style from "./css/VejaMais.module.css";
import NovaLogo from "./photos/Nova Logo.png";

function VejaMais() {
	const scrollToSection = (id) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section className={Style.geral} id="veja">
			<div className={Style.texto}>
				<h1>
					Induzidos de Qualidade: Transformando Energia em Movimento,
					Potencializando Seu Mundo!
				</h1>
				<button
					className={Style.vermais}
					onClick={() => scrollToSection("empresa")}
					data-id="empresa">
					Veja Mais
				</button>
			</div>
			<div className={Style.fundo}>
				<img src={NovaLogo} alt="Uma pessoa ao lado do seu carro" />
			</div>
		</section>
	);
}

export default VejaMais;
