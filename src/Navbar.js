import React from 'react';
import Menu from './Menu';
import logo from './images/logo.svg';

const Navbar = () => {
    // const heartBeatLine = <svg className='heartbeat' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 640 640" width="72" height="72"><defs><path d="M623.31 281.26H105.73c-.09 0-.17-.07-.18-.17-1.53-14.88-6.08-59.28-7.61-74.14 0-.03-.05-.03-.05 0-2.81 31.65-10.81 121.82-13.51 152.34-.05.57-.89.56-.92-.01-4.07-61.36-15.99-241.03-20.09-302.77-.02-.36-.55-.36-.58 0-3.72 47.5-14.7 187.94-18.46 235.93-.01.18-.27.19-.29.01-1.15-10.69-4.34-40.44-5.46-50.94-.04-.36-.57-.37-.62-.01-.74 5.3-2.57 18.55-5.51 39.76H21" id="a"/><path d="M634 281.5c0 5.52-4.48 10-10 10s-10-4.48-10-10 4.48-10 10-10 10 4.48 10 10z" id="b"/><path d="M23 282c0 5.52-4.48 10-10 10s-10-4.48-10-10 4.48-10 10-10 10 4.48 10 10z" id="c"/></defs><use xlinkHref="#a" fillOpacity="0" stroke="#fd0000" strokeWidth="16"/><use xlinkHref="#b" fill="#fd0000"/><use xlinkHref="#c" fill="#fd0000"/></svg>;
    const heartBeatLine = <svg className='heartbeat' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 640 640" width="72" height="72"><path d="M623.31 281.26H105.73c-.09 0-.17-.07-.18-.17-1.53-14.88-6.08-59.28-7.61-74.14 0-.03-.05-.03-.05 0-2.81 31.65-10.81 121.82-13.51 152.34-.05.57-.89.56-.92-.01-4.07-61.36-15.99-241.03-20.09-302.77-.02-.36-.55-.36-.58 0-3.72 47.5-14.7 187.94-18.46 235.93-.01.18-.27.19-.29.01-1.15-10.69-4.34-40.44-5.46-50.94-.04-.36-.57-.37-.62-.01-.74 5.3-2.57 18.55-5.51 39.76H21"/></svg>;
    
    const handleMouseOver = e => e.target.nextSibling.classList.add('animate');

    const handleMouseLeave = e => e.target.nextSibling.classList.remove('animate');

    return (
        <nav className='Navbar container'>
            <div className='logo-group container'>
                <img src={logo} className='logo' alt='Stellenbosch Auto Clinic logo'/>
                <h1>Stellenbosch<br /><span>Auto</span> Clinic</h1>
            </div>
            <Menu />
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
                        <a className='navlink' href='#contact' onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>Contact</a>
                        {heartBeatLine}
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
