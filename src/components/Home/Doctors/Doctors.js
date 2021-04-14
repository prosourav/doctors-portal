import React from "react";
import DoctorCard from "../DoctorCard/DoctorCard";
import doctor from "./../../../images/5790-removebg.png";
import './Doctors.css';

const Doctors = () => {
  const Doctor = [
    { image: doctor, name: "Dr. Coudi", phone: "+61 4522 00126" },
    { image: doctor, name: "Dr. Coudi", phone: "+61 4522 00126" },
    { image: doctor, name: "Dr. Coudi", phone: "+61 4522 00126" },
  ];
  return(
   <div className='doctors text-center'>
   <h2 style={{color:'aqua', fontWeight:'bold'}}>Our Doctors</h2>
   <div className='d-flex justify-content-center'>
   <div className='row'>
    {
        Doctor.map(doctor=><DoctorCard doctor={doctor}></DoctorCard>)
    }
   </div>
   </div>
  </div>
  );
};

export default Doctors;
