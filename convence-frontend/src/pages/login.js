import { useState } from 'react';


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

    let response;
    let data;

    try {
        if (email === '' || senha === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        } else {
            response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, senha }),
            });

            data = await response.json();

            if (response.ok) {
                console.log('Login realizado com sucesso!', data);
            } else {
                console.error('Erro ao fazer login:', data);
            }
        }
    } catch (error) {
        console.error('Erro de conexão com o servidor:', error);
    }
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
                    <button type="button" onClick={handleLogin}>Entrar</button>
                </div>
            </div>
        </div>
    );
}

export default Login;