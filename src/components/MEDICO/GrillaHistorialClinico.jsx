import React from 'react';
import HistorialClinico from './HistorialClinico';

const objHistorialClinico = [
    {
        "nombrePaciente":"Felipe"
    },
    {
        "nombrePaciente":"Ricardo"
    },
    {
        "nombrePaciente":"José"
    },
    {
        "nombrePaciente":"Juan"
    },
    {
        "nombrePaciente":"Pepe"
    },
    {
        "nombrePaciente":"Cristian"
    },
    {
        "nombrePaciente":"Foche"
    },
    {
        "nombrePaciente":"Chili"
    },
    {
        "nombrePaciente":"Foche"
    },
    {
        "nombrePaciente":"Foche"
    }
]

const GrillaHistorialClinico = () => {
    return (  
        <div>
            {objHistorialClinico.map( (historialClinico) =>{
                return (
                    <HistorialClinico
                        objHistorialClinico={historialClinico}
                        key={historialClinico.id}
                        tipoButton={"Ver detalles"}/>
                );
            })}
        </div>
    );
}
 
export default GrillaHistorialClinico;