import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import Title from './components/Title';
import Cuerpo from './styles/Cuerpo';
// import Buscar from './components/Buscar';
import Pokedex from './components/Pokedex';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Jsx = () => {
  // const [busqueda,setBusqueda] = useState("");

  return (
    <Cuerpo>
      <Title/>
      <Pokedex/>
    </Cuerpo>
  );
};

root.render(<Jsx/>);