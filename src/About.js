import React from 'react';
import carDoc from './images/car-doc.jpg';

const About = () => {
    return (
        <section id='about'>
            <h2>Why Choose Us?</h2>
            <div className='more-info container'>
                <img src={carDoc} alt='Doctor inspecting car with stethoscope.'/>
                <p>Stellenbosch Auto Clinic has been servicing and repairing vehicles in the Stellenbosch area since 2002.<br />
                Our highly specialised and experienced experts are devoted to treating all kinds of problems and conditions.</p>
            </div>
            <div className='services container'>
                <h2>Services</h2>
                <ul>
                    <li>Auto Electrical and Mechanical</li>
                    <li>Air-conditioning</li>
                    <li>Fuel Injection</li>
                    <li>Engine Management</li>
                    <li>Major Services</li>
                    <li>Automotive Diagnostics</li>
                </ul>
            </div>
        </section>
    );
}

export default About;
