import React from 'react';
import landingImg from '../images/scope-car.jpg';

const Home = () => {
    return (
        <section id='home' className='container'>
            <div className='call-to-action'>
                <h2>Need emergency car service?<br />We're here to help.</h2>
                <a className='btn' href='#quote'>Enquire now</a>
            </div>
            <div className='img-container'>
                <img src={landingImg} alt='Car-shaped stethoscope.' />
            </div>
        </section>
    );
}

export default Home; 
