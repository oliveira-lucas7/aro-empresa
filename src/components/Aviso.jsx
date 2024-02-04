import React from 'react'
import Style from './Aviso.module.css'

function aviso() {
  return (
    <div className={Style.container}><button className={Style.seravisado}>Ser avisado das promoções</button></div>
    //<div><p>Preencha o formulário abaixo e seja avisado das promoções</p></div>
  )
}

export default aviso