import React from 'react';
import './Blog.css';
import quote from './../../../images/quote.png';
import doctor1 from './../../../images/Ellipse 1.png';
import doctor2 from './../../../images/Ellipse 2.png';
import BlogCard from '../BlogCard/BlogCard';
const Blog = () => {
    const Blogs =[
        {
            name:'Rashed Kabir',
            date:'22 Aug2018',
            messege:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, excepturi? ',
            bacKground:'backGroundColor',
        },
        {
            name:'Dr. Coudi',
            date:'22 Aug2018',
            messege:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, excepturi? ',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique modi laborum et aspernatur magni voluptatem aliquam. Velit. ',
            image:doctor1
        },
        {
            name:'Dr. John Michel',
            date:'22 Aug2018',
            messege:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, excepturi? ',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique modi laborum et aspernatur magni voluptatem aliquam. Velit. ',
            image:doctor2
        },
    ]
    return (
        <div className='Blog'>
            <div className='text-center'>
            <h4>OUR BLOG</h4>
            <h1>From Our Blog News</h1>
            </div>
            <div className='d-flex justify-content-around blogger container'>
            {
                Blogs.map(blog=><BlogCard blog={blog}></BlogCard>)
            }
            </div>
        </div>
    );
};

export default Blog;