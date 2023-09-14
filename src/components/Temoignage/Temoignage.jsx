import React from 'react'
import './Temoignage.css';
import { temoignage } from '../../data/Data';


const Temoignage = () => {
    return (
        <section className='my-5'>
            <div className="container">
                <div className="text-center my-5">
                    <h1>Ce que dises nos clients</h1>
                </div>
                <div className="row g-5 Njustify-content-between">

                    {temoignage.map((image) => (
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <div className="card shadow border border-0 p-2">
                            <div className='mb-3'>
                                <img src={image.img} alt="image" className='mx-auto' />
                            </div>
                            <div className='mb-3'>
                                <p className='text-dark'>{image.title}</p>
                            </div>
                            <div className='mb-3 d-flex flex-row jutify-content-start align-items-center'>
                                <img src={image.imgtest} alt="image" className='' />
                                <p className='text-dark fw-bold ms-3'>{image.nom}</p>
                            </div>

                            </div>

                        </div>
                    ))}

                </div>
            </div>

        </section>
    )
}

export default Temoignage
