import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle';
import './index.css';
import Navbar from './Navbar';
import PasswordRecoveryEmail from './components/passwordrecoveryemail';
import PerfilUsuario from './components/PerfilUsuario';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <PerfilUsuario/>
  </React.StrictMode>
);

