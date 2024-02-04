import React, { useState } from 'react'
import Style from './Formulario.module.css'
import emailjs from '@emailjs/browser'

function Formulario() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [checkUm, setCheckUm] = useState(false)
    const [checkDois, setCheckDois] = useState(false)

    function sendEmail(e){
        if(name === '' || email === '' || checkUm === false || checkDois === false){
            alert("Você não preencheu todos os campos")
            return;
        }

        e.preventDefault();

        const templateParams = {
            from_name: name,
            email: email
        }

        emailjs.send("service_7cz89cc", "template_wwiab99", templateParams, "6RLZ7eu8T4C1FFQBJ")
        .then((response) => {
            console.log("Email enviado com sucesso", response.status, response.text)
            setName('')
            setEmail('')
            setCheckUm(false)
            setCheckDois(false)
        }, (err) => {
            console.log("Erro", err)
        })

    }
    
  return (
    <form onSubmit={sendEmail} className={Style.Formulario}>
        <h2>Preencha este formuário e receba as promoções em seu email</h2>
        <div>
            <h3>Insira o seu nome</h3>
            <input type="text" 
            className={Style.text}
            placeholder='Preencha o seu nome neste campo'
            onChange={(e) => setName(e.target.value)}
            value={name}
            />
        </div>
        <div>
            <h3>Insira o seu email</h3>
            <input type="email" 
            className={Style.text}
            name="" 
            id="" 
            placeholder='Preencha o seu email neste campo' 
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            />
        </div>
        <div className={Style.checkUm}>
            <input type="checkbox" 
            name="" 
            id="" 
            onChange={(e) => setCheckUm(e.target.value)}
            value={checkUm}
            />
            <span>Eu aceito e concordo com receber mensagens em meu email</span>
        </div>
        <div className={Style.checkDois}>
            <input type="checkbox" 
            name="" 
            id="" 
            onChange={(e) => setCheckDois(e.target.value)}
            value={checkDois}
            />
            <span>Eu estou ciente de que posso receber email a qualquer momento</span>
        </div>
        <div>
            <input type="submit" value="Confirmar" className={Style.envio}/>
        </div>
    </form>
  )
}

export default Formulario