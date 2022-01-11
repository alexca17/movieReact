import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';

//const contenido = <div>
//  <h1>Titulo en React</h1>
//  <div>Texto Renderizado desde React</div>
//</div>;

//funciones en React
//function Componente({ titulo, children }){
//
//  return( <div>
//  <h1>{titulo}</h1>
//  <div>{children}</div>
//</div>);
//}

ReactDOM.render(<App />,
document.getElementById('root'));