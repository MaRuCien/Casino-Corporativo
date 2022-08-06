import React from 'react'
import { Link } from 'react-router-dom';


const AdminEmpresa = () => {
    return (

        <div class="container mt-5">
            <div class="row">
                <div class="col-12">
                    <div class="my-5">
                        <h3>Admin Empresa</h3>
                        <hr />
                    </div>
                    <form class="file-upload">
                        <div class="row mb-5 gx-5">
                            <div class="col-xxl-8 mb-5 mb-xxl-0">
                                <div class="row g-3 px-4">
                                    <div class="col-md-6">
                                        <label class="form-label">Buscar Empleado </label>
                                        <input type="text" class="form-control" placeholder="" aria-label="First name" value="Buscar" />
                                    </div>
                                </div>

                                <div class="bg-secondary-soft px-4 py-5 rounded">
                                    <div class="row g-3">
                                        <h4 class="mb-4 mt-0">Empleado</h4>
                                        <div class="col-md-6">
                                            <label class="form-label">Nombre *</label>
                                            <input type="text" class="form-control" placeholder="" aria-label="First name" value="Juan Carlos" />
                                        </div>
                                        <div class="col-md-6">
                                            <label class="form-label">Apellido *</label>
                                            <input type="text" class="form-control" placeholder="" aria-label="Last name" value="Perez Moya" />
                                        </div>

                                        <div class="col-md-6">
                                            <label class="form-label">RUT *</label>
                                            <input type="text" class="form-control" placeholder="" aria-label="Phone number" value="16.666.666-6" />
                                        </div>

                                        <div class="col-md-6">
                                            <label class="form-label">Dirección *</label>
                                            <input type="text" class="form-control" placeholder="" aria-label="Phone number" value="Dirección" />
                                        </div>

                                        <div class="col-md-6">
                                            <label class="form-label">Telefono *</label>
                                            <input type="text" class="form-control" placeholder="" aria-label="Phone number" value="(569) 9874 56XX" />
                                        </div>
                                        <div class="col-md-6">
                                            <label for="inputEmail4" class="form-label">Email *</label>
                                            <input type="email" class="form-control" id="inputEmail4" value="ejemplo@correo.com" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="gap-3 d-md-flex justify-content-md-end text-center">
                            <button type="button" class="btn btn-danger btn-lg">Eliminar Empleado</button>
                            <button type="button" class="btn btn-primary btn-lg">Actualizar / Agregar Empleado</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>



    );
}


export default AdminEmpresa;
