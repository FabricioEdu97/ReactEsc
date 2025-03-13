import React, { useState } from 'react';
import Filho from './Filho';

const App = () => {
  const [formula, setFormula] = useState('');

  const Recebe = (valor) => {
    if (valor === '=') {
      try {
        setFormula(eval(formula).toString());
      } catch (error) {
        setFormula('Erro');
      }
    } else if (valor === 'C') {
      setFormula('');
    } else {
      setFormula(formula + valor);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <div style={{
        fontSize: '24px',
        marginBottom: '10px',
        padding: '10px',
        border: '2px solid #000',
        width: '220px',
        display: 'inline-block',
        backgroundColor: '#FFF',
        borderRadius: '10px'
      }}>
        {formula || '0'}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
        {['C', '+', '-', '/'].map(val => <Filho key={val} valor={val} cor="#FFA500" callback={Recebe} />)}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
        {['7', '8', '9', '*'].map(val => <Filho key={val} valor={val} cor={val === '*' ? '#FFA500' : '#DDD'} callback={Recebe} />)}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
        {['4', '5', '6', '='].map(val => <Filho key={val} valor={val} cor={val === '=' ? '#FFA500' : '#DDD'} callback={Recebe} />)}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
        {['1', '2', '3', '0'].map(val => <Filho key={val} valor={val} cor="#DDD" callback={Recebe} />)}
      </div>
    </div>
  );
};

export default App;
