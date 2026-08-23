import { useState } from "react";
import "./App.css";
import EcoTourism from "./pages/EcoTourism";

function App() {
  const [showJharkhand, setShowJharkhand] = useState(false);
  const [showEcoTourism, setShowEcoTourism] = useState(false);

  const categories = [
    {
      icon: "🌳",
      title: "Eco Tourism",
      description:
        "Explore lush forests, wildlife, waterfalls and sustainable destinations.",
    },
    {
      icon: "🪘",
      title: "Cultural Tourism",
      description:
        "Experience the rich traditions, music, dance and heritage of Jharkhand.",
    },
    {
      icon: "💧",
      title: "Waterfalls",
      description:
        "Discover breathtaking waterfalls surrounded by beautiful landscapes.",
    },
    {
      icon: "🪶",
      title: "Tribal Experiences",
      description:
        "Connect with tribal communities, traditions and authentic local life.",
    },
    {
      icon: "🍲",
      title: "Local Food",
      description:
        "Taste authentic Jharkhand cuisine and traditional local flavours.",
    },
    {
      icon: "🎨",
      title: "Handicrafts",
      description:
        "Discover beautiful handmade art and crafts created by local artisans.",
    },
    {
      icon: "🎉",
      title: "Festivals",
      description:
        "Celebrate colourful festivals, traditions and cultural celebrations.",
    },
  ];

  /* =========================
     ECO TOURISM PAGE
  ========================= */

  if (showEcoTourism) {
    return <EcoTourism />;
  }

  /* =========================
     JHARKHAND INFORMATION PAGE
  ========================= */

  if (showJharkhand) {
    return (
      <div className="jharkhand-page">

        {/* TOP NAVIGATION */}

        <nav className="navbar">

          <div className="logo">

            <span className="logo-icon">
              🌿
            </span>

            <div>
              <h2>Jharkhand</h2>
              <small>EXPLORE</small>
            </div>

          </div>

          <button
            className="back-btn"
            onClick={() => setShowJharkhand(false)}
          >
            ← Back to Home
          </button>

        </nav>


        {/* =========================
            WELCOME SECTION
        ========================= */}

        <section className="jharkhand-welcome">

          <div className="welcome-left">

            <span className="welcome-tag">
              🌿 DISCOVER • EXPERIENCE • EXPLORE
            </span>

            <h1>
              Welcome to <span>Jharkhand</span>
            </h1>

            <h2>
              A Land of Untamed Beauty,
              <br />
              Timeless Traditions & Living Heritage
            </h2>

            <p>
              Discover a land where magnificent waterfalls flow through
              lush green forests, ancient traditions live on through
              vibrant tribal communities, wildlife thrives in natural
              landscapes, and every journey reveals a new story.
            </p>

            <div className="welcome-highlights">

              <div>
                <span>🌊</span>
                <b>Waterfalls</b>
              </div>

              <div>
                <span>🌳</span>
                <b>Forests</b>
              </div>

              <div>
                <span>🪶</span>
                <b>Tribal Culture</b>
              </div>

              <div>
                <span>🐘</span>
                <b>Wildlife</b>
              </div>

            </div>

          </div>


          <div className="welcome-right">

            <div className="jharkhand-emblem">
              🌿
            </div>

            <div className="floating-icon icon-one">
              💧
            </div>

            <div className="floating-icon icon-two">
              🪶
            </div>

            <div className="floating-icon icon-three">
              🌳
            </div>

            <div className="floating-icon icon-four">
              🪘
            </div>

            <div className="welcome-circle">

              <span>EXPLORE</span>

              <strong>
                JHARKHAND
              </strong>

              <small>
                Nature • Culture • Heritage
              </small>

            </div>

          </div>

        </section>


        {/* =========================
            ABOUT JHARKHAND
        ========================= */}

        <section className="info-section">

          <div className="info-heading">

            <span>
              THE HEART OF EASTERN INDIA
            </span>

            <h2>
              Discover the <strong>Spirit of Jharkhand</strong>
            </h2>

          </div>

          <div className="info-content">

            <p>
              Jharkhand is a beautiful state known for its forests,
              hills, waterfalls, wildlife and rich tribal heritage.
              The name Jharkhand itself reflects its close connection
              with forests and nature.
            </p>

            <p>
              From peaceful hill stations and spectacular waterfalls
              to colourful festivals and traditional tribal art,
              Jharkhand offers travellers an opportunity to experience
              nature and culture together.
            </p>

            <p>
              It is a destination for travellers who want to explore
              beyond ordinary tourism and experience the authentic
              beauty, traditions and communities of the region.
            </p>

          </div>

        </section>


        {/* =========================
            WATERFALLS
        ========================= */}

        <section className="places-section">

          <div className="info-heading">

            <span>
              WATER • ROCKS • FORESTS
            </span>

            <h2>
              💧 Majestic <strong>Waterfalls</strong>
            </h2>

            <p>
              Jharkhand is blessed with spectacular waterfalls hidden
              among forests, hills and rocky landscapes.
            </p>

          </div>


          <div className="places-grid">

            <div className="place-card">

              <div className="place-icon">
                💧
              </div>

              <h3>Hundru Falls</h3>

              <p>
                One of the most famous waterfalls near Ranchi,
                where the Subarnarekha River creates a dramatic
                cascade surrounded by natural beauty.
              </p>

            </div>


            <div className="place-card">

              <div className="place-icon">
                🌊
              </div>

              <h3>Dassam Falls</h3>

              <p>
                A beautiful waterfall surrounded by forests and
                peaceful landscapes, making it a popular nature
                destination.
              </p>

            </div>


            <div className="place-card">

              <div className="place-icon">
                💦
              </div>

              <h3>Jonha Falls</h3>

              <p>
                Also known as Gautamdhara, this scenic waterfall
                combines natural beauty with a peaceful spiritual
                atmosphere.
              </p>

            </div>


            <div className="place-card">

              <div className="place-icon">
                🏞️
              </div>

              <h3>Lodh Falls</h3>

              <p>
                Located in a forested region, Lodh Falls is known
                for its impressive height and untouched surroundings.
              </p>

            </div>


            <div className="place-card">

              <div className="place-icon">
                💧
              </div>

              <h3>Panchghagh Falls</h3>

              <p>
                A beautiful natural attraction where multiple
                streams flow through rocky surroundings.
              </p>

            </div>


            <div className="place-card">

              <div className="place-icon">
                🌿
              </div>

              <h3>Hirni Falls</h3>

              <p>
                Surrounded by dense greenery, Hirni Falls offers
                a peaceful escape into Jharkhand's natural landscape.
              </p>

            </div>

          </div>

        </section>


        {/* =========================
            ECO TOURISM
        ========================= */}

        <section className="feature-section">

          <div className="feature-icon">
            🌳
          </div>

          <div>

            <span>
              FORESTS • HILLS • NATURE
            </span>

            <h2>
              Explore <strong>Eco Tourism</strong>
            </h2>

            <p>
              Jharkhand's forests, hills, rivers and natural
              landscapes make it a wonderful destination for
              responsible and sustainable tourism.
            </p>

            <p>
              Eco-tourism allows visitors to enjoy nature while
              respecting the environment and supporting local
              communities.
            </p>

          </div>

        </section>


        {/* =========================
            TRIBAL EXPERIENCES
        ========================= */}

        <section className="feature-section reverse">

          <div className="feature-icon">
            🪶
          </div>

          <div>

            <span>
              PEOPLE • TRADITIONS • HERITAGE
            </span>

            <h2>
              Experience <strong>Tribal Life</strong>
            </h2>

            <p>
              Jharkhand is home to diverse tribal communities
              with rich traditions, languages, art forms, music,
              dance and traditional knowledge.
            </p>

            <p>
              Responsible tourism can help visitors learn about
              these traditions while supporting local communities
              and artisans.
            </p>

          </div>

        </section>


        {/* =========================
            CULTURAL TOURISM
        ========================= */}

        <section className="places-section">

          <div className="info-heading">

            <span>
              TRADITIONS • MUSIC • ART • FESTIVALS
            </span>

            <h2>
              🪘 Rich <strong>Culture & Traditions</strong>
            </h2>

            <p>
              Experience the colourful cultural heritage that
              makes Jharkhand unique.
            </p>

          </div>


          <div className="culture-grid">

            <div className="culture-card">

              <span>🎉</span>

              <h3>Festivals</h3>

              <p>
                Experience traditional celebrations and
                community festivals filled with music and joy.
              </p>

            </div>


            <div className="culture-card">

              <span>💃</span>

              <h3>Folk Dance</h3>

              <p>
                Discover traditional dance forms that express
                the stories and identity of local communities.
              </p>

            </div>


            <div className="culture-card">

              <span>🎨</span>

              <h3>Traditional Art</h3>

              <p>
                Explore beautiful artistic traditions and
                handmade crafts created by local artisans.
              </p>

            </div>


            <div className="culture-card">

              <span>🥁</span>

              <h3>Music & Instruments</h3>

              <p>
                Feel the rhythm of traditional instruments,
                songs and performances.
              </p>

            </div>

          </div>

        </section>


        {/* =========================
            WILDLIFE
        ========================= */}

        <section className="feature-section">

          <div className="feature-icon">
            🐘
          </div>

          <div>

            <span>
              WILDLIFE • FORESTS • ADVENTURE
            </span>

            <h2>
              Discover <strong>Wildlife & Nature</strong>
            </h2>

            <p>
              Jharkhand's forests provide habitats for elephants,
              deer, birds and many other species.
            </p>

            <p>
              Places such as Betla National Park, Dalma Wildlife
              Sanctuary and other protected landscapes offer
              opportunities to experience the region's biodiversity.
            </p>

          </div>

        </section>


        {/* =========================
            HERITAGE
        ========================= */}

        <section className="places-section">

          <div className="info-heading">

            <span>
              HISTORY • SPIRITUALITY • HERITAGE
            </span>

            <h2>
              🛕 Heritage & <strong>Spiritual Places</strong>
            </h2>

          </div>


          <div className="places-grid">

            <div className="place-card">

              <div className="place-icon">
                🛕
              </div>

              <h3>Deoghar</h3>

              <p>
                A major spiritual destination known for the
                famous Baidyanath Temple.
              </p>

            </div>


            <div className="place-card">

              <div className="place-icon">
                🙏
              </div>

              <h3>Rajrappa</h3>

              <p>
                A significant pilgrimage destination surrounded
                by rivers and natural landscapes.
              </p>

            </div>


            <div className="place-card">

              <div className="place-icon">
                ⛰️
              </div>

              <h3>Parasnath</h3>

              <p>
                A prominent hill and important spiritual
                destination with scenic surroundings.
              </p>

            </div>

          </div>

        </section>


        {/* =========================
            LOCAL FOOD & HANDICRAFTS
        ========================= */}

        <section className="local-section">

          <div className="local-card">

            <div className="local-icon">
              🍲
            </div>

            <h2>
              Taste the Flavours of <strong>Jharkhand</strong>
            </h2>

            <p>
              Discover traditional local dishes, seasonal
              ingredients and authentic flavours that reflect
              the lifestyle and culture of Jharkhand.
            </p>

          </div>


          <div className="local-card">

            <div className="local-icon">
              🎨
            </div>

            <h2>
              Discover Local <strong>Handicrafts</strong>
            </h2>

            <p>
              Explore handmade crafts, traditional artwork and
              products created by local artisans and communities.
            </p>

          </div>

        </section>


        {/* =========================
            RESPONSIBLE TOURISM
        ========================= */}

        <section className="responsible-section">

          <span>
            TRAVEL WITH PURPOSE
          </span>

          <h2>
            Leave Only Footprints.
            <br />
            Take Back <strong>Memories.</strong>
          </h2>

          <p>
            Explore Jharkhand responsibly. Protect nature,
            respect local traditions and support the communities
            that make this land special.
          </p>


          <div className="responsible-grid">

            <div>
              🌳
              <b>Protect Nature</b>
            </div>

            <div>
              🚯
              <b>Say No to Plastic</b>
            </div>

            <div>
              🪶
              <b>Respect Tribal Culture</b>
            </div>

            <div>
              🤝
              <b>Support Local Communities</b>
            </div>

          </div>

        </section>


        {/* BACK BUTTON */}

        <div className="bottom-back">

          <button
            onClick={() => setShowJharkhand(false)}
          >
            ← Back to Explore Jharkhand
          </button>

        </div>


        {/* FOOTER */}

        <footer className="footer">

          <div className="footer-logo">
            🌿 Jharkhand Explore
          </div>

          <p>
            Discover. Respect. Preserve.
          </p>

          <div className="copyright">
            © 2026 Jharkhand Explore •
            Smart Digital Platform for Eco & Cultural Tourism
          </div>

        </footer>

      </div>
    );
  }


  /* =========================
     MAIN HOME PAGE
  ========================= */

  return (
    <div>

      {/* NAVBAR */}

      <nav className="navbar">

        <div className="logo">

          <span className="logo-icon">
            🌿
          </span>

          <div>

            <h2>
              Jharkhand
            </h2>

            <small>
              EXPLORE
            </small>

          </div>

        </div>


        <div className="nav-links">

          <a href="#home">
            Home
          </a>

          <a href="#explore">
            Explore
          </a>

          <a href="#eco">
            Eco Tourism
          </a>

          <a href="#culture">
            Culture
          </a>

          <a href="#destinations">
            Destinations
          </a>

        </div>


        <button className="plan-btn">
          ✨ Plan My Trip
        </button>

      </nav>


      {/* HERO */}

      <section
        className="hero"
        id="home"
      >

        <div className="hero-content">

          <span className="hero-tag">
            🌿 SMART • ECO • CULTURAL TOURISM
          </span>

          <h1>

            Discover <span>Jharkhand</span>

            <br />

            Where Nature Meets Culture

          </h1>


          <p>

            Explore the beauty of Jharkhand through breathtaking
            waterfalls, rich tribal heritage, local traditions,
            authentic food and unforgettable experiences.

          </p>


          <div className="hero-buttons">

            <button
              className="explore-btn"
              onClick={() => setShowJharkhand(true)}
            >
              Explore Jharkhand →
            </button>


            <button className="ai-btn">
              ✨ AI Trip Planner
            </button>

          </div>

        </div>

      </section>


      {/* DISCOVER JHARKHAND */}

      <section
        className="explore-section"
        id="explore"
      >

        <div className="section-heading">

          <span>
            EXPLORE • EXPERIENCE • CONNECT
          </span>

          <h2>
            Discover <strong>Jharkhand</strong>
          </h2>

          <p>
            From lush green forests to rich tribal heritage,
            discover experiences that connect you with the
            heart and soul of Jharkhand.
          </p>

        </div>


        <div className="category-grid">

          {categories.map(
            (category, index) => (

              <div
                className="category-card"
                key={index}
              >

                <div className="emoji-box">
                  {category.icon}
                </div>


                <div className="category-content">

                  <h3>
                    {category.title}
                  </h3>

                  <p>
                    {category.description}
                  </p>


                  {/* DISCOVER BUTTON */}

                  <button
                    onClick={() => {
                      if (category.title === "Eco Tourism") {
                        setShowEcoTourism(true);
                      }
                    }}
                  >
                    Discover →
                  </button>

                </div>

              </div>

            )
          )}

        </div>

      </section>


      {/* POPULAR DESTINATIONS */}

      <section
        className="destination-section"
        id="destinations"
      >

        <div className="section-heading">

          <span>
            PLACES YOU SHOULD NOT MISS
          </span>

          <h2>
            Popular <strong>Destinations</strong>
          </h2>

          <p>
            Explore some of the most beautiful destinations
            across Jharkhand.
          </p>

        </div>


        <div className="destination-grid">

          <div className="destination">

            <div className="destination-image">
              💧
            </div>

            <small>
              WATERFALL
            </small>

            <h3>
              Hundru Falls
            </h3>

            <p>
              One of Jharkhand's most beautiful waterfalls,
              surrounded by greenery and natural landscapes.
            </p>

          </div>


          <div className="destination">

            <div className="destination-image">
              🌊
            </div>

            <small>
              WATERFALL
            </small>

            <h3>
              Dassam Falls
            </h3>

            <p>
              A spectacular waterfall surrounded by forests
              and peaceful natural scenery.
            </p>

          </div>


          <div className="destination">

            <div className="destination-image">
              🌲
            </div>

            <small>
              NATURE
            </small>

            <h3>
              Netarhat
            </h3>

            <p>
              Known for beautiful landscapes, forests,
              sunsets and peaceful hill views.
            </p>

          </div>

        </div>

      </section>


      {/* ECO TOURISM */}

      <section
        className="purpose-section"
        id="eco"
      >

        <div>

          <span>
            TRAVEL WITH A PURPOSE
          </span>

          <h2>

            Explore.
            <br />

            Respect.
            <br />

            <strong>
              Preserve.
            </strong>

          </h2>


          <p>

            Our eco-tourism approach encourages responsible
            travel, supports local communities and protects
            Jharkhand's natural and cultural heritage.

          </p>


          <button
            onClick={() => setShowEcoTourism(true)}
          >
            Learn About Eco Tourism →
          </button>

        </div>


        <div className="impact-grid">

          <div>
            🌳
            <b>
              Protect Nature
            </b>
          </div>

          <div>
            🪘
            <b>
              Support Tribal Communities
            </b>
          </div>

          <div>
            🚯
            <b>
              No Plastic
            </b>
          </div>

          <div>
            🤝
            <b>
              Support Local Artisans
            </b>
          </div>

        </div>

      </section>


      {/* FOOTER */}

      <footer className="footer">

        <div className="footer-logo">
          🌿 Jharkhand Explore
        </div>

        <p>
          Where Nature Meets Culture
        </p>


        <div className="footer-links">

          <a href="#home">
            Home
          </a>

          <a href="#explore">
            Explore
          </a>

          <a href="#eco">
            Eco Tourism
          </a>

          <a href="#destinations">
            Destinations
          </a>

        </div>


        <div className="copyright">

          © 2026 Jharkhand Explore •
          Smart Digital Platform for Eco & Cultural Tourism

        </div>

      </footer>

    </div>
  );
}

export default App;