import React from 'react';
import './styles/TurnosMedico.css';

const misTurnos = ({objMisTurnosMedico, tipoButton}) => {

    const {nombreMédico, especialidad, obraSocial} = objMisTurnosMedico;

    return ( 
            <div className="misTurnos-item">
                <h4>{nombreMédico} / {especialidad} / {obraSocial}</h4>
                <button> {tipoButton} </button>
            </div>
    );
}
 
export default misTurnos;