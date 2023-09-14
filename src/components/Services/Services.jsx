import React from 'react'
import './Services.css';
import { serviceImg } from '../../data/Data';
import { Link } from "react-router-dom";

const Services = () => {
    return (
        <section className='services p-4'>
            <div className='container'>
                <div className="row g-3">
                    {serviceImg.map((image) => (
                        <div className="col">
                            <Link to={image.link} className="text-decoration-none"> 
                            <div className='text-center'>
                                <p className='text-dark'>{image.title}</p>
                            </div>
                            <div className='rounded-circle border div-image text-center mx-auto bg-white'>
                                <img src={image.img} alt="homme" className='img-fluid mx-auto mt-4 d-flex justify-content-center align-items-center' />
                            </div>
                            </Link>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Services
