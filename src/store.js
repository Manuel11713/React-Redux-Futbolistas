import {createStore} from 'redux';

let initialState = {
    jugadores:[{
        _id:0,
        nombre:'Jonathan Javier Rodríguez',
        foto:'https://tmssl.akamaized.net//images/portrait/header/280795-1446727266.jpg?lm=1446727306',
        descripcion:'Jugador del Cruz Azul'
    },{
        _id:1,
        nombre:'Ángel Israel Mena Delgado',
        foto:'https://static.mediotiempo.com/bs/mt/sports/production/soccer/players/f88d0b9c-8ed9-4b73-8500-7ee8256f0f7b.jpg',
        descripcion:'Jugador del Cruz Azul'
    },{
        _id:2,
        nombre:'André Pierre Gignac',
        foto:'https://www.pasionfutbol.com/__export/1508715658302/sites/pasionlibertadores/img/2017/10/22/1300gign.jpg_1345759582.jpg',
        descripcion:'Jugador del Tigres'
    }],
    titulares:[],
    suplentes:[]
}



//funcion reductora para hacer los cambios
const reducerEntrenador = (state=initialState,action)=>{//estado actual y que cambio en el estado
    console.log(action)
    if(action.type === "AGREGAR_TITULAR"){
        return{
            ...state,
            titulares: state.titulares.concat(action.jugador),
            jugadores: state.jugadores.filter(jugador=>jugador._id !== action.jugador._id )
        }
    }
    if(action.type === "AGREGAR_SUPLENTE"){
        return{
            ...state,
            suplentes: state.suplentes.concat(action.jugador),
            jugadores: state.jugadores.filter(jugador=>jugador._id !== action.jugador._id )
        }
    }
    if(action.type==='QUITAR_TITULAR'){
        return{
            ...state,
            titulares: state.titulares.filter(jugador=> jugador._id !== action.jugador._id),
            jugadores: state.jugadores.concat(action.jugador) 
        };
    }
    if(action.type==='QUITAR_SUPLENTE'){
        return{
            ...state,
            suplentes: state.suplentes.filter(jugador=> jugador._id !== action.jugador._id),
            jugadores: state.jugadores.concat(action.jugador) 
        };
    }

    return state;
}


export default createStore(reducerEntrenador);