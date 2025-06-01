import { Link } from 'react-router-dom';

function Navbar(){
  return (
    <header className='navbar'>
      <div> <img src="/logo.png" alt="Katherine Johnson" className='logo-nav'/></div>
      <div className='menu'>
        <h3>Convence</h3>
        <nav className='item-menu'>
          <Link to="/"  className="nav-link"><b>Home</b></Link>
          <Link to="/eventos"  className="nav-link"><b>Eventos</b></Link>
          <Link to="/ingresos"  className="nav-link"><b>Ingresos</b></Link>
          <Link to="/login"  className="nav-link"><b>Login</b></Link>
        </nav>
      </div>
    </header>
  );
};


export default Navbar;