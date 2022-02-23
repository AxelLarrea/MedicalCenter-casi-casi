import React from 'react';
import './styles/NavHistClin.css';

import { Link } from "react-router-dom";

const NavHistClin = () => {
    return ( 
        <div className="container-nav">
            <div className="button-atras">
                <Link to="/homeMedico">
                    <button><i class="fas fa-chevron-left"></i> Historial Clínico</button>
                </Link>
            </div>

            <form className="nav-busqueda">
                <input type="text" placeholder="Búsque un paciente" />
                <button className="btn-lupa" >
                    <i className="fas fa-search"></i>
                </button>
            </form>
        </div>
    );
}
 
export default NavHistClin;