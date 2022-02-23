import React from 'react';
import './styles/HeaderMedico.css';
import logo from './assets/logo.png';
import { Link } from 'react-router-dom';


const Header = () => {

    return (
        <>
        <div className="contenedor-headerFun">
            <div className="headerFun-logo">
                <Link to="/homeMedico">
                    <img src={logo} alt="logo"/>
                </Link>
            </div>
            <div className="headerFun-salir">
                <Link to="/login">
                    <button>Salir</button>
                </Link>
            </div>
        </div>
        </>
     );
}
 
export default Header;