import './App.css';
import Header from './Header';
import Home from './options/Home';
import Chicken from './options/Chicken';
import Mutton from './options/Mutton';
import Fish from './options/Fish';
import Eggs from './options/Eggs';
import ColdCut from './options/Cold-Cuts';
import Readytocook from './options/Ready-to-cook';
import Masala from './options/Masala';
import Contact from './options/Contact';
import Footer from './Footer';
import Product from './options/Product'
import Cart from './options/Cart'
import Admin from './options/Admin'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chicken" element={<Chicken />} />
          <Route path="/mutton" element={<Mutton />} />
          <Route path="/fish" element={<Fish />} />
          <Route path="/eggs" element={<Eggs />} />
          <Route path="/cold-cuts" element={<ColdCut />} />
          <Route path="/ready-to-cook" element={<Readytocook />} />
          <Route path="/masala" element={<Masala />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<Admin/>}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
