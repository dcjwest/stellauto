import React from 'react';
import ServiceCard from './ServiceCard';
import carDoc from '../images/car-doc.jpg';
import elecMech from '../images/services/electrical_mechanical.jpg';
import aircon from '../images/services/aircon.jpg';
import fuelInject from '../images/services/fuel_injection.jpg';
import engineManage from '../images/services/engine_management.jpg';
import majorService from '../images/services/major_service.jpg';
import diagnostic from '../images/services/diagnostics.jpg';

const About = ({ underline }) => {
    return (
        <section id='about'>
            <div className="title-wrapper container">
                <h2>Why Choose Us?</h2>
                {underline}
            </div>
            <div className='more-info container'>
                <img src={carDoc} alt='Doctor inspecting car with stethoscope.'/>
                <p>Stellenbosch Auto Clinic has been servicing and repairing vehicles in the Stellenbosch area since 2002.<br /><br />
                Our highly specialised and experienced experts are devoted to treating all kinds of car problems and conditions.</p>
            </div>
            <div className='services container'>
                <div className='title-wrapper container'>
                    <h2>Services</h2>
                    {underline}
                </div>
                <div className='services-list'>
                    <ServiceCard title='Auto Electrical & Mechanical' imgSrc={elecMech} />
                    <ServiceCard title='Air Conditioning' imgSrc={aircon} />
                    <ServiceCard title='Fuel Injection' imgSrc={fuelInject} />
                    <ServiceCard title='Engine Management' imgSrc={engineManage} />
                    <ServiceCard title='Major Services' imgSrc={majorService} />
                    <ServiceCard title='Automotive Diagnostics' imgSrc={diagnostic} />
                </div>
                {/* <ul>
                    <li>Auto Electrical and Mechanical</li>
                    <li>Air-conditioning</li>
                    <li>Fuel Injection</li>
                    <li>Engine Management</li>
                    <li>Major Services</li>
                    <li>Automotive Diagnostics</li>
                </ul> */}
            </div>
        </section>
    );
}

export default About;
