import React, { useState } from 'react';
import Filho from './component/Filho';

const App = () => {
  const [valor, setValor] = useState('');
  const [cor, setCor] = useState('green'); 

  return (
    <div style={{ backgroundColor: cor }}>
      <input 
        type="text" 
        onChange={(e) => setValor(e.target.value)} 
      />
      <input 
        type="text" 
        onChange={(e) => setCor(e.target.value)} 
      />
      <Filho texto={valor} />
    </div>
  );
}

const Teste = () => {
  return (
    <Filho />
  );
}

export default App;
