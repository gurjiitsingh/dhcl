'use client';

import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer p1" id="footer">
      <div className="max-w-[1280px] px-2  mx-auto grid--footer">
        <div className="logo-col">
          <div className="col-logo-in">
            <a href="#" className="footer-logo">
              <img
                className="footer-logo1"
                alt="Dream Home Construction Ltd UK"
                src="/images/logo14.png"
                height="30"
              />
            </a>
          </div>

          <div className="social-links">
            <div className="social-link-box">
              <a className="footer-link" href="#">
                <FaInstagram className="social-icon" />
              </a>
            </div>
            <div className="social-link-box">
              <a className="footer-link" href="#">
                <FaFacebook className="social-icon" />
              </a>
            </div>
            <div className="social-link-box">
              <a className="footer-link" href="#">
                <FaTwitter className="social-icon" />
              </a>
            </div>
          </div>

          <p className="copyright footer-color">
            Copyright © <span className="year">2022</span> All Rights Reserved by dhcluk.com
          </p>
        </div>

        <div className="address-col">
          <p className="footer-heading footer-color">Contact us</p>
          <address className="contacts">
            <p className="address footer-color">
              Dream Home Construction Ltd UK
            </p>
            <div className="contact-link">
              Phone <a className="footer-link" href="tel:07980964090">07980 964 090</a><br />
            </div>
            <div className="contact-link">
              Email <a className="footer-link" href="mailto:info@dhcluk.com">info@dhcluk.com</a>
            </div>
          </address>
        </div>

        <div className="nav-col">
          <p className="footer-heading footer-color">Services</p>
          <ul className="footer-nav">
            <li className="footer-box-link"><a className="footer-link" href="#">Extensions</a></li>
            <li className="footer-box-link"><a className="footer-link" href="#">Roofing</a></li>
            <li className="footer-box-link"><a className="footer-link" href="#">Driveways</a></li>
            <li className="footer-box-link"><a className="footer-link" href="#">Electrical Works</a></li>
            <li className="footer-box-link"><a className="footer-link" href="#">Plumbing</a></li>
            <li className="footer-box-link"><a className="footer-link" href="#">Heating</a></li>
          </ul>
        </div>

        <div className="bottom-link">
          <p className="footer-heading footer-color">Explore</p>
          <ul className="footer-nav">
            <li><a className="footer-link" href="#home">Home</a></li>
            <li><a className="footer-link" href="#services">Services</a></li>
            <li><a className="footer-link" href="#about">About</a></li>
            <li><a className="footer-link" href="#work">Work</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
