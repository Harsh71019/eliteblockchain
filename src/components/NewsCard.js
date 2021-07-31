import React from "react";

const NewsCard = () => {
  return (
    <section className="news-card-section">
      <div className="container">
        <p className="heading-news-card d-flex justify-content-center">
          Latest In the News
        </p>
        <p className="heading-news-para d-flex justify-content-center">
          Here are a few reasons why you should choose CrossTower
        </p>
        <div className="row d-flex justify-space-between">
          <div className="col-md-4 col-sm-12 mt-3">
            <div class="card">
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
          <div className="col-md-4 col-sm-12 mt-3">
            <div class="card">
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
          <div className="col-md-4 col-sm-12 mt-3">
            <div class="card">
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
        <div className="d-flex justify-content-center mt-5">
          <button className="new-card-button">View All News</button>
        </div>
      </div>
    </section>
  );
};

export default NewsCard;
