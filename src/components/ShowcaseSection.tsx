'use client';

import Image from 'next/image';
import Link from 'next/link';

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
            </div>
          </div>

          <div className="extensions aos-init aos-animate" data-aos="fade-right">
            <Link href="/services/extensions">
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
            </Link>
          </div>

          <div className="roofing aos-init" data-aos="fade-left">
            <Link href="/services/roofing">
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
            </Link>
          </div>

          <div className="driveway1 aos-init" data-aos="fade-right">
            <Link href="/services/driveways">
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
            </Link>
          </div>

          <div className="washroom aos-init" data-aos="fade-left">
            <Link href="/blog/bathroom-plumbing-checklist">
              <h2>Washroom</h2>
              <div className="outer-img">
                <Image
                  src="/images/wash-room.jpg"
                  className="w-img"
                  alt="Washroom Plumbing"
                  width={600}
                  height={400}
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
