import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";
import Footer from "../components/Footer";

function Home() {

  const categories = [
    {
      icon: "🌳",
      title: "Eco Tourism",
      description: "Explore forests, wildlife and sustainable destinations.",
      color: "#d8f3dc"
    },
    {
      icon: "🪘",
      title: "Cultural Tourism",
      description: "Experience the traditions, music and heritage of Jharkhand.",
      color: "#ffe0b2"
    },
    {
      icon: "💧",
      title: "Waterfalls",
      description: "Discover beautiful waterfalls hidden inside nature.",
      color: "#ccecf7"
    },
    {
      icon: "🪶",
      title: "Tribal Experiences",
      description: "Connect with local communities and traditional lifestyles.",
      color: "#ead5bc"
    },
    {
      icon: "🍲",
      title: "Local Food",
      description: "Taste authentic flavours and traditional cuisine.",
      color: "#ffe6a8"
    },
    {
      icon: "🎨",
      title: "Handicrafts",
      description: "Discover beautiful handmade art from local artisans.",
      color: "#f5d1cf"
    },
    {
      icon: "🎉",
      title: "Festivals",
      description: "Celebrate colourful festivals and local traditions.",
      color: "#e3d4f6"
    }
  ];

  return (
    <>
      <Navbar />

      <Hero />

      <section className="explore-section" id="explore">

        <div className="section-heading">

          <span>EXPLORE • EXPERIENCE • CONNECT</span>

          <h2>
            Discover <strong>Jharkhand</strong>
          </h2>

          <p>
            From lush forests to rich tribal heritage,
            discover experiences that connect you with
            the heart of Jharkhand.
          </p>

        </div>

        <div className="category-grid">

          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              icon={category.icon}
              title={category.title}
              description={category.description}
              color={category.color}
            />
          ))}

        </div>

      </section>


      <section className="destination-section" id="destinations">

        <div className="section-heading">

          <span>MUST VISIT</span>

          <h2>
            Popular <strong>Destinations</strong>
          </h2>

        </div>

        <div className="destination-grid">

          <div className="destination">
            <div className="destination-image">🌊</div>
            <small>RANCHI</small>
            <h3>Hundru Falls</h3>
            <p>Experience the beauty of Jharkhand's spectacular waterfall.</p>
          </div>

          <div className="destination">
            <div className="destination-image">💧</div>
            <small>RANCHI</small>
            <h3>Dassam Falls</h3>
            <p>A beautiful natural destination surrounded by greenery.</p>
          </div>

          <div className="destination">
            <div className="destination-image">🏔️</div>
            <small>EAST SINGHBHUM</small>
            <h3>Dalma Hills</h3>
            <p>Explore scenic landscapes and natural surroundings.</p>
          </div>

        </div>

      </section>


      <section className="purpose-section">

        <div>
          <span>TRAVEL DIFFERENTLY</span>

          <h2>
            Travel with a <strong>Purpose.</strong>
          </h2>

          <p>
            Our platform helps you discover Jharkhand while
            supporting local communities and protecting nature.
          </p>

          <button>
            Create My Journey →
          </button>
        </div>

        <div className="impact-grid">

          <div>🌱<br /><b>Eco Friendly</b></div>
          <div>🏘️<br /><b>Local Communities</b></div>
          <div>🎭<br /><b>Preserve Culture</b></div>
          <div>💚<br /><b>Meaningful Travel</b></div>

        </div>

      </section>

      <Footer />

    </>
  );
}

export default Home;