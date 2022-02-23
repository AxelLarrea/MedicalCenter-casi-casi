import React from 'react';
import Detalles from './Detalles';

const objDetallePaciente = [
    {
        "especialidad": "falopa",
        "obraSocial": "OSDE",
        "id": 1
    },
    {
        "especialidad": "falopa",
        "obraSocial": "OSDE",
        "id": 2
    },
    {
        "especialidad": "falopa",
        "obraSocial": "OSDE",
        "id": 3
    },
    {
        "especialidad": "falopa",
        "obraSocial": "OSDE",
        "id": 4
    },
    {
        "especialidad": "falopa",
        "obraSocial": "OSDE",
        "id": 5
    },
    {
        "especialidad": "falopa",
        "obraSocial": "OSDE",
        "id": 6
    },
    {
        "especialidad": "falopa",
        "obraSocial": "OSDE",
        "id": 7
    },
    {
        "especialidad": "falopa",
        "obraSocial": "OSDE",
        "id": 8
    },
    {
        "especialidad": "falopa",
        "obraSocial": "OSDE",
        "id": 9
    },
    {
        "especialidad": "falopa",
        "obraSocial": "OSDE",
        "id": 10
    }
]

const GrillaMisTurnos = () => {
    return (  
        <div>
            {objDetallePaciente.map( (detalle) =>{
                return (
                    <Detalles
                        objDetallePaciente={detalle}
                        key={detalle.id}
                        tipoButton={"Cancelar turno"}/>
                );
            })}
        </div>
    );
}
 
export default GrillaMisTurnos;