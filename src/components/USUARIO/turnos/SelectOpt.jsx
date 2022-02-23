import React, {useState} from 'react';
import { Link } from "react-router-dom";
import '../styles/SelectOpt.css';

const SelectOpt = () => {

    return (
        <>  
            <div className="container-main-selectST">
                <div className="container-buttonST">
                    <Link to="/">
                        <button><i class="fas fa-chevron-left"></i> Solicitar turno</button>
                    </Link>
                </div>
            </div>
        </>
    );
}
 
export default SelectOpt;

