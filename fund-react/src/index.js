import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Prim from './cmp/basicos/prim'
import ComPar from './cmp/basicos/ComPar';

ReactDOM.render(
<div>
  <Prim></Prim>
  <ComPar 
    titulo="Testando"
    subtitulo="novo teste"
    nota={15}
    />
  <ComPar 
    titulo="Testando2"
    subtitulo="novo teste3"
    nota={5}
    />
</div>,
  document.getElementById('root')
);
