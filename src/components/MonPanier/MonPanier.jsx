import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Header from '../../components/Header/Header'
import Newsletter from '../../components/Newsletter/Newsletter'
import Footer from '../../components/Footer/Footer'
import SideBarCompte from '../SideBarCompte/SideBarCompte'
import TablePanier from '../TablePanier/TablePanier'
const MonPanier = () => {
    return (
        <div>
            <Header />
            <NavBar />
            <div className='container'>
                <div className="row my-3">
                    <div className="col-2">
                        <SideBarCompte />
                    </div>
                    <div className="col-10">
                        <div className='title'>
                            <h1>Mon panier</h1>
                        </div>
                        <TablePanier />

                    </div>
                </div>
            </div>

            <Newsletter />
            <Footer />
        </div>
    )
}

export default MonPanier
