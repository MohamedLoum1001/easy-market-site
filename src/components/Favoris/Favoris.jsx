import React from 'react'
import Header from '../Header/Header'
import NavBar from '../NavBar/NavBar'
import SideBarCompte from '../SideBarCompte/SideBarCompte'
import Newsletter from '../Newsletter/Newsletter'
import Footer from '../Footer/Footer'
import { similaire } from '../../data/Data'

const Favoris = () => {
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
                    <div className="row g-3">
                        {similaire.map((image) => (
                            <div className="col-lg-3 col-md-6 col-sm-12 mt-4">
                                <div className='d-flex flex-column align-items-start'>
                                    <img src={image.img} alt="image" className='image-cartes mx-auto' />
                                </div>
                                <div className='d-flex flex-column align-items-start p-4 ms-sm-3'>
                                    <p className='p-texte text-center'>{image.title}</p>
                                    <p className='paragraphe text-center'>{image.texte}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    </div>
                </div>
            </div>

            <Newsletter />
            <Footer />
        </div>
    )
}

export default Favoris
