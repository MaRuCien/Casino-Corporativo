import React from 'react'
import { Link } from 'react-router-dom';


const DireccionesUsuario = () => {
    return (

        <div class="container mt-5">
            <div class="row">
                <div class="col-12">
                    <div class="my-5">
                        <h3>Direcciones de Usuario</h3>
                        <hr />
                    </div>
                    <form class="file-upload">
                        <div class="row mb-5 gx-5">
                            <div class="col-xxl-8 mb-5 mb-xxl-0">
                                <div class="bg-secondary-soft px-4 py-5 rounded">
                                    <div class="row g-3">

                                        <div class="col-md-7">
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Id</th>
                                                        <th scope="col">Nombre</th>
                                                        <th scope="col">Apellido</th>
                                                        <th scope="col">Dirección</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>Juan</td>
                                                        <td>Perez</td>
                                                        <td>Perico Los Palotes #4564, Melipilla</td>
                                                    </tr>
                 
         
                                                </tbody>
                                            </table>

                                            <hr />
                                            <div class="gap-3 d-inline-flex  justify-content-md-end text-center">
                                                <button type="button" class="btn btn-success btn-lg">Volver</button>
                                            </div>

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


export default DireccionesUsuario;
