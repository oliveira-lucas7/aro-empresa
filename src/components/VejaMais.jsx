import React from "react";
//import Carro from "./photos/Carro.png";
import Style from "./css/VejaMais.module.css";
import NovaLogo from "./photos/Nova Logo.png";

function VejaMais() {
	return (
		<section className={Style.geral}>
			<div className={Style.texto}>
				<h1>
					Induzidos de Qualidade: Transformando Energia em Movimento,
					Potencializando Seu Mundo!
				</h1>
				<button className={Style.vermais}>Veja Mais</button>
			</div>
			<div className={Style.fundo}>
				<img src={NovaLogo} alt="Uma pessoa ao lado do seu carro" />
			</div>
		</section>
	);
}

export default VejaMais;
