import React, { useState } from 'react';
import SelectProfesional from './SelectProfesional';
import FiltrosProfesional from './FiltrosProfesional';
import { Link } from "react-router-dom";

import './styles/NavVolverProf.css';

const NavVolverProf = () => {

    let [filtros, setFiltros] = useState(false);

    return ( 
        <>
            <div className="filtros-volver">
                <div className="volver">
                    <button onClick={()=> setFiltros(filtros = !filtros)}>Ver filtros <i class="fas fa-chevron-down"></i></button>
                </div>
                {filtros && <FiltrosProfesional />}
            </div>
            <div className="container-main-selectST">
                <div className="container-buttonST">
                    <Link to="/">
                        <button><i class="fas fa-chevron-left"></i> Profesionales</button>
                    </Link>
                </div>

                <div className="container-selectST">
                    <SelectProfesional />
                </div>
            </div>
        </>
    );
}
 
export default NavVolverProf;