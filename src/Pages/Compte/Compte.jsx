import React from 'react'
import './Compte.css';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import Newsletter from '../../components/Newsletter/Newsletter';
import Footer from '../../components/Footer/Footer';
import SideBarCompte from '../../components/SideBarCompte/SideBarCompte';
import Formulaire from '../../components/Formulaire/Formulaire';
import SidebarFooter from '../../components/SidebarFooter/SidebarFooter';

const Compte = () => {
    return (
        <div>
            <Header />
            <NavBar />
            <div className='container my-3'>
                <div className="row">
                    <div className="col-lg-2">
                        <SideBarCompte />
                    </div>

                    <div className="col-lg-10 col-md-12 col-sm-12 d-flex flex-column my-4">
                        <div className='title p-2'>
                            <h1>Mon profil</h1>
                        </div>
                        <div className="my-3">
                            <Formulaire />
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

export default Compte
