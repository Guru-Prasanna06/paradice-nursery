import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTotalItems } from '../redux/CartSlice.jsx';

function Navbar() {
  const totalItems = useSelector(selectTotalItems);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">🌿 Paradise Nursery</Link>
      <div className="navbar-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/plants">Plants</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/cart" className="cart-link">🛒 Cart ({totalItems})</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
