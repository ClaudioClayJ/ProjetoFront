import {Link} from 'react-router-dom'
import {FiTag,FiTruck,FiShoppingCart,FiGrid, FiUser, FiHome} from "react-icons/fi";

export default function Menu(){
    return(
    <div>
        <nav>
            <h1>Menu</h1>
             <Link to="/listadashboard" className='link'><FiHome className='icons-menu'size={18}/> Home</Link>

             <Link to="/listausuario" className='link'><FiUser className='icons-menu'size={18}/> Usuário </Link>
               
             <Link to="/listaproduto" className='link'><FiTag className='icons-menu'size={18}/> Produto </Link> 

             <Link to="/listaentrada" className='link'><FiShoppingCart className='icons-menu'size={18}/> Entrada </Link>   

             <Link to="/listaestoque" className='link'><FiGrid className='icons-menu'size={18}/> Estoque </Link>

             <Link to="/listasaida" className='link'><FiTruck className='icons-menu'size={18}/> Saída </Link>   
               
        </nav>
    </div>
    )
}