import { useState } from "react"
import React from "react";
import '../../global.css'
import logo from '../../assets/img/logolapis.jpg'
import { useNavigate } from 'react-router-dom'


export default function Logon() {
    const [email,setEmail] = useState()
    const [senha,setSenha] = useState()
    const navigate = useNavigate();
    const logar = (e) => {
        e.preventDefault()
        navigate('/dashboard')
    }
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logo} width={200} />
                <form onSubmit={logar}>
                    <input
                        placeholder="E-mail"
                        type="email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />

                    <input
                        placeholder="Senha"
                        type="password"
                        value={senha}
                        onChange={(e)=>setSenha(e.target.value)}
                    />
                    <button className="button-logon" type="submit">
                        Entrar
                    </button>
                   
                </form>
            </section>
        </div>
    )
}