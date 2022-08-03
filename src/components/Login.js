import Logo from '../img/Logo.png'
import '../styles/Login';

function Login() {
  return (
    <div>
      <img src={Logo} className='logo w-25' alt='logo' />
      <div className='panel-central'>
        <div>
          <input className='input'
            type='text'
            placeholder='  Usuario o email'
          />
          <input className='input'
            type='text'
            placeholder='  Contraseña'
          />
          <button className='boton'>Entrar</button>
          <p className='text-center'>¿Olvidaste tu contraseña?</p>
          <br />
          <h6 className='text-center'>Si quieres contratar nuestros servicios</h6>
          <button className='boton'>Contactar</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
