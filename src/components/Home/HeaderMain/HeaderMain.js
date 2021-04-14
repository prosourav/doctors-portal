import React from 'react';
import chair from './../../../images/chair.png'

const HeaderMain = () => {
    return (
      <main style={{height:'600px'}} className='row d-flex align-items-center w-100'>
      <div className="col-md-4 offset-md-1">
      <h1>Your New Smile <br></br>Starts Here</h1>
      <p className='text-secondary'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At ipsa quas fugiat in natus saepe?</p>
      <button className="btn btn-primary">Get Appoinment</button>
      </div>
      <div className="col-md-6">
      <img src={chair} alt="" className="img-fluid"/>
      </div>
      </main>
    );
};

export default HeaderMain;