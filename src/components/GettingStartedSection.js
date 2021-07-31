import React from "react";
import GettingStartedBanner from "../images/gettingstartedbanner.png";

const GettingStartedSection = () => {
  return (
    <section>
      <div className="getting-started-image-top">
        <div className="container">
          <div className="row justify-content-center d-flex align-items-center">
            <div className="col-md-6 col-sm-12 mt-5 ">
              <p className="getting-started-heading">Ready To get Started</p>
              <p className="getting-started-para">
                Top of the line identity verification systems process your KYC
                within a few hours of signing up, while ensuring the right KYC
                protocol.
              </p>
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
              <div className="row mt-3 d-flex justify-content-center p-3">
                <div class="form-check col-md-4 col-xs-12 d-flex justify-content-md-start justify-content-xs-center">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    class="form-check-label label-getting-started-checkbox marginleft10"
                    for="flexCheckDefault"
                  >
                    NewsLetter
                  </label>
                </div>
                <div class="form-check  col-md-4 col-xs-12 d-flex justify-content-md-center justify-content-xs-center">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    class="form-check-label label-getting-started-checkbox marginleft10"
                    for="flexCheckDefault"
                  >
                    Market Commentary
                  </label>
                </div>
                <div class="form-check col-md-4 col-xs-12 d-flex justify-content-md-end justify-content-xs-center">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    class="form-check-label label-getting-started-checkbox marginleft10"
                    for="flexCheckDefault"
                  >
                    Product Updates
                  </label>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 mt-5">
              <div className="image-container-getting-started ">
                <img
                  src={GettingStartedBanner}
                  alt=""
                  className="mt-5 image-getting-started"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GettingStartedSection;
