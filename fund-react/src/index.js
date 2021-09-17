import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Prim from './cmp/basicos/prim'
import ComPar from './cmp/basicos/ComPar';

ReactDOM.render(
<div>
  <Prim></Prim>
  <ComPar 
    titulo="Joao da Silva"
    subtitulo="Prova de peixada cearense"
    nota={15}
    />
  <ComPar 
    titulo="Maria de Souza"
    subtitulo="Prova de Galinha a cabidela"
    nota={5}
    />
</div>,
  document.getElementById('root')
);
