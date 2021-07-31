/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
class HorizontalCardScroll extends Component {
  constructor(props) {
    super(props);
    // React Ref is created here
    this.navRef = React.createRef();
  }
  /* This func handles the scrolling by incrementing or decrementing
   the scrollLeft property */
  handleNav = (direction) => {
    if (direction === "left") {
      this.navRef ? (this.navRef.current.scrollLeft -= 200) : null;
    } else {
      this.navRef ? (this.navRef.current.scrollLeft += 200) : null;
    }
  };
  /*In the render, we access nav-items via its ref attribute and controls
  it with the 'Prev' and 'Next' buttons using the func defined above */
  render() {
    return (
      <div className="menu-container-card-scroll">
        <div className="d-flex align-items-center">
          <button
            className="card-scroll-button-left"
            onClick={() => this.handleNav("left")}
          >
            <i className="fa fa-lg fa-chevron-left"></i>
          </button>
        </div>
        <div className="nav-items-card-scroll" ref={this.navRef}>
          <div className="scroll-container-forcard">
            <div class="card card-scroll-cards shadow-lg p-3 mb-5 bg-body rounded">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="card-link">
                  Card link
                </a>
                <a href="#" class="card-link">
                  Another link
                </a>
              </div>
            </div>
          </div>
          <div className="scroll-container-forcard">
            <div class="card card-scroll-cards">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="card-link">
                  Card link
                </a>
                <a href="#" class="card-link">
                  Another link
                </a>
              </div>
            </div>
          </div>
          <div className="scroll-container-forcard">
            <div class="card card-scroll-cards">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="card-link">
                  Card link
                </a>
                <a href="#" class="card-link">
                  Another link
                </a>
              </div>
            </div>
          </div>
          <div className="scroll-container-forcard">
            <div class="card card-scroll-cards">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="card-link">
                  Card link
                </a>
                <a href="#" class="card-link">
                  Another link
                </a>
              </div>
            </div>
          </div>
          <div className="scroll-container-forcard">
            <div class="card card-scroll-cards">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="card-link">
                  Card link
                </a>
                <a href="#" class="card-link">
                  Another link
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <button
            className="card-scroll-button-right"
            onClick={() => this.handleNav("right")}
          >
            <i className="fa fa-lg fa-chevron-right"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default HorizontalCardScroll;
