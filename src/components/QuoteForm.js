import React from 'react';
import { useForm } from 'react-hook-form';
// import { BsExclamationSquareFill } from 'react-icons/bs'; // Icon to be used in error messages.

export const QuoteForm = ({ underline }) => {
    const { register, handleSubmit } = useForm();

    // To do: Process enquiry form data and handle email submission.
    function onSubmitForm(formData) {
        console.log(formData);
    }

    // To do: Proper form validation and error message styling.
    
    return (
        <section id='quote' className='container'>
            <div className='title-wrapper container'>
                <h2>Get a free repair / service quote</h2>
                {underline}
            </div>
            <p>Please fill out the form below to receive a free quote on your next vehicle repair or service.</p>
            <form className='quote-form' onSubmit={handleSubmit(onSubmitForm)} >
                <div className='input-wrapper'>
                    <input 
                        name='name' 
                        type='text'
                        required 
                        ref={register} />
                    <span className='input-title'>Name</span>
                </div>
                <div className='input-wrapper'>
                    <input 
                        name='email' 
                        type='email' 
                        required 
                        ref={register} />
                    <span className='input-title'>Email</span>
                </div>
                <div className='input-wrapper'>
                    <input 
                        name='cellNum' 
                        type='text' 
                        required 
                        ref={register} />
                    <span className='input-title'>Cellphone Number</span>
                </div>
                <div className='input-wrapper'>
                    <input 
                        name='carModel' 
                        type='text' 
                        required 
                        ref={register} />
                    <span className='input-title'>Car Model (e.g. VW Polo 2019)</span>
                </div>
                <div className='input-wrapper'>
                    <input 
                        name='mileage' 
                        type='number' 
                        required 
                        ref={register} />
                    <span className='input-title'>Current Mileage (km)</span>
                </div>
                <div className='input-wrapper'>
                    <input 
                        name='vinNum' 
                        type='text' 
                        required 
                        ref={register} />
                    <span className='input-title'>VIN Number (On Licence Disc)</span>
                </div>
                <div className='input-wrapper'>
                    <input 
                        name='engineNum' 
                        type='text' 
                        required 
                        ref={register} />
                    <span className='input-title'>Engine Number (On Licence Disc)</span>
                </div>
                <div className='input-wrapper container'>
                    <select 
                        name='service'
                        defaultValue=''
                        required
                        ref={register}>
                            <option value='' disabled defaultValue>Choose an option</option>
                            <option value='Minor Service'>Minor Service</option>
                            <option value='Major Service'>Major Service</option>
                            <option value='Mechanical Repair'>Mechanical Repair</option>
                            <option value='Auto Electrical'>Auto Electrical</option>
                            <option value='Inspection'>Inspection</option>
                    </select>
                    <label>Service Required</label>
                </div>
                <button className='btn'>Submit</button>
            </form>
        </section>
    );
}

export default QuoteForm;
