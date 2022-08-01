import React from 'react'
import Logo from './Logo/Logo.png'
import './Home.css'

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