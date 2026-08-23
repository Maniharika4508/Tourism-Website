import React from "react";
import "./EcoTourism.css";

const destinations = [
  {
    name: "Betla National Park",
    category: "Wildlife & Forest",
    description:
      "Explore dense forests and discover the rich wildlife and natural beauty of one of Jharkhand's famous eco-tourism destinations.",
    image: "/images/betla.jpg",
  },
  {
    name: "Netarhat",
    category: "Hills & Nature",
    description:
      "Experience peaceful hills, beautiful landscapes and memorable sunrise and sunset views surrounded by nature.",
    image: "/images/netarhat.jpg",
  },
  {
    name: "Dalma",
    category: "Forest & Wildlife",
    description:
      "Discover scenic forest landscapes and wildlife experiences while enjoying the peaceful surroundings of Dalma.",
    image: "/images/dalma.jpg",
  },
  {
    name: "Hundru Falls",
    category: "Waterfall & Nature",
    description:
      "Witness the beauty of cascading water surrounded by rocky landscapes and lush greenery.",
    image: "/images/hundru.jpg",
  },
];

function EcoTourism() {
  const scrollToDestinations = () => {
    document
      .getElementById("eco-destinations")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="eco-page">

      {/* ================= HERO ================= */}
      <section className="eco-hero">

        <div className="hero-overlay">
          <span className="hero-label">
            🌿 EXPLORE RESPONSIBLY
          </span>

          <h1>ECOTOURISM IN JHARKHAND</h1>

          <p className="hero-text">
            Jharkhand is a land of dense forests, majestic hills, cascading
            waterfalls and rich wildlife. Eco-tourism offers travellers an
            opportunity to experience this natural beauty while caring for
            the environment and respecting local communities.
          </p>

          <p className="hero-tagline">
            Explore responsibly. Experience deeply. Leave a positive footprint.
          </p>

          <button
            className="hero-button"
            onClick={scrollToDestinations}
          >
            Explore Destinations →
          </button>
        </div>

      </section>


      {/* ================= INTRO ================= */}
      <section className="eco-intro">

        <div className="section-heading">
          <span>DISCOVER THE WILD SIDE</span>

          <h2>Why Jharkhand for Eco Tourism?</h2>

          <p>
            From peaceful forests and scenic hills to spectacular waterfalls
            and diverse wildlife, Jharkhand offers unforgettable experiences
            for travellers who want to connect with nature.
          </p>
        </div>


        <div className="nature-grid">

          <div className="nature-card">
            <div className="nature-icon">🌲</div>
            <h3>Dense Forests</h3>
            <p>
              Explore rich green landscapes and peaceful forest environments.
            </p>
          </div>


          <div className="nature-card">
            <div className="nature-icon">🏔️</div>
            <h3>Hills & Landscapes</h3>
            <p>
              Discover scenic hills, viewpoints and beautiful natural
              landscapes.
            </p>
          </div>


          <div className="nature-card">
            <div className="nature-icon">💧</div>
            <h3>Waterfalls</h3>
            <p>
              Experience spectacular waterfalls surrounded by lush greenery.
            </p>
          </div>


          <div className="nature-card">
            <div className="nature-icon">🐘</div>
            <h3>Wildlife</h3>
            <p>
              Discover diverse wildlife and natural habitats across Jharkhand.
            </p>
          </div>

        </div>

      </section>


      {/* ================= DESTINATIONS ================= */}
      <section
        className="eco-destinations"
        id="eco-destinations"
      >

        <div className="section-heading">

          <span>EXPLORE NATURE</span>

          <h2>Eco-Tourism Destinations</h2>

          <p>
            Discover some of the beautiful places where nature and responsible
            travel come together.
          </p>

        </div>


        <div className="destination-grid">

          {destinations.map((place) => (

            <div
              className="destination-card"
              key={place.name}
            >

              <div className="destination-image">

                <img
                  src={place.image}
                  alt={place.name}
                />

                <span className="destination-category">
                  {place.category}
                </span>

              </div>


              <div className="destination-content">

                <h3>{place.name}</h3>

                <p>
                  {place.description}
                </p>

                <button className="explore-button">
                  Explore →
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* ================= RESPONSIBLE TRAVEL ================= */}
      <section className="responsible-section">

        <div className="section-heading">

          <span>TRAVEL GREEN</span>

          <h2>How You Can Travel Responsibly</h2>

          <p>
            Small actions by travellers can make a big difference in
            protecting Jharkhand's natural beauty.
          </p>

        </div>


        <div className="responsible-grid">

          <div className="responsible-card">
            <div>🚯</div>
            <h3>No Plastic</h3>
            <p>
              Avoid single-use plastics and carry reusable alternatives.
            </p>
          </div>


          <div className="responsible-card">
            <div>🌳</div>
            <h3>Protect Nature</h3>
            <p>
              Do not damage plants, rocks or other natural surroundings.
            </p>
          </div>


          <div className="responsible-card">
            <div>🪶</div>
            <h3>Respect Local Communities</h3>
            <p>
              Respect local traditions, culture and the people who call these
              places home.
            </p>
          </div>


          <div className="responsible-card">
            <div>🤝</div>
            <h3>Support Local People</h3>
            <p>
              Choose local guides, artisans, homestays and small businesses.
            </p>
          </div>


          <div className="responsible-card">
            <div>🗑️</div>
            <h3>Leave No Trace</h3>
            <p>
              Take your waste with you and leave natural places clean.
            </p>
          </div>

        </div>

      </section>


      {/* ================= IMPACT ================= */}
      <section className="impact-section">

        <div className="impact-content">

          <span>💚 OUR IMPACT</span>

          <h2>
            Your Journey Can Protect
            <br />
            The Place You Came To Explore.
          </h2>

          <p>
            Eco-tourism helps conserve nature, creates opportunities for local
            communities and encourages travellers to experience Jharkhand
            responsibly. By making thoughtful travel choices, every visitor
            can contribute to protecting the forests, wildlife and cultural
            heritage of this beautiful land.
          </p>

        </div>

      </section>


      {/* ================= FINAL CTA ================= */}
      <section className="eco-final">

        <div>

          <span>🌿 EXPLORE JHARKHAND RESPONSIBLY</span>

          <h2>Ready to Discover Nature?</h2>

          <p>
            Your next adventure can be beautiful for you and beneficial for
            the place you visit.
          </p>


          <div className="final-buttons">

            <button className="back-button">
              ← Back to Explore
            </button>

            <button className="next-button">
              Explore Waterfalls →
            </button>

          </div>

        </div>

      </section>

    </div>
  );
}

export default EcoTourism;