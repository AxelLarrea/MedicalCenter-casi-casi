import React, { useEffect } from 'react';
import { useLocation} from "react-router-dom";


const ErrorMP = () => {

    const location = useLocation();
    let id_transaccion = location.search.split('&')[7].split('=')[1];
    console.log(id_transaccion);

    const eliminarTurnoTransaccion = async() =>{
        await fetch(`http://localhost:4000/deletetransaccion/${id_transaccion}`)
    }

    useEffect(() => {
        eliminarTurnoTransaccion()
    },[id_transaccion])

    return ( 
        <>
            {id_transaccion}
        </>
    );
}
 
export default ErrorMP;