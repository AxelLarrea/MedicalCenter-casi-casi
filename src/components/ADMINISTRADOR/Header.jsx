import React from 'react';
import {Link} from 'react-router-dom';
import logo from './assets/logo.png';
import './styles/Header.css';

const Header = () => {
    return (
        <header className="header-container">
            <Link to="/">
                <div className="header-logo">
                    <img src={logo} alt="logo"/>
                </div>
            </Link>

            <div className="btn-header">
                <a href="/" className="btn-a-header">Salir</a>
            </div>
            

        </header>
    );
}

export default Header;