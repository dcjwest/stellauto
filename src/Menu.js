import React, { useState } from 'react';

const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <div className='menu-toggle'>
            <button onClick={() => setMenuOpen(!menuOpen)} className={menuOpen? 'active':''}>
                <div className='burger-slice'></div>
                <div className='burger-slice'></div>
                <div className='burger-slice'></div>
            </button>
            <div className={`menu-wrapper container ${menuOpen? 'active':''}`}>
                <ul className='container'>
                    <li><a className='navlink' href='#top' onClick={closeMenu}>Home</a></li>
                    <li><a className='navlink' href='#about' onClick={closeMenu}>About</a></li>
                    <li><a className='navlink' href='#contact' onClick={closeMenu}>Contact</a></li>
                </ul>
            </div>
            <div className={`overlay ${menuOpen? 'active':''}`} onClick={closeMenu}></div>
        </div>
    );
}


export default Menu;