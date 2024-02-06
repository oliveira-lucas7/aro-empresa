import React, { useState } from 'react'
//import Style from './css/Formulario.module.css'
import Style from './css/TesteForm.module.css'
import emailjs from '@emailjs/browser'

function Formulario() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [checkUm, setCheckUm] = useState(false)
    const [checkDois, setCheckDois] = useState(false)

    function sendEmail(e){
        if(name === '' || email === '' || message === '' ||checkUm === false || checkDois === false){
            alert("Você não preencheu todos os campos")
            e.preventDefault();
            return;
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email
            //message: message;
        }

        emailjs.send("service_o350pca", "template_09snx83", templateParams, "6RLZ7eu8T4C1FFQBJ")
        .then((response) => {
            console.log("Email enviado com sucesso", response.status, response.text)
            setName('')
            setEmail('')
            setMessage('')
            setCheckUm(false)
            setCheckDois(false)
            e.preventDefault();
        }, (err) => {
            console.log("Erro", err)
        })
        e.preventDefault();

    }
    
  return (
    <form onSubmit={sendEmail} className={Style.Formulario}>
        <h2>Preencha este formuário e tire as suas dúvidas</h2>
        <div>
            <div className={Style.NomeMail}>
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
                    name="email" 
                    id="" 
                    placeholder='Preencha o seu email neste campo' 
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    />
                </div>
            </div>
            <div className={Style.duvida}>
                <h3>Tire sua dúvida</h3>
                <textarea className={Style.TextDuvida}
                maxLength={450}
                name="message" 
                id="" 
                placeholder='Escreva detalhadamente o seu problema ou a sua curiosidade'
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                >
                </textarea>
            </div>
            <div className={Style.checkUm}>
                <input type="checkbox" 
                name="checkUm" 
                id="" 
                onChange={(e) => setCheckUm(e.target.value)}
                value={checkUm}
                />
                <span>Eu aceito e concordo com receber mensagens em meu email</span>
            </div>
            <div className={Style.checkDois}>
                <input type="checkbox" 
                name="checkDois" 
                id="" 
                onChange={(e) => setCheckDois(e.target.value)}
                value={checkDois}
                />
                <span>Eu estou ciente de que posso receber email a qualquer momento</span>
            </div>
            <div>
                <input type="submit" value="Confirmar" className={Style.envio}/>
            </div>
        </div>
    </form>
  )
}

export default Formulario