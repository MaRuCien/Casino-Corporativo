import Logo from '../img/logo_nav.png'

function NavContact() {
  return (
    <nav className='navbar navbar-expand-lg sticky-top bg-success'>
    <div className='container-fluid'>
      <a className='' href='/'>
        <img src={Logo} className='w-25 border border-success rounded' alt='logo' />
      </a>
    </div>
  </nav>
  );
}

export default NavContact
