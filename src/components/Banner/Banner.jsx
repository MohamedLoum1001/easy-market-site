import React from 'react'
import './Banner.css';
import pull from "../../assets/pull-over.png";
import Bouton from '../Bouton/Bouton';
import { Link } from "react-router-dom";
const Banner = () => {
    return (
        <section className='banner'>
            <div className='container p-5'>
                <div className="row align-items-center">
                    <div className="col-md-7 ">
                        <div>
                            <h1 className='text-white'>Votre site e-commerce <br /> <span className='text-white fw-bold'>personnalisable</span></h1>
                            <p className='text-white'>Vendez facilement votre produit grâce à Easy market</p>
                        </div>

                        <Link to="/produits">
                            <Bouton/>
                        </Link>

                    </div>

                    <div className="col-md-5">
                        <img src={pull} alt="pull-over" className='img-fluid' />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Banner
