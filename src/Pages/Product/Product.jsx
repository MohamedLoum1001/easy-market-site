import React from 'react'
import './Product.css';
import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import Newsletter from '../../components/Newsletter/Newsletter'
import Footer from '../../components/Footer/Footer'
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import Sidebar from '../../components/Sidebar/Sidebar'
import NosProduits from '../../components/NosProduits/NosProduits'

const Product = () => {
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
      <div className="container">
        <div className="row">
          <div className="col-lg-3 colonne">
            <Sidebar />
          </div>
          <div className="col-lg-9 col-md-12 d-flex justify-content-center align-items-center">
            <NosProduits />
          </div>
          
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Product
