import React from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import floride from './../../../images/001-dental.png';
import cavity from './../../../images/2.png';
import whitening from  './../../../images/3.png';

const Services = () => {
    const serviceData = [
        {
            name:'Floride Treatment',
            img:floride,
        },
        {
            name:'Cavity Filling',
            img:cavity,
        },
        {
            name:'Teeth Whitening',
            img:whitening,
        }
    ];

    return (
        <section className='services-container mt-5'>
        <div className='text-center'>
        <h5 style={{color:'#1CC7C1'}}>OUR SERVICES</h5>
        <h2>Services We Provide</h2>
        </div>
        <div className='d-flex justify-content-center'>
        <div className='w-75 row mt-5'>
        {
            serviceData.map(service=> <ServiceDetail service={service}></ServiceDetail>)
        }
        </div>
        </div>

        </section>
    );
};

export default Services;

