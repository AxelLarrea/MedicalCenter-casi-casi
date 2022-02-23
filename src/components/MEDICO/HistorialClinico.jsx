import React from 'react';
import './styles/HistorialClinico.css';
import { Link } from 'react-router-dom';

const HistoriaClinica = ({objHistorialClinico, tipoButton}) => {

    const {nombrePaciente} = objHistorialClinico;

    return ( 
            <div className="historialClinico-item">
                <h4>{nombrePaciente}</h4>
                <Link to="/detallePaciente">   
                    <button> {tipoButton} </button>
                </Link>
            </div>
    );
}
 
export default HistoriaClinica;