import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import ProductList from './ProductList.jsx';
import CartItem from './CartItem.jsx';
import AboutUs from './AboutUs.jsx';

function Landing() {
  const navigate = useNavigate();
  return (
    <div className="landing">
      <div className="landing-overlay">
        <h1>Paradise Nursery</h1>
        <p className="tagline">Where Green Meets Serenity</p>
        <p className="landing-text">
          Bring nature home with healthy, hand-picked houseplants, garden favourites and
          easy-care succulents delivered with love.
        </p>
        <button className="btn btn-primary btn-large" onClick={() => navigate('/plants')}>
          Get Started
        </button>
        <Link to="/about" className="landing-about-link">About Us</Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  );
}

export default App;
