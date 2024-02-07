import React from "react";
import Style from "./css/Empresa.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Empresa() {
  return (
    <section className={Style.GeralEmpresa}>
      <h2 className={Style.SobreEmpresa}>Sobre a empresa</h2>
      <div className={Style.SobEmpresa}>
        <div className={Style.ContainerInfo}>
          <div>
            <FontAwesomeIcon icon={faBook} className={Style.Icones} />
            <h3 className={Style.TituloInfo}>Oque é</h3>
          </div>
          <div>
            <p>
              A A.R.O é uma microempresa que surgiu no ano de 2009, cujo o nosso
              foco é a venda de induzidos, atendendo o máximo possível de
              clientes com excelência
            </p>
          </div>
        </div>
        <div className={Style.ContainerInfo}>
          <div>
            <FontAwesomeIcon icon={faKey} className={Style.Icones} />
            <h3 className={Style.TituloInfo}>Segurança</h3>
          </div>
          <div>
            <p>
              Temos a garantia de que nossos produtos são de extrema qualidade e
              segurança, assegurando que os nossos fornecedores estão alinhados
              com a nossa ética
            </p>
          </div>
        </div>
        <div className={Style.ContainerInfo}>
          <div>
            <FontAwesomeIcon icon={faUser} className={Style.Icones} />
            <h3 className={Style.TituloInfo}>Atendimento</h3>
          </div>
          <div>
            <p>
              Temos como objetivo atender e auxiliar todos os nossos cliente da
              forma mais rápida possível, garantindo que não haja dúvidas
              naqueles que nos acompanham
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Empresa;
