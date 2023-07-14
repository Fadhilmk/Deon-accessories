import React from "react";
import './footer.css'
import logo8 from '../../assets/logo8.png'

const Footer = () => {
  return (
    <footer className="footer spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div className="footer__about">
              <div className="footer_about_logo">
                <a href="./index.html">
                  <img
                    style={{ height: "70px", width: "70px" }}
                    src={logo8}
                    alt=""
                  />
                </a>
                <h2 style={{ fontSize: "20px" }}>
                  DEON
                  <br />
                  <span style={{ fontSize: "14px" }}>AUTO & ACCESSORIES</span>
                </h2>
              </div>
              <ul className="p-0">
                <li> Wins Tower, CH Cross Road, Nadakkavu East,</li>
                <li> Kozhikode - 673006 (Near CVN Kalari)</li>
                <li>Mon - Sat: 9:30 am - 7:00 pm</li>
                <li> Sun: Closed</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 offset-lg-1">
            <div className="footer__widget">
              <h6>Useful Links</h6>
              <ul className="p-0">
                <li>
                  <a href="./">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/categories">Categories</a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-5">
            <div className="footer__widget">
              <h6> Join Our Newsletter Now</h6>

              <form action="#">
                <input type="text" placeholder="Enter your mail" />
                <button
                  
                  type="submit"
                  className="site-btn"
                >
                  Subscribe
                </button>
              </form>
              <div className="footer-social-icon">
                <span className=" footer_widget_social">Follow us</span>
                <i className="fa-brands fa-whatsapp"></i>
                <i className="instagram-bg fa-brands fa-instagram"></i>
                <i className=" facebook-bg fa-brands fa-facebook-f"></i>
                <i className="youtub fa-brands fa-youtube"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid"> 
        <div className="row">
          <div className="col-lg-12 ">
            <div className="footer__copyright">
              <p  style={{ fontSize: "11px"  }} className="text-center ">
                Copyright © 2018 DEON AUTO ACCESSORIES All rights reserved
              </p>
              <div className="footer_copyright_payment">
                <img src="img/payment-item.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;