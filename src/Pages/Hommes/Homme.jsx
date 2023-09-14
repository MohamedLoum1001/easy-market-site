import React from 'react'
import './Homme.css';
import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import Newsletter from '../../components/Newsletter/Newsletter'
import Footer from '../../components/Footer/Footer'
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import Sidebar from '../../components/Sidebar/Sidebar'
import NosProduits from '../../components/NosProduits/NosProduits'
import main from "../../assets/main.png";


const Homme = () => {
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
            <div className="container ">
                <div className="row">
                    <div className="col-3">
                        <Sidebar />
                    </div>
                    <div className="col-9">
                        <div className='d-flex flex-row justify-content-start align-items-start mb-3'>
                            <div>
                                <img src={main} alt="la main" className='img-fluid mx-auto' />
                            </div>
                            <div className='ms-1'>
                                <p className='fw-bold'>Hommes</p>
                            </div>
                        </div>
                        <NosProduits />
                    </div>
                </div>
            </div>
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Homme
