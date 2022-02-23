import React from 'react';
import { Link } from 'react-router-dom';

const IndividualCobro = () => {

    return (
        <div className="super-os-container">
            <div className="OS-container">
                <div className="info-container">
                    <h2>Transaccion</h2>
                    <h2>ID: </h2>
                </div>
                <div className="super-btn-container">
                    <div className="btn-container-os">
                        <Link to={`/`}>
                            <button className="os-btn">Editar</button>
                        </Link>
                        <button className="os-btn">Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default IndividualCobro;