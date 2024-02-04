import React from 'react'
import Carro from './photos/Carro.png'
import Style from './VejaMais.module.css'

function VejaMais() {
  return (
    <section className={Style.geral}>
        <div className={Style.texto}>
            <h1>Induzidos de Qualidade: Transformando Energia em Movimento, Potencializando Seu Mundo!</h1>
            <button className={Style.vermais}>Veja Mais</button>
        </div>
        <div className={Style.fundo}>
            <img src={Carro} alt="Uma pessoa ao lado do seu carro" />
        </div>
    </section>
  )
}

export default VejaMais