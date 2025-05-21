import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [senha, setsenha] = useState('');
    const [confirmsenha, setconfirmsenha] = useState('');
    const [email, setEmail] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSenhaChange = (event) => {
        setsenha(event.target.value);
    };

    const handleConfirmSenhaChange = (event) => {
        setconfirmsenha(event.target.value);
    };

    const navigate = useNavigate();
    const handleRedirect = () =>{
        
        navigate('/login');
    };

    const handleRedirectLogin = () =>{
        
        navigate('/login');
    };

    const handleLogin = async (event) => {
    event.preventDefault();

    let response;
    let data;


    try {
        if (email === '' || senha === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        } 
        if(!email.includes('@') || !email.includes('.')){
            alert('Email Inválido!');
            return;           
        }
        if (confirmsenha !== senha) {
            alert('As senhas não conferem');
            return;
        }  else {
            response = await fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, senha }),
            });    
        }

        data = await response.json();
        alert(data.mensagem)
        
        if(response.ok){
            handleRedirect();
        }
        else{
            return
        }
        
    } catch (error) {
        console.log('Erro de conexão com o servidor:', error);
    }
};


    return (
        <div className='main'>
            <div className='centro'>
                <h2>Registro</h2>
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
                <label htmlFor="confirmsenha">Confirmar Senha: </label>
                <input
                    type="password"
                    id="confirmsenha"
                    value={confirmsenha}
                    onChange={handleConfirmSenhaChange}
                />
                <div>
                    <button type="button" onClick={handleRedirectLogin}>Entrar</button>
                    <button type="button" onClick={handleLogin}>Registrar</button>
                </div>
            </div>
        </div>
    );
}

export default Register;