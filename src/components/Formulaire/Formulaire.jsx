import React from 'react'
import './Formulaire.css';
import { Link } from "react-router-dom";
const Formulaire = () => {
    return (
        <div className='container'>
            <div className="row my-3">
                <div className='form-titre'>
                    <h6>Informations personnelles</h6>
                </div>
                <hr />
                <form className='my-3'>

                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="form-group">
                                <label htmlFor="prenom" className='mb-2'>PRENOM</label>
                            </div>
                            <div className="form-input">
                                <input type="text" placeholder='prénom' className='form-control mb-2' />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="form-group">
                                <label htmlFor="nom">NOM</label>
                            </div>
                            <div className="form-input">
                                <input type="text" placeholder='nom' className='form-control mb-2' />
                            </div>
                        </div>

                    </div>



                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="form-group">
                                <label htmlFor="email">ADRESSE MAIL</label>
                            </div>
                            <div className="form-input">
                                <input type="email" placeholder='exemple@gmail.com' className='form-control mb-2' />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="form-group">
                                <label htmlFor="telephone">TELEPHONE</label>
                            </div>
                            <div className="form-input">
                                <input type="tel" placeholder='77 123 45 67' className='form-control mb-2' />
                            </div>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="form-group">
                                <label htmlFor="adresse">ADRESSE</label>
                            </div>
                            <div className="form-input">
                                <input type="tel" placeholder='Dakar, grand yoff' className='form-control mb-2' />
                            </div>
                        </div>

                    </div>

                </form>
                <div className='btn-total d-flex justify-content-start align-items-center mb-3'>
                    <Link to="/compte" className='button text-white border-0 text-decoration-none w-50 text-center'>ENREGISTRER</Link>
                </div>
            </div>
        </div>
    )
}

export default Formulaire
