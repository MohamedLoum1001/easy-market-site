import React from 'react'
import './Produits.css';
import garçon from "../../assets/garçon.png";
import chaussure from "../../assets/chaussure.png";
import parfum from "../../assets/parfum.png";
import parfum1 from "../../assets/parfum1.png";
import ceinture from "../../assets/ceinture.png";
import cocacola from "../../assets/cocacola.png";
import parfumFemme from "../../assets/parfum-femme.png";
import sacFille from "../../assets/sac-fille.png";
import bote from "../../assets/bote.png";
import montre from "../../assets/montre.png";
import storie from "../../assets/storie.png";
import nike from "../../assets/nike.png";

const Produits = () => {
    return (
        <section className='produits bg-transparent p-4'>
            <div className='container p-3'>
                <div className="row">
                    <div className="text-center">
                        <h1 className='fw-bold'>Nos Produits</h1>
                    </div>
                </div>

                <div id="carouselExampleControls" className="carousel slide my-3" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="cards-wrapper">

                                <div className="card border-0">
                                    <div className="image-wrapper p-2">
                                        <img src={garçon} alt="garçon" className="mx-auto" />
                                        <div className="text-center mb-3 border">
                                            <p className="p-texte text-center">Cotton shirt regular fit</p>
                                            <p className='paragraphe text-center'>150 000 fca</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card border-0">
                                    <div className="image-wrapper p-2">
                                        <img src={chaussure} alt="chaussure" className="mx-auto" />
                                        <div className="text-center mb-3">
                                            <p className="p-texte text-center">Cotton shirt regular fit</p>
                                            <p className='paragraphe text-center'>150 000 fca</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card border-0">
                                    <div className="image-wrapper p-2">
                                        <img src={parfum} alt="parfum" className="mx-auto" />
                                        <div className="text-center mb-3">
                                            <p className="p-texte text-center">Cotton shirt regular fit</p>
                                            <p className='paragraphe text-center'>150 000 fca</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card border-0">
                                    <div className="image-wrapper p-2">
                                        <img src={parfum1} alt="parfum1" className="mx-auto" />
                                        <div className="text-center mb-3">
                                            <p className="p-texte text-center">Cotton shirt regular fit</p>
                                            <p className='paragraphe text-center'>150 000 fca</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* SLIDE 2 */}

                        <div className="carousel-item">
                            <div className="cards-wrapper">

                                <div className="card border-0">
                                    <div className="image-wrapper p-2">
                                        <img src={ceinture} alt="ceinture" className="mx-auto" />
                                        <div className="text-center mb-3">
                                            <p className="p-texte text-center">Cotton shirt regular fit</p>
                                            <p className='paragraphe text-center'>150 000 fca</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card border-0">
                                    <div className="image-wrapper p-2">
                                        <img src={cocacola} alt="cocacola" className="mx-auto" />
                                        <div className="text-center mb-3">
                                            <p className="p-texte text-center">Cotton shirt regular fit</p>
                                            <p className='paragraphe text-center'>150 000 fca</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card border-0">
                                    <div className="image-wrapper p-2">
                                        <img src={parfumFemme} alt="parfumFemme" className="mx-auto" />
                                        <div className="text-center mb-3">
                                            <p className="p-texte text-center">Cotton shirt regular fit</p>
                                            <p className='paragraphe text-center'>150 000 fca</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card border-0">
                                    <div className="image-wrapper p-2">
                                        <img src={sacFille} alt="sacFille" className="mx-auto" />
                                        <div className="text-center mb-3">
                                            <p className="p-texte text-center">Cotton shirt regular fit</p>
                                            <p className='paragraphe text-center'>150 000 fca</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* SLIDE 3 */}
                        <div className="carousel-item">
                            <div className="cards-wrapper">

                                <div className="card border-0">
                                    <div className="image-wrapper p-2">
                                        <img src={bote} alt="bote" className="mx-auto" />
                                        <div className="text-center mb-3">
                                            <p className="p-texte text-center">Cotton shirt regular fit</p>
                                            <p className='paragraphe text-center'>150 000 fca</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card border-0">
                                    <div className="image-wrapper p-2">
                                        <img src={montre} alt="chaussure" className="mx-auto" />
                                        <div className="text-center mb-3">
                                            <p className="p-texte text-center">Cotton shirt regular fit</p>
                                            <p className='paragraphe text-center'>150 000 fca</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card border-0">
                                    <div className="image-wrapper p-2">
                                        <img src={storie} alt="parfum" className="mx-auto" />
                                        <div className="text-center mb-3">
                                            <p className="p-texte text-center">Cotton shirt regular fit</p>
                                            <p className='paragraphe text-center'>150 000 fca</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card border-0">
                                    <div className="image-wrapper p-2">
                                        <img src={nike} alt="parfum1" className="mx-auto" />
                                        <div className="text-center mb-3">
                                            <p className="p-texte text-center">Cotton shirt regular fit</p>
                                            <p className='paragraphe text-center'>150 000 fca</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* SLIDE 4 */}
                        {/* <div className="carousel-item">
                            <div className="cards-wrapper">

                                <div className="card border-0">
                                    <div className="image-wrapper p-2">
                                        <img src={garçon} alt="garçon" className="mx-auto" />
                                        <div className="text-center mb-3">
                                            <p className="fw-bold">Cotton shirt regular fit</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card border-0">
                                    <div className="image-wrapper p-2">
                                        <img src={chaussure} alt="chaussure" className="mx-auto" />
                                        <div className="text-center mb-3">
                                            <p className="fw-bold">Cotton shirt regular fit</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card border-0">
                                    <div className="image-wrapper p-2">
                                        <img src={parfum} alt="parfum" className="mx-auto" />
                                        <div className="text-center mb-3">
                                            <p className="fw-bold">Cotton shirt regular fit</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card border-0">
                                    <div className="image-wrapper p-2">
                                        <img src={parfum1} alt="parfum1" className="mx-auto" />
                                        <div className="text-center mb-3">
                                            <p className="fw-bold">Cotton shirt regular fit</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <button className="carousel-control-prev shadow" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next shadow" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </div>
        </section>
    )
}

export default Produits
