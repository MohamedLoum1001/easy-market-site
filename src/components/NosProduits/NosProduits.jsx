import React from 'react'
import { prod } from '../../data/Data'
import './NosProd.css';

const NosProduits = () => {
    return (
        <div className='container'>
            <div className="row justify-content-center align-items-center">
                {prod.map((image) => (
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <div className=''>
                                <img src={image.img} alt="image" className='img-fluid image-cartes mx-auto' />
                            </div>
                            <div className="text-center mb-3 my-3">
                                <p className="p-texte text-center">{image.title}</p>
                                <p className='paragraphe text-center'>{image.texte}</p>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default NosProduits
