# Paradise Nursery

Paradise Nursery is an online plant shop built as a React + Redux shopping cart application.
Visitors can read about the nursery, browse 18 plants in 3 categories, add them to a cart,
change quantities, delete items and see live totals.

## Technologies Used
- React 18 (JavaScript, no TypeScript)
- Vite
- Redux Toolkit and React Redux
- React Router
- CSS

## Main Features
- Landing page with a background image and a **Get Started** button
- About Us page with company information
- Plant listing in 3 categories (Indoor, Outdoor, Succulents), 6 plants each
- **Add to Cart** button that becomes a disabled **Added to Cart** button (driven by Redux state)
- Navbar (Home, Plants, Cart) with a live cart item count
- Cart page: thumbnail, unit price, quantity +/-, item total, Delete, overall total
- Checkout button showing a "Coming Soon" message, and Continue Shopping button

## How to Install and Run
```bash
npm install
npm run dev
```
Then open the local URL shown in the terminal (usually http://localhost:5173).

## Routes
- `/` Landing page
- `/plants` Product listing
- `/cart` Shopping cart
- `/about` About Us

## Basic Project Structure
```
paradise-nursery/
├── README.md
├── package.json
├── index.html
├── vite.config.js
└── src/
    ├── main.jsx            (Provider + Router setup)
    ├── App.jsx             (landing page + routes)
    ├── App.css             (all styles, landing background)
    ├── AboutUs.jsx
    ├── ProductList.jsx
    ├── CartItem.jsx        (cart page)
    ├── components/Navbar.jsx
    ├── redux/store.js
    ├── redux/CartSlice.jsx
    └── assets/             (hero background + plant images)
```
