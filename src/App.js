import React, {useState} from 'react';
import Routes from './routes';

// int

function App() {

  // const [nome, setNome]=useState()

  // const armazenar=(chave, valor)=>{
  //   localStorage.setItem(chave, valor)
  // }

  return (
    <Routes />

    // <>
    //   <label>teste</label>
    //   <input type="text" value={nome} onChange={(e)=>setNome(e.target.value)}/>
    //   <button onClick={()=>armazenar('ls_nome',nome)}>gravar nome</button>
    // </>
  );
}

export default App;