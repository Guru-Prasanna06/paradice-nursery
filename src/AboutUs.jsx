import { Link } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';

function AboutUs() {
  return (
    <div>
      <Navbar />
      <main className="page about">
        <h1>About Paradise Nursery</h1>
        <p className="lead">
          Paradise Nursery is a family-run online plant shop that helps people turn any space,
          from a sunny balcony to a small desk, into a living green corner.
        </p>
        <div className="about-grid">
          <section className="about-card">
            <h2>What We Sell</h2>
            <p>
              Healthy indoor plants, hardy outdoor garden plants and low-maintenance succulents.
              Every plant is grown with care and checked before it leaves our greenhouse.
            </p>
          </section>
          <section className="about-card">
            <h2>Our Mission</h2>
            <p>
              To make gardening simple and joyful for everyone by offering quality plants,
              honest care advice and fair prices.
            </p>
          </section>
          <section className="about-card">
            <h2>Why Home Gardening?</h2>
            <p>
              Plants brighten a room, freshen the air and reduce stress. Growing something
              yourself is a rewarding habit that connects you with nature, even in the city.
            </p>
          </section>
          <section className="about-card">
            <h2>Beginner Tips</h2>
            <p>
              Match each plant to its light, water it only when the top soil is dry, and use a
              pot with drainage holes. Start with easy plants like Pothos or Snake Plant.
            </p>
          </section>
        </div>
        <Link to="/plants" className="btn btn-primary">Browse Plants</Link>
      </main>
    </div>
  );
}

export default AboutUs;
