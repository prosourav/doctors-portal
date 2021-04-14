import React from 'react';
import './BlogCard.css';
const BlogCard = (props) => {
    const {name,date,image,description,messege,bacKground} = props.blog;
    return (
        <div className='sec-1'>
          
            <div className={`col-md-4 card text-center ${bacKground}`}>
                <div className='d-flex justify-content-center align-items-center mt-5 mb-5'>
                <div>
                   <img src={image} alt=''/>
                </div>
                <div className='ms-3'>
                   <h3>{name}</h3>
                   <small>{date}</small>
                </div>
            
            </div>     
                  <h5>{messege}</h5>
                  <p>{description}</p>
            </div>

        </div>
    );
};

export default BlogCard;