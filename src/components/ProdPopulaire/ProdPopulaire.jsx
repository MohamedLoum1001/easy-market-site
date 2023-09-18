import React from 'react'
import './prod.css';
import { prod } from '../../data/Data';
import { Link } from "react-router-dom";

const ProdPopulaire = () => {
    return (
        <section className='p-5'>
            <div className='container'>
                <h1 className="fw-bold text-center">Produits populaires</h1>
                <div className="row justify-content-center align-items-center my-5">
                    {prod.map((image) => (
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <Link to={image.link} className="text-decoration-none text-dark">
                                <div className='d-flex flex-column align-items-start'>
                                    <img src={image.img} alt="image" className='image-cartes mx-auto' />
                                </div>
                                <div className='d-flex flex-column text-center my-3'>
                                    <p className='p-texte text-center'>{image.title}</p>
                                    <p className='paragraphe text-center'>{image.texte}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                    <div className='col-12 text-end'>
                        <button className='bouton text-dark'>Voir plus</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProdPopulaire
