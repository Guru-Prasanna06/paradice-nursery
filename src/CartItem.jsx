import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  selectCartItems,
  selectTotalPrice,
  selectTotalItems,
  selectItemTotal,
} from './redux/CartSlice.jsx';

function CartItem() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector(selectCartItems);
  const totalPrice = useSelector(selectTotalPrice);
  const totalItems = useSelector(selectTotalItems);
  const [showCheckout, setShowCheckout] = useState(false);

  return (
    <div>
      <Navbar />
      <main className="page">
        <h1>Shopping Cart</h1>

        {items.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          <div className="cart-list">
            {items.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-img" />
                <div className="cart-info">
                  <h3>{item.name}</h3>
                  <p>${item.price.toFixed(2)} each</p>
                  <div className="quantity-controls">
                    <button
                      className="qty-btn"
                      aria-label={`Decrease ${item.name}`}
                      disabled={item.quantity <= 1}
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                    >
                      -
                    </button>
                    <span className="qty">{item.quantity}</span>
                    <button
                      className="qty-btn"
                      aria-label={`Increase ${item.name}`}
                      onClick={() => dispatch(increaseQuantity(item.id))}
                    >
                      +
                    </button>
                  </div>
                  <p className="item-total">Item Total: ${selectItemTotal(item).toFixed(2)}</p>
                </div>
                <button className="btn btn-danger" onClick={() => dispatch(removeFromCart(item.id))}>
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="cart-summary">
          <p>Total items: {totalItems}</p>
          <h2>Total: ${totalPrice.toFixed(2)}</h2>
          <div className="cart-actions">
            <button className="btn btn-secondary" onClick={() => navigate('/plants')}>
              Continue Shopping
            </button>
            <button className="btn btn-primary" onClick={() => setShowCheckout(true)}>
              Checkout
            </button>
          </div>
          {showCheckout && (
            <div className="checkout-message" role="status">
              <strong>Coming Soon!</strong>
              <p>Checkout functionality will be available soon.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default CartItem;
