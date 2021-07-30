import React from "react";
import NavBar from "../components/Navbar";

const HomeScreen = () => {
  return (
    <section>
      <div className="home-image-top">
        <div className="container">
          <div className="py-3">
            <div className="d-flex justify-content-end">
              <a className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Products
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </a>{" "}
              <a className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Products
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </a>
              <a className="top-nav-link align-items-center d-flex justify-content-center">
                Login
              </a>
            </div>
          </div>

          <hr className="hr-top-nav" />
          <NavBar />
          <div className="row">
            <div className="col-6">
              <p>
                <i class="fab fa-bitcoin"></i>Jumpstart your portfolio &rarr;
              </p>
              <p>Launching India's Biggest Crypto Platform</p>
              <p>
                We understand the importance of liquidity and have partnered
                with global liquidity providers and market makers.
              </p>
              <div className="email-search-top">
                <form class="search-wrapper cf">
                  <input
                    type="text"
                    placeholder="Enter your email..."
                    required
                  />
                  <button type="submit">Getting Started ></button>
                </form>
              </div>
            </div>
            <div className="col-6">2</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeScreen;
