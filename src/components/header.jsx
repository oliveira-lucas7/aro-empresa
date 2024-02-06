import React from 'react'
import Logo from './photos/Logo Aro.png'
import Style from './css/header.module.css'

function header() {
  return (
    <section className={Style.Navegar}>
        <div className={Style.Logo}>
            <a href="HREF"><img src={Logo} alt="É uma logo de uma empresa vendedora de induzidos para motor chamado ARO" ></img></a>
        </div>
        <div className={Style.Menu}>
            <header>
                <nav>
                    <ul>
                        <li><a href="Header">Produtos</a></li>
                        <li><a href="Header">Contato</a></li>
                        <li><a href="Header">Promoções</a></li>
                        <li><a href="Header">Sobre a empresa</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    </section>
  )
}

export default header