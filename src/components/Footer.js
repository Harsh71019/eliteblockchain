import React from "react";

const Footer = () => {
  return (
    <section className="footer mt-5">
      <div className="container">
        <p className="logo-text-footer">
          <i className="fab fa-bitcoin marginright10 bitcoin-icon"></i>
          CROSSTOWER
        </p>
        <p className="mb-0">CrossTower is on a mission to</p>
        <p className="">mainstream digital asset investing and trading</p>
        <hr />
        <div class="section-footer group-footer-footer">
          <div class="col-footer span_1_of_5-footer">
            <div class="d-flex flex-column">
              <div class="p-2 header-text-col5-footer">About</div>
              <div class="p-2 secondary-text-col5-footer"> Leadership Team</div>
              <div class="p-2 secondary-text-col5-footer">
                {" "}
                Referral Program
              </div>
              <div class="p-2 secondary-text-col5-footer"> Blog</div>
              <div class="p-2 secondary-text-col5-footer"> Careers</div>
              <div class="p-2 secondary-text-col5-footer"> News & Media</div>
            </div>
          </div>
          <div class="col-footer span_1_of_5-footer">
            <div class="d-flex flex-column">
              <div class="p-2 header-text-col5-footer">Products</div>
              <div class="p-2 secondary-text-col5-footer">Crypto Exchange</div>
              <div class="p-2 secondary-text-col5-footer">
                Buy and Sell Bitcoin
              </div>
              <div class="p-2 secondary-text-col5-footer">
                Crypto Wallet App
              </div>
            </div>
          </div>
          <div class="col-footer span_1_of_5-footer">
            {" "}
            <div class="d-flex flex-column">
              <div class="p-2 header-text-col5-footer">Support</div>
              <div class="p-2 secondary-text-col5-footer">Help & Support</div>
              <div class="p-2 secondary-text-col5-footer">
                How to use CrossTower?
              </div>
              <div class="p-2 secondary-text-col5-footer">
                Partnership and Enquires
              </div>
              <div class="p-2 secondary-text-col5-footer">
                Trading & Withdrawal FEes
              </div>
              <div class="p-2 secondary-text-col5-footer">Contact Us</div>
            </div>
          </div>
          <div class="col-footer span_1_of_5-footer">
            {" "}
            <div class="d-flex flex-column">
              <div class="p-2 header-text-col5-footer">Resources</div>
              <div class="p-2 secondary-text-col5-footer">Market Insights</div>
              <div class="p-2 secondary-text-col5-footer">
                Research Reports{" "}
              </div>
              <div class="p-2 secondary-text-col5-footer">
                Learning and Education
              </div>
            </div>
          </div>
          <div class="col-footer span_1_of_5-footer">
            <div class="d-flex flex-column">
              <div class="p-2 header-text-col5-footer"> SOCIAL</div>
              <div class="p-2 secondary-text-col5-footer">
                <i class="fab marginright10 fa-facebook"></i>Facebook
              </div>
              <div class="p-2 secondary-text-col5-footer">
                {" "}
                <i class="fab marginright10 fa-instagram"></i>Instagram
              </div>
              <div class="p-2 secondary-text-col5-footer">
                <i class="fab marginright10 fa-twitter"></i> Twitter
              </div>
              <div class="p-2 secondary-text-col5-footer">
                <i class="fab marginright10 fa-youtube"></i> Youtube
              </div>
              <div class="p-2 secondary-text-col5-footer">
                <i class="fab marginright10 fa-linkedin"></i> Linkedin
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-md-6 col-xs-12 d-flex justify-content-start">
            Copyright © 2021 CrossTower. All rights reserved.
          </p>
          <p className="col-md-6 col-xs-12 d-flex justify-content-end">
            <span className="marginright20">Terms of Use</span>
            <span className="marginright20">Privacy Policy</span>
            <span className="marginright20">Security</span>
            <span className="marginright20">Disclaimer</span>
            <span className="marginright20">Cookie Policy</span>
          </p>
        </div>

        <p>
          CrossTower Bermuda Ltd. (DBA “CrossTower Global”) is a digital asset
          trading platform registered as a Digital Asset Business, holding a
          Class F license granted by the Bermuda Monetary Authority. While
          CrossTower Global supports customers from various countries, it does
          not support U.S. customers (individuals or institutions). CrossTower
          Inc. (NMLS License #1979754) is a digital asset trading platform
          registered as a U.S. Money Service Business with FinCEN, supporting
          U.S. customers in certain states and may also support certain non-U.S.
          customers. If you have questions about whether CrossTower Global or
          CrossTower Inc. is available in your jurisdiction please contact:
          support@crosstower.com
        </p>
      </div>
    </section>
  );
};

export default Footer;
