import React from 'react';
import boschLogo from './images/suppliers/bosch.png';
import gabrielLogo from './images/suppliers/gabriel.png';
import gatesLogo from './images/suppliers/gates.png';
import gudFiltersLogo from './images/suppliers/gud_filters.png';
import hellaLogo from './images/suppliers/hella.png';
import lukLogo from './images/suppliers/luk.png';
import monroeLogo from './images/suppliers/monroe.png';
import nuralLogo from './images/suppliers/nural.png';
import osramLogo from './images/suppliers/osram.png';
import willardLogo from './images/suppliers/willard.png';

const Footer = () => {
    return (
        <footer className='container'>
            <div className='supplier-logos'>
                <img src={boschLogo} alt='Bosch logo' />
                <img src={gabrielLogo} alt='Gabriel logo' />
                <img src={gatesLogo} alt='Gates logo' />
                <img src={gudFiltersLogo} alt='Gud Filters logo' />
                <img src={hellaLogo} alt='Hella logo' />
                <img src={lukLogo} alt='Luk logo' />
                <img src={monroeLogo} alt='Monroe logo' />
                <img src={nuralLogo} alt='Nural logo' />
                <img src={osramLogo} alt='Osram logo' />
                <img src={willardLogo} alt='Willard logo' />
            </div>
            <a className="author" href='https://davidcjwest.tk/' rel='noopener noreferrer' target="_blank">Design by The Dancing Dev</a>
        </footer>
    );
}

export default Footer;
