import React from 'react'
import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import Banner from '../../components/Banner/Banner'
import Services from '../../components/Services/Services'
import Produits from '../../components/Produits/Produits'
import ProdPopulaire from '../../components/ProdPopulaire/ProdPopulaire'
import Temoignage from '../../components/Temoignage/Temoignage'
import Newsletter from '../../components/Newsletter/Newsletter'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <Banner />
      <Services />
      <Produits />
      <ProdPopulaire />
      <Temoignage />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home
