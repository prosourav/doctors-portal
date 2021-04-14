import React from 'react';
import doctor from './../../../images/5790-removebg.png';
import './MakeAppointment.css';
const MakeAppointment = () => {
    return (
        <section className='appointment text-white'>
       <div className='appointment-sec row d-flex '>
       <div className='col-md-4'>
       <img src={doctor}  alt="" srcset=""/>
   </div>
   <div className='col-md-6 ms-5'>
       <h4 style={{color:'aqua'}} className='mt-5 mb-5'>APPOINTMENT</h4>
       <h1  className='mt-5 mb-5 '>Make An Appontment <br/> Today</h1>
       <h5 className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur optio qui dicta consequatur illo hic ad explicabo, ex tempore rerum. </h5>
       <button style={{backgroundColor:'aqua'}} className='btn' >Learn More</button>
   </div>
       </div>
        </section>
    );
};

export default MakeAppointment;