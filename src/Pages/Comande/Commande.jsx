import React from 'react'
import './Commande.css';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import Newsletter from '../../components/Newsletter/Newsletter';
import Footer from '../../components/Footer/Footer';
import SideBarCompte from '../../components/SideBarCompte/SideBarCompte';
import { AiFillDelete } from "react-icons/ai";
import { IoEyeSharp } from "react-icons/io5";
import SidebarFooter from '../../components/SidebarFooter/SidebarFooter';
const Commande = () => {
    return (
        <div>
            <Header />
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                        <SideBarCompte />
                    </div>
                    <div className="col-lg-10 col-md-12 col-sm-12 d-flex flex-column justify-content-center">
                        <div className='title'>
                            <h1>Mes commandes</h1>
                        </div>
                        <div className="my-3">
                            <div className="container my-3">
                                <div className="row justify-content-center">
                                    <div className="col-12">
                                        <div className="row">
                                            <div className='table-responsive resp'>
                                                <table className="table">
                                                    <thead>
                                                        <tr className='tableau'>
                                                            <th className='th'>N.Commande</th>
                                                            <th className='th'>Date</th>
                                                            <th className='th'>Montant total</th>
                                                            <th className='th'>Statut</th>
                                                            <th className='th'>Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className='td'>
                                                                <div className='mt-3 ms-3 d-flex align-items-center'>
                                                                    <p class="anonyme" scope='row'>35678</p>
                                                                </div>
                                                            </td>

                                                            <td>

                                                                <div className='div-p mt-3 d-flex align-items-center'>
                                                                    <p className='p'>31/10/2022</p>
                                                                </div>
                                                            </td>

                                                            <td>
                                                                <div className='div-p mt-3 d-flex align-items-center'>
                                                                    <p className='p'>500 €</p>
                                                                </div>

                                                            </td>

                                                            <td>
                                                                <div className='div-para mt-3 d-flex align-items-center'>
                                                                    <p className='para'>Livré</p>
                                                                </div>
                                                            </td>

                                                            <td>
                                                                <div className='mt-3 d-flex flex-row justify-content-center align-items-center'>
                                                                    <IoEyeSharp className='text-success' />
                                                                    <AiFillDelete className='text-danger ms-3' />
                                                                </div>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td className='td'>
                                                                <div className='mt-3 ms-3 d-flex align-items-center'>
                                                                    <p class="anonyme" scope='row'>35678</p>
                                                                </div>
                                                            </td>

                                                            <td>

                                                                <div className='div-p mt-3 d-flex align-items-center'>
                                                                    <p className='p'>31/10/2022</p>
                                                                </div>
                                                            </td>

                                                            <td>
                                                                <div className='div-p mt-3 d-flex align-items-center'>
                                                                    <p className='p'>500 €</p>
                                                                </div>

                                                            </td>

                                                            <td>
                                                                <div className='div-para mt-3 d-flex align-items-center'>
                                                                    <p className='para'>Livré</p>
                                                                </div>
                                                            </td>

                                                            <td>
                                                                <div className='mt-3 d-flex flex-row justify-content-center align-items-center'>
                                                                    <IoEyeSharp className='text-success' />
                                                                    <AiFillDelete className='text-danger ms-3' />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-12">
                        <SidebarFooter />
                    </div>
                </div>
            </div>
            <Newsletter />
            <Footer />

        </div>
    )
}

export default Commande
