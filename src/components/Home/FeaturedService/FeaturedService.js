import React from 'react';
import Photo from  './../../../images/Mask Group 3.png';
import   './FeaturedService.css';
const FeaturedService = () => {
    return (
        <div className='container mt-5'>
        <div className='featureService row d-flex justify-content-center'>
        <div className='col-md-6'>
        <img src={Photo} alt="" style={{height:'600px',width:'600px'}}/>
        </div>
            
       
        <div className='col-md-6 mt-5'>
        <h2>Execptional Dental Care,<br/> On your Terms</h2>
        <h4 className='text-secondary my-5 me-5'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quos aperiam illum hic eveniet optio totam! Minima deserunt eaque fugit quia corrupti optio consectetur distinctio error totam dignissimos necessitatibus eveniet voluptas expedita consequuntur delectus sapiente veritatis, vero corporis pariatur beatae id voluptatibus ea ad dolorem. Alias autem possimus quis officia perferendis enim inventore deleniti minima expedita suscipit in, laudantium minus est ipsum odit. Culpa doloribus suscipit id itaque porro mollitia.
        </h4>
        <button type="button" style={{background:'aqua'}} class="btn">Learn More</button>
        </div>
        </div>
        </div>
        
    );
};

export default FeaturedService;