import React from 'react';
import Menu from './Menu';
import logo from '../images/logo.svg';

const Navbar = ({ heartBeatLine }) => {
    const handleMouseOver = e => e.target.nextSibling.classList.add('animate');
    const handleMouseLeave = e => e.target.nextSibling.classList.remove('animate');

    return (
        <nav className='Navbar container'>
            <div className='logo-group container'>
                <img src={logo} className='logo' alt='Stellenbosch Auto Clinic logo'/>
                <h1>Stellenbosch<br /><span>Auto</span> Clinic</h1>
            </div>
            <Menu heartBeatUnderline={heartBeatLine}/>
            <ul className='navlinks container'>
                <li>
                    <div className='navlink-wrapper container'>
                        <a className='navlink' href='#top' onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>Home</a>
                        {heartBeatLine}
                    </div>
                </li>
                <li>
                    <div className='navlink-wrapper container'>
                        <a className='navlink' href='#about' onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>About</a>
                        {heartBeatLine}
                    </div>
                </li>
                <li>
                    <div className='navlink-wrapper container'>
                        <a className='navlink' href='#services' onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>Services</a>
                        {heartBeatLine}
                    </div>
                </li>
                <li>
                    <div className='navlink-wrapper container'>
                        <a className='navlink' href='#quote' onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>Quote</a>
                        {heartBeatLine}
                    </div>
                </li>
                <li>
                    <div className='navlink-wrapper container'>
                        <a className='navlink' href='#contact' onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>Contact</a>
                        {heartBeatLine}
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
