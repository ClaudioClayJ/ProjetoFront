import React from "react";
import '../../global.css'
import Logo from '../../assets/img/logolapis.jpg'

export default function Logon(){
    return(
<div className="logon-container">
    <section className="form">
        <img src={Logo} width={350}/>
            <form>
                <input placeholder="E-mail" 
                type="email">
                </input>

                <input placeholder="Senha" 
                type="password">
                </input>

                <buttom  className="button-logon" type="submit">
                        Entrar
                </buttom>
            </form>
    </section>
</div>
    )
}