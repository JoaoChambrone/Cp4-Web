import {} from 'react'
import { NavLink } from 'react-router-dom'

function Nav(){
  return(
    <>
    <header className="header">
      <ul>
        <li><NavLink to="/" className="nav-link">HOME</NavLink></li>
        <li><NavLink to="/Produtos" className="nav-link">PRODUTOS</NavLink></li>
        <li><NavLink to="/Sobre" className="nav-link">SOBRE</NavLink></li>
      </ul>
      <h1 className="title">MINHA LOJA</h1>
    </header>
    </>
  )
}
export default Nav