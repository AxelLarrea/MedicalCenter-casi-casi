import React from 'react';
import './styles/MenuBars.css';

import { Link } from 'react-router-dom';

const MenuBars = () => {
    return (  
        <div className="container-menu">
            <Link to="/">
                <button>Inicio</button>
            </Link>
            <Link to="/solicitarTurno">
                <button>Solicitar turno</button>
            </Link>
            <Link to="/misTurnos">
                <button>Mis turnos</button>
            </Link>
        </div>
    );
}
 
export default MenuBars;