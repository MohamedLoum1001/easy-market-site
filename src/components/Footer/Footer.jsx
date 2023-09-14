import React from 'react'
import logo from "../../assets/Logo-footer.png";
import { BsWhatsapp, BsTelephone } from "react-icons/bs";
import './Footer.css';

const Footer = () => {
    return (
        <section className='footer p-5'>
            <div className="container">
                <div className="row g-5 align-items-center my-5">
                    <div className="col-md-4 mb-4">
                        <div>
                            <img src={logo} alt="footer" className='mx-auto' />
                        </div>

                        <div className='my-3'>
                            <h5 className='text-white'>Contactez-nous</h5>
                        </div>

                        <div className='d-flex flex-row'>
                            <div>
                                <BsWhatsapp className='text-white' />
                            </div>
                            <div>
                                <p className='text-white ms-2'>Whats App</p>
                                <p className='text-white'>221 76 371 99 99</p>
                            </div>
                        </div>

                        <div className='d-flex flex-row'>
                            <div>
                                <BsTelephone className='text-white' />
                            </div>
                            <div className=''>
                                <p className='text-white ms-2'>Téléphone</p>
                                <p className='text-white'>221 33 963 10 16</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className='TITRE'>
                            <h6 className='text-white'>Nos catégories</h6>
                            <div className='tiret'></div>
                        </div>

                        <div className='my-3'>
                            <ul>
                                <li className='li text-white'>Immobilier</li>
                                <li className='li text-white'>Equipements</li>
                                <li className='li text-white'>Voiture</li>
                                <li className='li text-white'>Services</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className='TITRE'>
                            <h6 className='text-white'>Assistances</h6>
                            <div className='tiret'></div>
                        </div>

                        <div className='my-3'>
                            <ul>
                                <li className='text-white'>Comment ça marche</li>
                                <li className='text-white'>Condition d'utilisation</li>
                                <li className='text-white'>Nos abonnements</li>
                                <li className='text-white'>Politique de confidatialité</li>
                            </ul>
                        </div>
                    </div>

                </div>
                <hr />
                <div className="div-footer text-center">
                    <p className='text-white'>&copy; 2023 all reserved</p>
                </div>
            </div>

        </section>
    )
}

export default Footer
