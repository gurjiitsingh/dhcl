"use client";

import Link from "next/link";

export default function ServicesSection() {
  return (
    <section id="services">
      <div className="content-box">
        <div className="max-w-[1280px] mx-auto px-2">
          <div className="service-grid">
            <div className="service-title aos-init aos-animate" data-aos="fade-right">
              <div className="content-title">
                <h1 className="text-3xl md:text-5xl">Services</h1>
              </div>
            </div>

            <div className="service-text aos-init aos-animate" data-aos="fade-left">
              <p className="box">
                We provide services like Extensions, Roofing, Driveways, Electrical Works, Plumbing, Heating.
              </p>
            </div>

            <Link href="/services/extensions" className="service-extensions aos-init aos-animate" data-aos="fade-right">
              <div className="service-item cursor-pointer">
                <div className="service-item-icon">
                  <div className="icon building"></div>
                </div>
                <div className="service-item-title">
                  <h3>Extensions</h3>
                </div>
                <div className="service-item-desc">
                  <p>Reconfigure your home by extensions work, and change the way you live.</p>
                </div>
              </div>
            </Link>

            <Link href="/services/roofing" className="service-roofing aos-init aos-animate" data-aos="fade-up">
              <div className="service-item cursor-pointer">
                <div className="service-item-icon">
                  <div className="icon roof"></div>
                </div>
                <div className="service-item-title">
                  <h3>Roofing</h3>
                </div>
                <div className="service-item-desc">
                  <p>Expert roofing and scaffolding services.</p>
                </div>
              </div>
            </Link>

            <Link href="/services/driveways" className="service-driveways aos-init aos-animate" data-aos="fade-left">
              <div className="service-item cursor-pointer">
                <div className="service-item-icon">
                  <div className="icon driveway"></div>
                </div>
                <div className="service-item-title">
                  <h3>Driveways</h3>
                </div>
                <div className="service-item-desc">
                  <p>Driveway, paving construction, and lawn construction.</p>
                </div>
              </div>
            </Link>

            <Link href="/blog/electrical-safety-uk-home-renovations" className="service-electrical-work aos-init aos-animate" data-aos="fade-right">
              <div className="service-item cursor-pointer">
                <div className="service-item-icon">
                  <div className="icon electrical-works"></div>
                </div>
                <div className="service-item-title">
                  <h3>Electrical Works</h3>
                </div>
                <div className="service-item-desc">
                  <p>Best electrical works in home construction.</p>
                </div>
              </div>
            </Link>

            <Link href="/blog/bathroom-plumbing-checklist" className="service-plumbig aos-init aos-animate" data-aos="fade-down">
              <div className="service-item cursor-pointer">
                <div className="service-item-icon">
                  <div className="icon tap-plumbig"></div>
                </div>
                <div className="service-item-title">
                  <h3>Plumbing</h3>
                </div>
                <div className="service-item-desc">
                  <p>All types of plumbing services.</p>
                </div>
              </div>
            </Link>

            <Link href="/services/heating" className="service-heating aos-init aos-animate" data-aos="fade-left">
              <div className="service-item cursor-pointer">
                <div className="service-item-icon">
                  <div className="icon heating"></div>
                </div>
                <div className="service-item-title">
                  <h3>Heating</h3>
                </div>
                <div className="service-item-desc">
                  <p>All types of heating services and installations.</p>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </div>
      <br /><br /><br /><br />
    </section>
  );
}
