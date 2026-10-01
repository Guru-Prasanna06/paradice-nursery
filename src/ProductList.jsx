import { useDispatch, useSelector } from 'react-redux';
import Navbar from './components/Navbar.jsx';
import { addToCart, selectCartItems } from './redux/CartSlice.jsx';

const img = (file) => new URL(`./assets/plants/${file}.svg`, import.meta.url).href;

const plants = [
  // Indoor Plants
  { id: 1, name: 'Snake Plant', category: 'Indoor Plants', price: 15, image: img('snake-plant'), description: 'Tough, upright leaves that thrive on low light and neglect.' },
  { id: 2, name: 'Peace Lily', category: 'Indoor Plants', price: 18, image: img('peace-lily'), description: 'Glossy leaves and white blooms that help freshen indoor air.' },
  { id: 3, name: 'Spider Plant', category: 'Indoor Plants', price: 12, image: img('spider-plant'), description: 'Arching striped leaves and baby plantlets, great for hanging pots.' },
  { id: 4, name: 'ZZ Plant', category: 'Indoor Plants', price: 22, image: img('zz-plant'), description: 'Shiny dark leaves that tolerate dry spells and dim corners.' },
  { id: 5, name: 'Monstera', category: 'Indoor Plants', price: 28, image: img('monstera'), description: 'Large split leaves that add a bold tropical look.' },
  { id: 6, name: 'Pothos', category: 'Indoor Plants', price: 10, image: img('pothos'), description: 'Fast-growing trailing vine, perfect for beginners.' },
  // Outdoor Plants
  { id: 7, name: 'Lavender', category: 'Outdoor Plants', price: 14, image: img('lavender'), description: 'Fragrant purple flowers that attract bees and butterflies.' },
  { id: 8, name: 'Rose Bush', category: 'Outdoor Plants', price: 20, image: img('rose-bush'), description: 'Classic garden shrub with beautiful, scented blooms.' },
  { id: 9, name: 'Hydrangea', category: 'Outdoor Plants', price: 25, image: img('hydrangea'), description: 'Big, colourful flower clusters for shady garden spots.' },
  { id: 10, name: 'Boxwood', category: 'Outdoor Plants', price: 24, image: img('boxwood'), description: 'Evergreen shrub that is easy to shape into hedges.' },
  { id: 11, name: 'Boston Fern', category: 'Outdoor Plants', price: 16, image: img('fern'), description: 'Soft, feathery fronds for porches and shaded patios.' },
  { id: 12, name: 'Marigold', category: 'Outdoor Plants', price: 8, image: img('marigold'), description: 'Cheerful orange flowers that brighten any flower bed.' },
  // Succulents
  { id: 13, name: 'Aloe Vera', category: 'Succulents', price: 11, image: img('aloe-vera'), description: 'Soothing gel-filled leaves and very low water needs.' },
  { id: 14, name: 'Jade Plant', category: 'Succulents', price: 13, image: img('jade-plant'), description: 'Thick, rounded leaves; a symbol of good luck.' },
  { id: 15, name: 'Echeveria', category: 'Succulents', price: 9, image: img('echeveria'), description: 'Pretty rose-shaped rosette in soft blue-green tones.' },
  { id: 16, name: 'Haworthia', category: 'Succulents', price: 10, image: img('haworthia'), description: 'Small striped succulent that grows well indoors.' },
  { id: 17, name: 'String of Pearls', category: 'Succulents', price: 17, image: img('string-of-pearls'), description: 'Trailing strands of bead-like leaves for hanging baskets.' },
  { id: 18, name: "Burro's Tail", category: 'Succulents', price: 15, image: img('burros-tail'), description: 'Long, braided stems covered in plump green leaves.' },
];

const categories = ['Indoor Plants', 'Outdoor Plants', 'Succulents'];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  // A plant is "added" if it exists in the Redux cart
  const isInCart = (id) => cartItems.some((item) => item.id === id);

  const handleAdd = (plant) => {
    dispatch(addToCart({ id: plant.id, name: plant.name, image: plant.image, price: plant.price }));
  };

  return (
    <div>
      <Navbar />
      <main className="page">
        <h1>Our Plants</h1>
        {categories.map((category) => (
          <section key={category} className="category">
            <h2 className="category-title">{category}</h2>
            <div className="product-grid">
              {plants
                .filter((plant) => plant.category === category)
                .map((plant) => {
                  const added = isInCart(plant.id);
                  return (
                    <article key={plant.id} className="product-card">
                      <img src={plant.image} alt={plant.name} className="product-img" />
                      <h3>{plant.name}</h3>
                      <p className="price">${plant.price.toFixed(2)}</p>
                      <p className="description">{plant.description}</p>
                      <button
                        className="btn btn-primary"
                        disabled={added}
                        onClick={() => handleAdd(plant)}
                      >
                        {added ? 'Added to Cart' : 'Add to Cart'}
                      </button>
                    </article>
                  );
                })}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default ProductList;
