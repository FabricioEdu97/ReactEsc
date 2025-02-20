import React from 'react'



const App = () =>
{
    var [valor, setValor] = React.useState(10) 

    var numero = 4
    numero = numero *8
   
    const Clique = () =>{
        numero = numero + 10
        setValor(valor + 1)
       
    }
    return(
    <div>
        <h1>AOBA</h1>
        <h2>O MUNDO É LINDO</h2>
        <h3> {numero} </h3>
        <input type= 'button'
            onClick={() => Clique()}
            value='clique'
            />
        <h3>{valor}</h3>
    </div>
    )
}

export default App