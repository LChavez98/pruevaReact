import React from "react";
import './styles.css';

const Header = ({logo,menuItem})=>{
    return(
            <header className="header">
                <a href="/" className="logo">{logo}</a>
                <input type="checkbox" className="side-menu" id="side-menu" />
                <label className="hamb" htmlFor="side-menu">
                    <span className="hamb-line"></span>
                </label>
                <nav className="nav">
                    <ul className="menu">
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Productos</a></li>
                        <li><a href="#">Contacto/Pedidos</a></li>
                    </ul>
                </nav>
            </header>
        )
}
export default Header;