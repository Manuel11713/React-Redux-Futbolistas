import React from 'react';
import {connect} from 'react-redux';//Nos conectamos al store

const Jugadores = ({jugadores,agregarTitular,agregarSuplente}) =>{
    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-12">
                    <h2>Jugadores Disponibles</h2>
                </div>
                {
                    jugadores.map(jugador=>{
                        return(
                            <div className="col-6 col-md-4 col-lg-3" key={jugador._id}>
                                <div className="card">
                                    <img height={200} className="card-img-top" src={jugador.foto} alt={jugador.nombre}/>
                                    <div className="card-body">
                                        <h5 className="card-title">{jugador.nombre}</h5>
                                        <p className="card-text">{jugador.descripcion}</p>
                                    </div>
                                    <div className="card-body d-flex justify-content-between">
                                        <button className="btn btn-success btn-sm" onClick={()=>{agregarTitular(jugador)}}>Titular</button>
                                        <button className="btn btn-primary btn-sm" onClick={()=>{agregarSuplente(jugador)}}>Suplente</button>
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
const mapStateToProps = state =>{
    return({
        jugadores: state.jugadores
    });
}
const mapDispatchToProps = dispatch =>{
    return ({
        agregarTitular(jugador){
            dispatch({
               type:'AGREGAR_TITULAR',
               jugador
            })
        },
        agregarSuplente(jugador){
            dispatch({
                type:'AGREGAR_SUPLENTE',
                jugador
            })
        }
    });
}
export default connect(mapStateToProps,mapDispatchToProps)(Jugadores);