import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Header from '../../components/Header/Header'
import Newsletter from '../../components/Newsletter/Newsletter'
import Footer from '../../components/Footer/Footer'
import SideBarCompte from '../SideBarCompte/SideBarCompte'
import TablePanier from '../TablePanier/TablePanier'
import SidebarFooter from '../SidebarFooter/SidebarFooter'
const MonPanier = () => {
    return (
        <div>
            <Header />
            <NavBar />
            <div className='container'>
                <div className="row my-3">
                    <div className="col-lg-2">
                        <SideBarCompte />
                    </div>
                    <div className="col-lg-10 col-md-12 col-sm-12 my-4">
                        <div className='title p-2'>
                            <h1>Mon panier</h1>
                        </div>
                        <TablePanier />

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

export default MonPanier
