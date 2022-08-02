import React from 'react'
import { Link } from 'react-router-dom';


const PasswordRecoveryEmail = () => {
    return (

        <div className="container mt-5">
            <form >

                <h3 >Busca tu dirección de correo electrónico</h3>
                <p>Introduce tu número de teléfono o tu dirección de correo electrónico de recuperación</p>

                <div className="mb-3 w-50">
                    <label for="exampleInputEmail1" className="form-label">Email:</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Ingresa tu Correo'/>
                        <div id="emailHelp" className="form-text">Nunca compartiremos tu correo con nadie más</div>
                </div>

                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>


        </div>

    );
}


export default PasswordRecoveryEmail;

