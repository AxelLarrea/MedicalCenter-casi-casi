import React, {useState, useEffect} from 'react';
import './styles/Registro.css';
import logo from './assets/logo.png';

const Registro = () => {

    const [registro, setRegistro] = useState({
        dni: "",
        nombre: "",
        apellido: "",
        genero: "",
        correoElectronico: "",
        contraseña: "",
        fechaNac: "",
        factorSanguineo: "",
        telefono: "",
        nroAfiliadoOS: ""
    });

    const handleChange = (e) =>{
        setRegistro({ ...registro, [e.target.name]: e.target.value });
    }

    const crearUsuario = async(e) => {
        const rempl = registro.fechaNac.replace("-","/");
        const remplFech =  rempl.replace("-","/");
        registro.fechaNac = remplFech;

        e.preventDefault();
        const res = await fetch("http://localhost:4000/registro",{
            method: 'POST',
            body: JSON.stringify(registro),
            headers: {"Content-Type": "application/json"}
        });
        const data = await res.json();
    }
    
    console.log(registro.fechaNac);

    return (
        <>
            <div className="fondo">
            </div> 
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="container-registro">
                <h2>Registro</h2>
                <form className="registro-inputs" onSubmit={crearUsuario}>
                    <input name="nombre" type="text" placeholder="Nombre" required onChange={handleChange}/>
                    <input name="apellido" type="text" placeholder="Apellido" required onChange={handleChange}/>
                    <input name="correoElectronico" type="text" placeholder="Correo electrónico" required onChange={handleChange}/>
                    <input name="contraseña" type="password" placeholder="Contraseña" required onChange={handleChange}/>
                    <input type="password" placeholder="Repetir contraseña" required/>
                    <select onChange={ (e) => {
                            setRegistro({
                                ...registro,
                                genero: e.target.value,
                                idrol: "2"
                            })}
                        } >
                        <option>Género</option>
                        <option name="genero" value="m">Masculino</option>
                        <option name="genero" value="f">Femenino</option>
                        <option name="genero" value="u">Otro</option>
                    </select>

                    <select onChange={ (e) => {
                            setRegistro({
                                ...registro,
                                id_obrasocial: e.target.value
                            })}
                        } >
                        <option>Obra Social</option>
                        <option name="id_obrasocial" value="1">IOSPER</option>
                        <option name="id_obrasocial" value="2">TVSALUD</option>
                        <option name="id_obrasocial" value="3">AVALIANT</option>
                        <option name="id_obrasocial" value="4">Federada Salud</option>
                        <option name="id_obrasocial" value="5">Apres Salud</option>
                        <option name="id_obrasocial" value="6">Medicus</option>
                        <option name="id_obrasocial" value="7">OMINT</option>
                        <option name="id_obrasocial" value="8">Bristol Medicine</option>
                        <option name="id_obrasocial" value="9">AcaSalud</option>
                        <option name="id_obrasocial" value="10">Galeno</option>
                        <option name="id_obrasocial" value="11">Prevencion Salud</option>
                        <option name="id_obrasocial" value="12">Swiss Medical</option>
                        <option name="id_obrasocial" value="13">FEMEBA</option>

                    </select>

                    <input name="fechaNac" type="date"  onChange={handleChange}/>
                    <input name="dni" type="text" placeholder="D.N.I."  onChange={handleChange}/>
                    <input name="telefono" type="tel" placeholder="Teléfono"  onChange={handleChange}/>

                    <select onChange={ (e) => {
                            setRegistro({
                                ...registro,
                                factorSanguineo: e.target.value
                            })}
                        } > 
                        <option >Factor Sanguíneo</option>
                        <option name="factorSanguineo" value="A+">A+</option>
                        <option name="factorSanguineo" value="A-">A-</option>
                        <option name="factorSanguineo" value="B+">B+</option>
                        <option name="factorSanguineo" value="B-">B-</option>
                        <option name="factorSanguineo" value="AB+">AB+</option>
                        <option name="factorSanguineo" value="AB-">AB-</option>
                        <option name="factorSanguineo" value="O+">O+</option>
                        <option name="factorSanguineo" value="O-">O-</option>
                        
                        </select>

                    <input name="nroAfiliadoOS" type="text" placeholder="Número de afiliado"  onChange={handleChange}/>
                    <button type="submit">Crear cuenta</button>
                </form>
            </div>
        </>
    );
}
 
export default Registro;