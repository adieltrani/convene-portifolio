import React, { useState, useEffect } from 'react';

// 1. Mudamos para "Eventos" (com 'E' maiúsculo)
const Eventos = () => {
  // Criamos os estados para guardar os dados do banco
  const [listaEventos, setListaEventos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  // Faz a busca no seu servidor assim que a página carrega
  useEffect(() => {
    fetch('http://localhost:3000/consult')
      .then((resposta) => resposta.json())
      .then((dados) => {
        setListaEventos(dados); // Guarda os eventos recebidos do banco
        setCarregando(false);
      })
      .catch((erro) => {
        console.error("Erro ao buscar eventos:", erro);
        setCarregando(false);
      });
  }, []);

  return (
    <div>
      <h1>Essa é a pagina de eventos!</h1>
      <p>Encontre os melhores eventos e participe!</p>

      <hr />

      {/* Verifica se está carregando. Se sim, mostra a mensagem. Se não, mostra a lista */}
      {carregando ? (
        <p>Buscando os melhores eventos para você...</p>
      ) : (
        <div>
          {/* Se não vier nada do banco, avisa o usuário */}
          {listaEventos.length === 0 ? (
            <p>Nenhum evento encontrado no momento.</p>
          ) : (
            <div className='main'>
            <ul>
              {/* Faz o "map" para imprimir cada evento do banco na tela */}
              {listaEventos.map((evento) => (
                <div className='centro'>
                <li key={evento._id} style={{ marginBottom: '10px' }}>
                  {/* ATENÇÃO: Substitua "nomeDoEvento" e "data" pelas chaves reais do seu JSON */}
                  <strong>Nome:</strong> {evento.nome} <br />
                  <strong>Data:</strong> {evento.data} <br />
                  <strong>Descrição:</strong> {evento.descricao}
                </li>
                </div>
                
              ))}
            </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// Exportando também com 'E' maiúsculo
export default Eventos;