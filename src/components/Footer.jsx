import React from "react";
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import Style from "./css/Footer.module.css";

function Footer() {
	return (
		<section className={Style.FtGeral}>
			<div className={Style.IconesGeral}>
				<div>
					<a
						target="blank"
						href="https://www.instagram.com/lucas_rodrigoo9?igsh=MTdzcTczenI1Zmgycg%3D%3D&utm_source=qr">
						<FaInstagram className={Style.Instagram} />
					</a>
				</div>
				<div>
					<a target="blank" href="https://wa.me/5514997791223">
						<FaWhatsapp className={Style.Whats} />
					</a>
				</div>
				<div>
					<a target="blank" href="mailto:lucasrodrigoclash038@gmail.com">
						<FaEnvelope className={Style.Mail} />
					</a>
				</div>
			</div>
			<div className={Style.Finalizando}>
				<span className={Style.Direitos}>
					© Direitos autorais resevados para a Empresa A.R.O Induzidos
				</span>
				<span className={Style.Desenvolvimento}>
					⚠ Site feito por Lucas Rodrigo de Oliveira
				</span>
			</div>
		</section>
	);
}

export default Footer;
