import React from 'react'
import './Panier.css';
import NavBar from '../../components/NavBar/NavBar'
import Header from '../../components/Header/Header'
import Newsletter from '../../components/Newsletter/Newsletter'
import Footer from '../../components/Footer/Footer'
import { Link } from "react-router-dom";
import { AiOutlineRight, AiOutlineHeart, } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import image from "../../assets/img-tab-panier.png";

const Panier = () => {
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
                <div className="row my-3">
                    <div className="panier">
                        <h1>Mon panier</h1>
                    </div>
                </div>
            </div>
            <div className="containter p-4 my-3">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="row">
                            <div className='table-responsive resp'>
                                <table className="table">
                                    <thead>
                                        <tr className='tableau'>
                                            <th className='th'>Désignation</th>
                                            <th className='th'>Prix</th>
                                            <th className='th'>Quantité</th>
                                            <th className='th'>Prix Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='td d-flex flex-row align-items-center'>
                                                <div className='mb-0'>
                                                    <img src={image} alt="image" className='img-fluid mb-0' />
                                                </div>
                                                <div className='mb-0 mt-3 ms-3'>
                                                    <p class="anonyme mb-1" scope='row'>Crown Summit Backpack</p>
                                                    <p class="td-p mb-0">Marque homme</p>
                                                </div>

                                            </td>

                                            <td>

                                                <div className='div-p d-flex align-items-center mb-0'>
                                                    <p className='p mb-3 mt-3'>500 €</p>
                                                </div>
                                            </td>

                                            <td>

                                                <div className='bouton d-flex align-items-center mb-0'>
                                                    <button className='p mb-3 mt-3 bg-transparent border-secondary'>-</button>
                                                    <button className='p mb-3 mt-3 bg-transparent border-secondary'>1</button>
                                                    <button className='p mb-3 mt-3 bg-transparent border-secondary'>+</button>
                                                </div>
                                            </td>

                                            <td>

                                                <div className='div-p d-flex align-items-center mb-0'>
                                                    <p className='p mb-3 mt-3'>500 €</p>
                                                    <div className='mb-0 mt-3 ms-3'>
                                                        <AiOutlineHeart className='text-secondary' />
                                                        <RiDeleteBin5Line className='text-danger' />
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className='td d-flex flex-row align-items-center'>
                                                <div className='mb-0'>
                                                    <img src={image} alt="image" className='img-fluid mb-0' />
                                                </div>
                                                <div className='mb-0 mt-3 ms-3'>
                                                    <p class="anonyme mb-1" scope='row'>Crown Summit Backpack</p>
                                                    <p class="td-p mb-0">Marque homme</p>
                                                </div>

                                            </td>

                                            <td>

                                                <div className='div-p d-flex align-items-center mb-0'>
                                                    <p className='p mb-3 mt-3'>500 €</p>
                                                </div>
                                            </td>

                                            <td>

                                                <div className='bouton d-flex align-items-center mb-0'>
                                                    <button className='p mb-3 mt-3 bg-transparent border-secondary'>-</button>
                                                    <button className='p mb-3 mt-3 bg-transparent border-secondary'>1</button>
                                                    <button className='p mb-3 mt-3 bg-transparent border-secondary'>+</button>
                                                </div>
                                            </td>

                                            <td>

                                                <div className='div-p d-flex align-items-center mb-0'>
                                                    <p className='p mb-3 mt-3'>500 €</p>
                                                    <div className='mb-0 mt-3 ms-3'>
                                                        <AiOutlineHeart className='text-secondary' />
                                                        <RiDeleteBin5Line className='text-danger' />
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 bg-white p-3 total shadow">
                        <div className='titre'>
                            <h1 className='text-uppercase'>total du panier</h1>
                        </div>
                        <div className='my-4 border-bottom d-flex flex-row justify-content-between align-items-center'>
                            <div className='sousTotal'>
                                <p>Sous-total</p>
                            </div>
                            <div className='sous'>
                                <p>1000</p>
                            </div>
                        </div>

                        <div className='mt-3 d-flex flex-row justify-content-between align-items-center'>
                        <div className='sousTotal'>
                            <p>TOTAL</p>
                        </div>
                        <div className='soustotal'>
                            <p>1000</p>
                        </div>
                        </div>

                        <div className='btn-total d-flex justify-content-center align-items-center mb-3'>
                            <Link to="/compte" className='button text-white border-0 text-decoration-none'>VALIDER MON PANIER</Link>
                        </div>

                    </div>
                </div>

            </div>
            <Newsletter />
            <Footer />

        </div>
    )
}

export default Panier
