function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-icon">🌿</span>

        <div>
          <h2>Jharkhand</h2>
          <small>EXPLORE</small>
        </div>
      </div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#explore">Explore</a>
        <a href="#eco">Eco Tourism</a>
        <a href="#culture">Culture</a>
        <a href="#destinations">Destinations</a>
      </div>

      <button className="plan-btn">
        ✨ Plan My Trip
      </button>
    </nav>
  );
}

export default Navbar;