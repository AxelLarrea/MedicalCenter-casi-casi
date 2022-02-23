import React from 'react';
import './styles/Detalles.css';

const Detalles = ({objDetallePaciente, tipoButton}) => {

    const {especialidad, obraSocial} = objDetallePaciente;

    return ( 
            <div className="detalle-item">
                <h4> {especialidad} / {obraSocial}</h4>
                <button> {tipoButton} </button>
            </div>
    );
}
 
export default Detalles;