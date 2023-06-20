import React from 'react';
import './styles.css';

function Header({allProducts}) {
    const [isNavActive, setIsNavActive] = React.useState(false);
    
  const handleHamburgerClick = () => {
    setIsNavActive(!isNavActive);
  };
  const contador = allProducts.length;
  return (
    <header>
      <div className="header-left">
        <h1 className="lago__ilumniado">
          <a href="/"><span>L |</span><span>C</span></a>
        </h1>
        <nav className={isNavActive ? 'active' : ''}>
          <ul>
            <li>
              <a href="" className="active">Inicio</a>
            </li>
            <li>
              <a href="">Productos</a>
            </li>
            <li>
              <a href="">Contacto/Pedidos</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header-right">
        <div className="login-signup">
          <a href=""><span className='contador'>{contador}</span><i className="bi bi-cart4"></i></a>
        </div>
        <div className={`hamburger ${isNavActive ? 'active' : ''}`} onClick={handleHamburgerClick}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </header>
  );
}

export default Header;







