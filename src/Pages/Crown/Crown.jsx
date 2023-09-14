import React from 'react'
import './Crown.css';
import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import Newsletter from '../../components/Newsletter/Newsletter'
import Footer from '../../components/Footer/Footer'
import ContainerGm from "../../assets/ContainerGm.png";
import { crown, similaire } from '../../data/Data'
import { Link } from "react-router-dom";
import { AiOutlineRight, AiFillStar, AiOutlineStar, AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
const Crown = () => {
    return (
        <div>
            <Header />
            <NavBar />
            <div className='container p-4'>
                <div className="row ms-3">
                    <div className="col-12">
                        <Link to="/" className='text-decoration-none text-dark'>Accueil <AiOutlineRight /> </Link>
                    </div>
                </div>
            </div>
            <div className="container p-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <img src={ContainerGm} alt="homme" className='img-fluid mx-auto' />

                        <div className="row g-5 justify-content-center align-items-center my-3">
                            {crown.map((image) => (
                                <div className="col-lg-4 col-md-4 col-sm-4 mx-auto d-flex flex-row justify-content-md-center align-items-md-center ">
                                    <img src={image.img} alt="homme" className='img-fluid mx-auto' />
                                </div>
                            ))}
                        </div>

                    </div>
                    <div className="col-md-6">
                        <div className='mb-3'>
                            <h1>Crown Summit Backpack</h1>
                        </div>

                        <div className='mb-3'>
                            <p className='text-secondary'>Marque: Homme</p>
                        </div>

                        <div className='mb-3'>
                            <AiFillStar className='text-warning' />
                            <AiFillStar className='text-warning' />
                            <AiFillStar className='text-warning' />
                            <AiFillStar className='text-warning' />
                            <AiOutlineStar className='text-warning' />
                        </div>

                        <div>
                            <p className="text-secondary fs-6">Disponible: 74</p>
                        </div>

                        <div>
                            <p className="text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing</p>
                        </div>

                        <div>
                            <h1 className="h1 fs-1 fw-bold">200.000 FCFA</h1>
                        </div>

                        <div className='d-flex flex-row align-items-center'>
                            <div>
                                <h6 className="fw-bold mb-0">Quantité</h6>
                            </div>
                            <div className='d-flex flex-row align-items-center ms-5 mb-0'>
                                <div>
                                    <button className='mainbtn border-0 bg-transparent mb-0'>-</button>
                                </div>
                                <div>
                                    <p className="mb-0">2</p>
                                </div>
                                <div>
                                    <button className='mainbtn border-0 bg-transparent  mb-0'>+</button>
                                </div>
                            </div>
                        </div>

                        <div className='d-flex flex-row align-items-center mb-3'>
                            <div>
                                <h6 className="fw-bold mb-0">Total</h6>
                            </div>
                            <div className='d-flex flex-row align-items-center ms-5 me-sm-3 mb-0'>
                                <h6 className="mb-0">200.000 FCFA</h6>
                            </div>
                        </div>

                        <div className='d-flex flex-column flex-md-row justify-content-center align-items-center justify-content-md-evenly align-items-md-center mb-3'>
                            <div>
                                <button className='main-btn p-2 rounded mb-3'>Favoris <AiOutlineHeart className='icon' /></button>
                            </div>
                            <div className=''>
                                <button className='btn mb-3'>Ajouter au panier <AiOutlineShoppingCart className='icons' /></button>
                            </div>
                        </div>

                    </div>
                </div>
                <hr />

                <div className="row my-5">
                    <p className='fw-bold'>Avis clients</p>

                    <div className="col-md-6">
                        <div>
                            <p className='para text-uppercase text-secondary'>notes moyennes</p>
                            <div>
                                <p className='fw-bold mb-0'>4/<span className='text-secondary fw-bold'>5</span></p>
                                <div className='mb-0'>
                                    <AiFillStar className='text-warning icon-start' />
                                    <AiFillStar className='text-warning icon-start' />
                                    <AiFillStar className='text-warning icon-start' />
                                    <AiFillStar className='text-warning icon-start' />
                                    <AiFillStar className='text-secondary icon-start' />
                                </div>
                                <div className='div'>
                                    <p className='text-uppercase text-secondary'>sur 12 avis</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div>
                            <div className='d-flex flex-row align-items-center'>
                                <div className='mb-0'>
                                    <p className='mb-0'>5 étoiles</p>
                                </div>
                                <div className='div bg-warning ms-3 mb-0'></div>

                                <div className='ms-3 mb-0'>
                                    <p className='mb-0'>4</p>
                                </div>
                            </div>

                            <div className='d-flex flex-row align-items-center'>
                                <div className='mb-0'>
                                    <p className='mb-0'>4 étoiles</p>
                                </div>
                                <div className='DIV ms-3 mb-0'></div>

                                <div className='ms-3 mb-0'>
                                    <p className='mb-0'>6</p>
                                </div>
                            </div>

                            <div className='d-flex flex-row align-items-center'>
                                <div className='mb-0'>
                                    <p className='mb-0'>3 étoiles</p>
                                </div>
                                <div className='DIV ms-3 mb-0'></div>

                                <div className='ms-3 mb-0'>
                                    <p className='mb-0'>2</p>
                                </div>
                            </div>

                            <div className='d-flex flex-row align-items-center'>
                                <div className='mb-0'>
                                    <p className='mb-0'>2 étoiles</p>
                                </div>
                                <div className='DIV ms-3 mb-0'></div>

                                <div className='ms-3 mb-0'>
                                    <p className='mb-0'>0</p>
                                </div>
                            </div>

                            <div className='d-flex flex-row align-items-center'>
                                <div className='mb-0'>
                                    <p className='mb-0'>1 étoiles</p>
                                </div>
                                <div className='DIV ms-3 mb-0'></div>

                                <div className='ms-3 mb-0'>
                                    <p className='mb-0'>0</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <hr />
                {/* Tableau */}
                <div className="container my-5">
                    <div className="row">
                        <div className='table-responsive'>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th className='th fw-normal'>AUTEUR</th>
                                        <th className='th fw-normal'>NOTES</th>
                                        <th className='th fw-normal'>MOTIF</th>
                                        <th className='th fw-normal'>COMMENTAIRE</th>
                                    </tr>
                                </thead>
                                <tbody className='border border-start border border-end'>
                                    <tr>
                                        <td>
                                            <p class="anonyme mb-1" scope='row'>Anonyme A</p>
                                            <p class="td-p mb-0">12 septembre 2022</p>

                                        </td>

                                        <td>
                                        <p className='p mb-0'>4/5</p>
                                            <div className='mb-0'>
                                                <AiFillStar className='text-warning icon-start' />
                                                <AiFillStar className='text-warning icon-start' />
                                                <AiFillStar className='text-warning icon-start' />
                                                <AiFillStar className='text-warning icon-start' />
                                                <AiFillStar className='text-secondary icon-start' />
                                            </div>
                                        </td>

                                        <td>
                                            <p className="motif mb-1">Suite à une commande</p>
                                            <p className="motif mb-0">du 12 septembre 2022</p>
                                        </td>

                                        <td>
                                            <p className="commentaireBien mb-1">Bien</p>
                                            <p className="commentaire mb-0">le produit est parfait</p>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <p className="anonyme mb-1" scope='row'>Anonyme A</p>
                                            <p className="td-p mb-0">12 septembre 2022</p>

                                        </td>

                                        <td>
                                            <p className='p mb-0'>4/5</p>
                                            <div className='mb-0'>
                                                <AiFillStar className='text-warning icon-start' />
                                                <AiFillStar className='text-warning icon-start' />
                                                <AiFillStar className='text-warning icon-start' />
                                                <AiFillStar className='text-warning icon-start' />
                                                <AiFillStar className='text-secondary icon-start' />
                                            </div>
                                        </td>

                                        <td>
                                            <p className="motif mb-1">Suite à une commande</p>
                                            <p className="motif mb-0">du 12 septembre 2022</p>
                                        </td>

                                        <td>
                                            <p className="commentaireBien mb-1">Bien</p>
                                            <p className="commentaire mb-0">le produit est parfait</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
                <hr />

                <div className="container my-5">
                    <p className='texte text-dark'>Produits similaires</p>
                    <div className="row g-3">
                        {similaire.map((image) => (
                            <div className="col-lg-3 col-md-6 col-sm-12 mt-4">
                                <div className='d-flex flex-column align-items-start'>
                                    <img src={image.img} alt="image" className='image-cartes mx-auto' />
                                </div>
                                <div className='d-flex flex-column align-items-start p-4 ms-sm-3'>
                                    <p className='p-texte fw-bold text-center'>{image.title}</p>
                                    <p className='para text-center fs-6'>{image.texte}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <Newsletter />
            <Footer />

        </div>
    )
}

export default Crown
