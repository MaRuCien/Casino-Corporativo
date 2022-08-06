import React from 'react'
import { Link } from 'react-router-dom';


const PasswordRecoveryEmail = () => {
    return (


        <div class="container mt-5">
            <div class="row">
                <div class="col-12">
                    <div class="my-5">
                        
                        <h3>Recuperación de Contraseña</h3>
                        <hr />
                    </div>
                    <form >
                    <div class="row mb-5 gx-5">
                            <div class="col-xxl-8 mb-5 mb-xxl-0">
                                <div class="bg-secondary-soft px-4 py-5 rounded">
                                    <div class="row g-3">

                        <h3 >Busca tu dirección de correo electrónico</h3>
                        <p>Introduce tu número de teléfono o tu dirección de correo electrónico de recuperación</p>

                        <div className="mb-3 w-50">
                            <label for="exampleInputEmail1" className="form-label">Email:</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Ingresa tu Correo' />
                            <div id="emailHelp" className="form-text">Nunca compartiremos tu correo con nadie más</div>
                            <hr/>
                            <button type="submit" className="btn btn-primary">Enviar</button>

                          </div>
                          </div> 
                          </div> 
                          </div>
                          </div>
                    </form>

                </div>
            </div>
        </div>








    );
}


export default PasswordRecoveryEmail;

