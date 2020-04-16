import React from 'react';
import {connect} from 'react-redux';//Nos conectamos al store

const Suplentes = ({suplentes,quitarSuplente}) =>{
    return(
        <div className="container mt-3">
        <div className="row">
            <div className="col-12">
                <h2>Suplentes</h2>
            </div>
            {
                suplentes.map(jugador=>{
                    return(
                        <div className="col-6 col-md-4 col-lg-3" key={jugador._id}>
                            <div className="card">
                                <img height={200} className="card-img-top" src={jugador.foto} alt={jugador.nombre}/>
                                <div className="card-body">
                                    <h5 className="card-title">{jugador.nombre}</h5>
                                    <p className="card-text">{jugador.descripcion}</p>
                                </div>
                                <div className="card-body d-flex justify-content-between">
                                    <button className="btn btn-danger" onClick={()=>{quitarSuplente(jugador)}}>X</button>
                                </div>    
                            </div>
                        </div>
                    );
                })
            }
        </div>
    </div>
    );
}
const stateToProps = state =>{
    return({
        suplentes: state.suplentes
    });
}
const dispatchToProps = dispatch =>{
    return ({
        quitarSuplente(jugador){
            dispatch({
                type:"QUITAR_SUPLENTE",
                jugador
            })
        }
    });
}
export default  connect(stateToProps,dispatchToProps)(Suplentes);