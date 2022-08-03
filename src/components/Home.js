import React from 'react'
import Logo from '../img/Logo.png'
import '../styles/Home'

function Home() {
    return (
        <div>
            <div className='row mt-5 mb-4 justify-content-center'>
            <img src={Logo} className='logo w-25' alt='logo' />
        </div>
        </div>
    );
}

export default Home;