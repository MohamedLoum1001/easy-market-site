import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Pages/Home/Home';
import Product from './Pages/Product/Product';
import Homme from './Pages/Hommes/Homme';
import Crown from './Pages/Crown/Crown';
import Panier from './Pages/Panier/Panier';
import Compte from './Pages/Compte/Compte';
import Commande from './Pages/Comande/Commande';
import MonPanier from './components/MonPanier/MonPanier';
import Favoris from './components/Favoris/Favoris';





function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/produits' element={<Product />} />
          <Route path='/produits/hommes' element={<Homme />} />
          <Route path='/produits/hommes/crown' element={<Crown />} />
          <Route path='/panier' element={<Panier />} />
          <Route path='/compte' element={<Compte />} />
          <Route path='/commande' element={<Commande />} />
          <Route path='/monpanier' element={<MonPanier />} />
          <Route path='/favoris' element={<Favoris />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
