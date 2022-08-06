import React from 'react'
import { Link } from 'react-router-dom';


const ResumenPanelAdmin = () => {
    return (

        <div class="container mt-5">
            <div class="row">
                <div class="col-12">
                    <div class="my-5">
                        <h3>Resumen Panel Admin</h3>
                        <hr />
                    </div>
                    <form class="file-upload">
                        <div class="row mb-5 gx-5">
                            <div class="col-xxl-8 mb-5 mb-xxl-0">
                                <div class="bg-secondary-soft px-4 py-5 rounded">
                                    <div class="row g-3">
                                        <h4 class="mb-4 mt-0">Detalles de Ordenes</h4>
                                        <div class="col-md-7">
                                            <label class="form-label">Cantidad de Ordenes </label>
                                            <input type="text" class="form-control" placeholder="" aria-label="First name" value="4XX" />
                                        </div>
                                        <div class="col-md-7">
                                            <label class="form-label">Cantidad de Usuarios</label>
                                            <input type="text" class="form-control" placeholder="" aria-label="Last name" value="4XX" />
                                        </div>

                                        <div class="col-md-7">
                                            <label class="form-label">Cantidad de Empresas</label>
                                            <input type="text" class="form-control" placeholder="" aria-label="Phone number" value="4XX" />
                                        </div>

                                        <div class="col-md-7">
                                        <p>Direcciones de Usuario</p>
                                            <div class="gap-3 d-inline-flex  justify-content-md-end text-center">
                                                <button type="button" class="btn btn-success btn-lg">Ver Direcciones de Usuario</button>
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


export default ResumenPanelAdmin;
