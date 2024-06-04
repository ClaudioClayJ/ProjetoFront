import { useState } from "react"
import Head from "../componentes/head"
import Menu from "../componentes/menu"
import '../../global.css'

export default function Cadastrousuario() {
    const [nome,setNome] = useState()
    const [email,setEmail] = useState()
    const [senha,setSenha] = useState()
    return (
        <div className="dashboard-container">
            <div className="menu">
                <Menu />
            </div>

            <div className="main">
                <Head />
                <form>
                    <input type="email" placeholder="Email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />

                    <input type="text" placeholder="Nome"
                     value={nome}
                     onChange={(e)=>setNome(e.target.value)}
                    />

                    <input type="password" placeholder="Senha"
                    value={senha}
                    onChange={(e)=>setSenha(e.target.value)}
                    />

                    <button>
                        Salvar
                    </button>
                </form>
            </div>
        </div>

    )
}