'use client';
import Image from 'next/image';

export default function ShowcaseSection() {
  return (
    <section id="showcase">
      <div className="max-w-[1280px] mx-auto">
        <div className="showcase-grid">
          <div className="showcase-text">
            <div className="showcase-text-in">
              <h4 className="uppercase">
                Dream Home construction is a reputed company in the House Construction Works.
              </h4>
              {/* <button type="submit" className="btn home-btn">Our Work</button> */}
            </div>
          </div>

          <div className="extensions aos-init aos-animate" data-aos="fade-right">
            <a href="">
              <h2>Extensions</h2>
              <div className="outer-img">
                <Image
                  src="/images/large-room.jpg"
                  className="w-img"
                  alt="House Extensions London"
                  width={600}
                  height={400}
                />
              </div>
            </a>
          </div>

          <div className="roofing aos-init" data-aos="fade-left">
            <a href="">
              <h2>Roofing</h2>
              <div className="outer-img">
                <Image
                  src="/images/roofing.jpg"
                  className="w-img"
                  alt="House Roofing"
                  width={600}
                  height={400}
                />
              </div>
            </a>
          </div>

          <div className="driveway1 aos-init" data-aos="fade-right">
            <a href="">
              <h2>Driveway</h2>
              <div className="outer-img">
                <Image
                  src="/images/driveway-2.jpg"
                  className="w-img"
                  alt="Driveway In London"
                  width={600}
                  height={400}
                />
              </div>
            </a>
          </div>

          <div className="washroom aos-init" data-aos="fade-left">
            <a href="">
              <h2>washroom</h2>
              <div className="outer-img">
                <Image
                  src="/images/wash-room.jpg"
                  className="w-img"
                  alt="washroom"
                  width={600}
                  height={400}
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
