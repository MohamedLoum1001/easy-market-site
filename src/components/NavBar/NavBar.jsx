import React from 'react'
import './NavBar.css';
import logo from "../../assets/Logo-navbar.png";
import { BiUser, BiSearch } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineBars } from "react-icons/ai";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <section className='border-top'>
            <div class="container align-items-center">
                <div className="row justify-content-center align-items-center p-1">
                    <div className="col-lg-2 col-md-12 col-sm-12  d-flex justify-content-center">
                        <img src={logo} alt="logo-navbar" className='img-fluid mx-auto mb-0' />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <form className='d-flex flex-row'>
                            <div class="input-group mb-3">
                                <span className="input-group-text position-relative border-end-0 bg-transparent" id="basic-addon1"><BiSearch className='icon' /></span>
                                <input type="text" className="form-control bg-transparent border-start-0 border-end-0  position-relative" placeholder='rechercher un produit' aria-label="Username" aria-describedby="basic-addon1" />
                                <span id="basic-addon2" className='border-end border-top border-bottom'><AiOutlineBars className='Icons bg-transparent' /></span>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 d-flex flex-row justify-content-evenly align-items-center">
                        <div className='d-flex flex-row justify-content-center align-items-center'>
                            <BiUser className='Icons mb-0' />
                            <Link to="/compte" className='text-decoration-none  mb-0'>
                                <p className='nav-p text-dark mb-0'>Mon compte</p>
                            </Link>
                        </div>

                        <div className='d-flex flex-row justify-content-center align-items-center'>
                            <AiOutlineHeart className='Icons mb-0' />
                            <Link to="/favoris" className='text-decoration-none  mb-0'>
                                <p className='nav-p text-dark mb-0'>Favoris</p>
                            </Link>
                        </div>

                        <div className='d-flex flex-row justify-content-center align-items-center'>
                            <AiOutlineShoppingCart className='Icons mb-0' />
                            <Link to="/panier" className='text-decoration-none  mb-0'>
                                <p className='nav-p text-dark mb-0'>Panier</p>
                            </Link>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default NavBar
