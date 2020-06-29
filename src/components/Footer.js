import React from 'react';
import boschLogo from '../images/suppliers/bosch.png';
import gabrielLogo from '../images/suppliers/gabriel.png';
import gatesLogo from '../images/suppliers/gates.png';
import gudFiltersLogo from '../images/suppliers/gud_filters.png';
import hellaLogo from '../images/suppliers/hella.png';
import lukLogo from '../images/suppliers/luk.png';
import monroeLogo from '../images/suppliers/monroe.png';
import nuralLogo from '../images/suppliers/nural.png';
import osramLogo from '../images/suppliers/osram.png';
import willardLogo from '../images/suppliers/willard.png';

const Footer = () => {
    return (
        <footer className='container'>
            <div className='supplier-logos'>
                <a title='Bosch' href='https://www.bosch.com/' rel='noopener noreferrer' target='_blank'><img src={boschLogo} alt='Bosch logo' /></a>
                <a title='Gabriel' href='https://www.gabriel.co.za/' rel='noopener noreferrer' target='_blank'><img src={gabrielLogo} alt='Gabriel logo' /></a>
                <a title='Gates' href='https://www.gates.com/us/en.html' rel='noopener noreferrer' target='_blank'><img src={gatesLogo} alt='Gates logo' /></a>
                <a title='Gud Filters' href='http://www.gud.co.za/' rel='noopener noreferrer' target='_blank'><img src={gudFiltersLogo} alt='Gud Filters logo' /></a>
                <a title='Hella' href='https://www.hella.com/hella-com/index.html' rel='noopener noreferrer' target='_blank'><img src={hellaLogo} alt='Hella logo' /></a>
                <a title='Luk - a Schaeffler Group brand' href='http://www.schaeffler.com/' rel='noopener noreferrer' target='_blank'><img src={lukLogo} alt='Luk logo' /></a>
                <a title='Monroe' href='http://www.monroe.com/en-US/' rel='noopener noreferrer' target='_blank'><img src={monroeLogo} alt='Monroe logo' /></a>
                <a title='Nüral' href='https://www.drivparts.com/en-za/brands/nural.html' rel='noopener noreferrer' target='_blank'><img src={nuralLogo} alt='Nüral logo' /></a>
                <a title='Osram' href='https://www.osram.com/cb/' rel='noopener noreferrer' target='_blank'><img src={osramLogo} alt='Osram logo' /></a>
                <a title='Willard' href='https://willard.co.za/' rel='noopener noreferrer' target='_blank'><img src={willardLogo} alt='Willard logo' /></a>
            </div>
            <div className='footer-links container'>
                <a className='company' href='#top'>&copy; 2020 Stellenbosch Auto Clinic</a>
                <a className='author' href='https://davidcjwest.tk/' rel='noopener noreferrer' target='_blank'>Design by The Dancing Dev</a>
            </div>
        </footer>
    );
}

export default Footer;
