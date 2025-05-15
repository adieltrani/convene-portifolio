import { Link } from 'react-router-dom';

function Navbar(){
  return (
    <header className='navbar'>
      <div className='menu'>
        <h3>Convence</h3>
        <nav className='item-menu'>
          <Link to="/"><b>Home</b></Link>
          <Link to="/eventos"><b>Eventos</b></Link>
          <Link to="/ingresos"><b>Ingresos</b></Link>
          <Link to="/login"><b>Login</b></Link>
        </nav>
      </div>
    </header>
  );
};


export default Navbar;