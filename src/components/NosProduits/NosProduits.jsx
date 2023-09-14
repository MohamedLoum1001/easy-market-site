import React from 'react'
import { prod } from '../../data/Data'
import './NosProd.css';

const NosProduits = () => {
    return (
        <div className='container'>
            <div className="row">
                {prod.map((image) => (
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="">
                            <div className='d-flex flex-column align-items-start'>
                                <img src={image.img} alt="image" className='image-cartes mx-auto' />
                            </div>
                            <div className='d-flex flex-column align-items-start'>
                                <p className='p fw-bold'>{image.title}</p>
                                <p>{image.texte}</p>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default NosProduits
