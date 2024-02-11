import React from "react";
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import Style from "./css/Footer.module.css";

function Footer() {
	return (
		<section className={Style.FtGeral}>
			<div className={Style.IconesGeral}>
				<div>
					<a href="">
						<FaInstagram className={Style.Instagram} />
						<h3>lucas_rodrigoo9</h3>
					</a>
				</div>
				<div>
					<a href="">
						<FaWhatsapp className={Style.Whats} />
						<h3>Lucas Oliveira</h3>
					</a>
				</div>
				<div>
					<a href="">
						<FaEnvelope className={Style.Mail} />
						<h3>lucasrodrigoclash038@gmail.com</h3>
					</a>
				</div>
			</div>
		</section>
	);
}

export default Footer;
