import React from 'react';
import './styles/NavMisTurnos.css';

import { Link } from "react-router-dom";

const NavHistClin = () => {
    return ( 
        <div className="container-nav">
            <div className="button-atras">
                <Link to="/homeMedico">
                    <button><i class="fas fa-chevron-left"></i> Mis turnos</button>
                </Link>
            </div>
        </div>
    );
}
 
export default NavHistClin;