import React, {useState} from 'react';
import './styles/NavDetallePaciente.css';

import { Link } from "react-router-dom";

import BusquedaAgregar from './BusquedaAgregar';

const NavDetallePaciente = () => {


    return (
        <>
            <div className="container-nav">
                <div className="button-atras">
                    <Link to="/historialClinico">
                        <button><i class="fas fa-chevron-left"></i> Detalle del paciente</button>
                    </Link>
                </div>
                <div className="container-busqAgre">
                    <BusquedaAgregar />
                </div>
            </div>
        </>
    );
}
 
export default NavDetallePaciente;