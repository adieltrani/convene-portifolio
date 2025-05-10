import React from 'react';
import { useState } from 'react';

function Login() {

  const [senha, setsenha] = useState(''); //
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSenhaChange = (event) => {
    setsenha(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log('E-mail:', email, 'Senha:', senha);
  };

  return (
    <div className='main'>
      <div className='centro'>
        <h2>Login</h2>
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
        <label htmlFor="email">Senha: </label>
        <input
          type="password"
          id="senha"
          value={senha}
          onChange={handleSenhaChange}
        />
        <div>
          <button type="submit" onClick={handleSubmit}>Entrar</button> 
          <button type="submit" onClick={handleSubmit}>Registrar</button>
        </div>
        
      </div>
      {/* Outros campos e botão de login */}
    </div>
  );
}

export default Login