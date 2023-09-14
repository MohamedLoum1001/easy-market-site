import React from 'react'
import './Compte.css';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import Newsletter from '../../components/Newsletter/Newsletter';
import Footer from '../../components/Footer/Footer';
import SideBarCompte from '../../components/SideBarCompte/SideBarCompte';
import Formulaire from '../../components/Formulaire/Formulaire';

const Compte = () => {
    return (
        <div>
            <Header />
            <NavBar />
            <div className='container'>
                <div className="row">
                    <div className="col-2">
                        <SideBarCompte />
                    </div>

                    <div className="col-10 d-flex flex-column">
                        <div className='title'>
                            <h1>Mon profil</h1>
                        </div>
                       <div className="my-3">
                       <Formulaire />
                       </div>
                    </div>
                </div>
            </div>
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Compte
