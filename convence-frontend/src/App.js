import Navbar from './pages/navbar';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home'; 
import Eventos from './pages/eventos'; 
import Ingresos from './pages/ingresos'; 
import Login from './pages/login'; 
import Register from './pages/register';


function App() {
  return (
      <div>
        <Navbar />
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/eventos" element={<Eventos />} />
         <Route path="/ingresos" element={<Ingresos />} />
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register/>}/>
      </Routes>
      </div>
  );
}

export default App;