import React, { useState } from 'react';
import axios from 'axios';
import Filho from './Filho';

const App = () => {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');

  // Função para buscar o CEP
  const buscarCEP = async () => {
    if (cep.length !== 8) return;

    try {
      const response = await axios.get(`http://viacep.com.br/ws/${cep}/json/`);
      setEndereco(response.data.logradouro);
      setBairro(response.data.bairro);
      setCidade(response.data.localidade);
      setEstado(response.data.uf);
    } catch (error) {
      alert("Erro ao buscar o CEP!");
    }
  };

  return (
    <div>
      <Filho
        cep={cep}
        setCep={setCep}
        endereco={endereco}
        bairro={bairro}
        cidade={cidade}
        estado={estado}
        buscarCEP={buscarCEP}
      />
    </div>
  );
};

export default App;
