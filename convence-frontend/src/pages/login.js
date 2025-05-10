import React, { useState } from 'react';

function Login() {
    const [senha, setsenha] = useState('');
    const [email, setEmail] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSenhaChange = (event) => {
        setsenha(event.target.value);
    };

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/login', { // Use o endereço da sua API
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, senha }),
            });

            const data = await response.json();

            if (response.ok) {
                // Login bem-sucedido! Faça algo aqui, como redirecionar o usuário
                console.log('Login realizado com sucesso!', data);
            } else {
                // Houve um erro no login
                console.error('Erro ao fazer login:', data);
                // Exiba a mensagem de erro para o usuário
            }
        } catch (error) {
            console.error('Erro de conexão com o servidor:', error);
            // Exiba uma mensagem de erro genérica para o usuário
        }
    };

    const handleRegister = (event) => {
        event.preventDefault();
        console.log('Implementar lógica de registro...');
        // Aqui você implementaria a lógica para enviar os dados de registro
        // para uma rota de registro na sua API (ex: /register com método POST)
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
                <label htmlFor="senha">Senha: </label>
                <input
                    type="password"
                    id="senha"
                    value={senha}
                    onChange={handleSenhaChange}
                />
                <div>
                    <button type="button" onClick={handleLogin}>Entrar</button> {/* Alterado para button */}
                    <button type="button" onClick={handleRegister}>Registrar</button> {/* Alterado para button */}
                </div>
            </div>
        </div>
    );
}

export default Login;