import React from 'react';

const Filho = ({ cep, setCep, endereco, bairro, cidade, estado, buscarCEP }) => {
  return (
    <div>
      <h2>Consulta de Endereço</h2>
      
      <label>CEP:</label>
      <input type="text" value={cep} onChange={(e) => setCep(e.target.value)} onBlur={buscarCEP} />
      <br />

      <label>Endereço:</label>
      <input type="text" value={endereco} readOnly />
      <br />

      <label>Bairro:</label>
      <input type="text" value={bairro} readOnly />
      <br />

      <label>Cidade:</label>
      <input type="text" value={cidade} readOnly />
      <br />

      <label>Estado:</label>
      <input type="text" value={estado} readOnly />
    </div>
  );
};

export default Filho;
