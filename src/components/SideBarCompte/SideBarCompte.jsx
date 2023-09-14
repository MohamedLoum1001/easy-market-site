import React from 'react'
import './SideBarCompte.css';
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { ImFolderUpload } from "react-icons/im";
import { FaCartShopping } from "react-icons/fa6";

const SideBarCompte = () => {
    return (
        <div className='sidebar'>
            <div className='container'>
            <div className="row my-3">
                <ul className='ul me-4'>
                    <Link to="/profil" className="link text-decoration-none text-dark p-1 my-2">
                        <li className='li'>
                            <FaUserAlt className='ICON mb-0' /> <span className='compte mb-0 ms-1'>Mon profil</span>
                        </li>
                    </Link>

                    <Link to="/commande" className="link text-decoration-none text-dark p-1 my-2">
                        <li lassName='li'>
                            <ImFolderUpload className='ICON mb-0' /> <span className='compte mb-0 ms-1'>Mes commandes</span>
                        </li>
                    </Link>

                    <Link to="/monpanier" className="link text-decoration-none text-dark p-1 my-2">
                        <li lassName='li'>
                            <FaCartShopping className='ICON mb-0' /> <span className='compte mb-0 ms-1'>Mon panier</span>
                        </li>
                    </Link>

                    <Link to="/favoris" className="link text-decoration-none text-dark p-1 my-2">
                        <li lassName='li'>
                            <AiFillHeart className='ICON mb-0' /> <span className='compte mb-0 ms-1'>Mes favoris</span>
                        </li>
                    </Link>
                </ul>

                <ul className='ul'>
                <Link to="/logout" className="text-decoration-none text-dark p-2">
                        <li className='li'>
                            <span className='deconnexion mb-0 ms-3'>Déconnexion</span>
                        </li>
                    </Link>
                </ul>
            </div>

        </div>
        </div>
    )
}

export default SideBarCompte
