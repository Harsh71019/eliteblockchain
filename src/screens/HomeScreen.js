import React from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import SecondTopImage from "../images/bgsecondtop.png";
import SecondBackImage from "../images/bgsecond.png";

const HomeScreen = () => {
  return (
    <>
      <section className="section-top-landing">
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
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
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
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
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

            <hr className="hr-top-nav mb-5" />
            <NavBar />
            <div className="row mt-5">
              <div className="col-lg-6 col-md-6 col-xs-12">
                <p className="heading-top-text1">
                  <i className="fab fa-bitcoin marginright10 bitcoin-icon"></i>
                  Jumpstart your portfolio &rarr;
                </p>
                <p className="heading-top-text2">
                  Launching The India's Most Powerful Crypto Platform
                </p>
                <p className="heading-top-text3">
                  We understand the importance of liquidity and have partnered
                  with global liquidity providers and market makers.
                </p>

                {/* Start of Form */}
                <div className="email-search-top ">
                  <form className="search-wrapper cf d-flex align-items-center d-flex justify-content-evenly">
                    <input
                      type="text"
                      placeholder="Enter your email..."
                      required
                    />
                    <button className="getting-started-landing" type="submit">
                      Getting Started >
                    </button>
                  </form>
                </div>
                {/* End of Form */}
              </div>
              <div className="col-lg-6 col-md-6 col-xs-12 second-div-toplanding d-flex justify-content-center align-items-center">
                <div className="card-main-top-div shadow-lg rounded">
                  <div class="card card-main-top-home">
                    <div class="card-body">
                      <a className="nav-item dropdown text-decoration-none">
                        <a
                          className="nav-link dropdown-toggle p-0"
                          href="#"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Products
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
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

                        {/* end of dropdown */}
                        {/* Start of 2 Paragraph Tags */}
                        <p className="d-flex justify-content-between align-items-center">
                          <span>Price</span> <span>24HR CHANGES</span>
                        </p>
                        <p className="d-flex justify-content-between align-items-center">
                          <span>₹35,580</span> <span>+ 1.25</span>
                        </p>
                        {/* End of 2 Paragraph Tags */}
                        {/* Start of Tabs */}
                        <div class="row">
                          <div class="col-xs-12 ">
                            <nav>
                              <div
                                class="nav nav-tabs nav-fill"
                                id="nav-tab"
                                role="tablist"
                              >
                                <a
                                  class="nav-item nav-link active"
                                  id="nav-home-tab"
                                  data-toggle="tab"
                                  href="#nav-home"
                                  role="tab"
                                  aria-controls="nav-home"
                                  aria-selected="true"
                                >
                                  Buy
                                </a>
                                <a
                                  class="nav-item nav-link"
                                  id="nav-profile-tab"
                                  data-toggle="tab"
                                  href="#nav-profile"
                                  role="tab"
                                  aria-controls="nav-profile"
                                  aria-selected="false"
                                >
                                  Sell
                                </a>
                                <a
                                  class="nav-item nav-link"
                                  id="nav-contact-tab"
                                  data-toggle="tab"
                                  href="#nav-contact"
                                  role="tab"
                                  aria-controls="nav-contact"
                                  aria-selected="false"
                                >
                                  Convert
                                </a>
                              </div>
                            </nav>
                            <div
                              class="tab-content py-3 px-3 px-sm-0"
                              id="nav-tabContent"
                            >
                              <div
                                class="tab-pane fade show active"
                                id="nav-home"
                                role="tabpanel"
                                aria-labelledby="nav-home-tab"
                              >
                                Buy
                              </div>
                              <div
                                class="tab-pane fade"
                                id="nav-profile"
                                role="tabpanel"
                                aria-labelledby="nav-profile-tab"
                              >
                                Sell
                              </div>
                              <div
                                class="tab-pane fade"
                                id="nav-contact"
                                role="tabpanel"
                                aria-labelledby="nav-contact-tab"
                              >
                                Convert
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End of Tabs */}
                        {/* Start of 2 inputs */}
                        <div className="row p-3">
                          <input
                            className="home-top-card-input mt-3"
                            placeholder="RUPEES"
                          />
                        </div>
                        <div className="row p-3">
                          <input
                            className="home-top-card-input mt-3"
                            placeholder="ABC"
                          />
                        </div>
                        {/* End of 2  inputs */}
                        {/* Start of Button */}
                        <div className="row d-flex justify-content-center">
                          <button className="blue-button-homepage-top">
                            BUY NOW
                          </button>
                        </div>
                        {/* End of Button */}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-second-home container mt-5">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="second-section-image-div p-5">
              <img src={SecondTopImage} className="second-image-front" />
            </div>
          </div>
          <div className="mt-5 col-md-6 col-sm-12">
            <p className="mt-5 second-section-heading">
              CrossTower is on a mission to mainstream digital asset investing
              and trading
            </p>
            <p className="second-section-para">
              We believe that bringing the advanced trading tools, rigorous
              security, compliance safeguards, price efficiencies, and support
              models from the global equity markets into digital assets will
              make this a reality.
            </p>
            <p className="second-section-para">
              CrossTower’s team members have spent their careers building and
              running traditional trading platforms and are intimately aware of
              the requirements of the institutional market.
            </p>
            <button className="second-section-button">About Us ></button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeScreen;
