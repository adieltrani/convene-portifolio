import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Certifique-se que o caminho para o seu App.js está correto
import { BrowserRouter } from 'react-router-dom';
import './index.css'; // Se você tiver um arquivo de CSS global

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
