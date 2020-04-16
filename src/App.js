import React from 'react';
import {Provider} from 'react-redux';
import Jugadores from './Components/Jugadores.jsx';
import EquipoSeleccionado from './Components/EquipoSeleccionado.jsx';

import store from './store';


const  App = () =>{
  return (
    <Provider store={store}>
      <main>
      
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <p className="navbar-brand">Aplicacion Seleccion de Equipo</p>
        </nav>
        <Jugadores/>
        <EquipoSeleccionado/>
      </main>
    </Provider>
  );
}

export default App;
