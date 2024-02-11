import React from "react";
import Logo from "./photos/Logo Aro.png";
import Style from "./css/header.module.css";

function Header() {
	const scrollToSection = (id) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section className={Style.Navegar}>
			<div className={Style.Logo}>
				{/* Substitua a tag 'a' por 'div' se não for uma âncora válida */}
				<a href="HREF">
					<img
						src={Logo}
						alt="É uma logo de uma empresa vendedora de induzidos para motor chamado ARO"></img>
				</a>
			</div>
			<div className={Style.Menu}>
				<header>
					<nav>
						<ul>
							<li>
								{/* Adicione o ID da seção como valor do atributo 'data-id' */}
								<button
									className={Style.ButtonHeader}
									onClick={() => scrollToSection("produtos")}
									data-id="produtos">
									Produto
								</button>
							</li>
							<li>
								<button
									className={Style.ButtonHeader}
									onClick={() => scrollToSection("contato")}
									data-id="contato">
									Contato
								</button>
							</li>
							<li>
								<button
									className={Style.ButtonHeader}
									onClick={() => scrollToSection("empresa")}
									data-id="empresa">
									Sobre a Empresa
								</button>
							</li>
						</ul>
					</nav>
				</header>
			</div>
		</section>
	);
}

export default Header;
