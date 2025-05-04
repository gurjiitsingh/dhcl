"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="home">
      <div className="home-cover ">
        
        <div className="hero">
          <div className="hero-grid-pic">
            <div className="main-img">
              <picture>
                <source
                  media="(max-width: 576px)"
                  srcSet="/images/bg-576.jpg"
                />
                <source
                  media="(max-width: 992px)"
                  srcSet="/images/bg-992.jpg"
                />
                <source
                  media="(max-width: 1500px)"
                  srcSet="/images/bg-1700.jpg"
                />
                <img src="/images/bg-1700.jpg" alt="Responsive background" />
              </picture>
            </div>

            <div className="container">
              <div className="hero-grid-content" data-aos="zoom-in">
                <h1 className="hero-title">
                  <span className="title-deco">Dream Home</span> Construction
                  Ltd UK
                </h1>
                <p>We build your dreams with passion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
