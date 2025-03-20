import React from 'react'
import ReactDOM from 'react-dom/client'



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Texto/>
    </React.StrictMode>
)


function Texto(){

  var[valor, setValor] = React.useState()
  
  function mudarValor(e) {
   
    setValor(e.target.value)
  }

      return(
      <div>
        <input type="text"
          onChange = {(e)=> mudarValor(e)}
        />
        <span>{ valor} </span>
        <hr/>
      </div>
  )
}
