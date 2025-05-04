// components/AboutUsSection.tsx
import Image from 'next/image';

export default function AboutUsSection() {
  return (
    <section id="about-us">
    <div className="  flex flex-col lg:flex-row bg-amber-400  min-h-[400px]  my-12">
      <div className="w-full h-full z-70 lg:w-[30%]">
        <div>
          <Image
            className="lg:h-[400px] lg:w-full"
            src="/images/dream-home.jpg"
            alt="First slide"
            width={800}
            height={400}
          />
        </div>
      </div>

      <div className="w-full h-full px-2 md:px-0  z-70 lg:w-[70%] bg-[#41382b]">
        <div className="text-white flex flex-col h-[100%] w-[100%] lg:w-[80%] lg:px-[3rem]  py-5 lg:py-[1%] gap-6 bg-[#41382b]">
          <h2
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="500"
            className="text-center lg:text-left w-full font-[800] text-[2rem] text-white"
          >
           About DHCL uk
          </h2>
          <p
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
            className="text-center w-full h-full lg:text-left text-white"
          >
          Dream Home Construction Ltd. is a UK based company, situated in London, Ilford. We are working in the field of construction since 2012. We are experienced in the area of construction like Extensions, Roofing, Driveways, Electrical Works, Plumbing, Heating, etc. We always prioritize our clients. Our team does hard work to meet the needs of our clients.
          </p>

          <h2
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="500"
            className="font-bold text-[2rem] playwrite-nz-400 w-full text-center border-2 lg:text-left border-slate-50 p-2 rounded-xl text-white"
          >
           We enjoy a high percentage of repeat customers.
          </h2>
        </div>
      </div>
    </div>
  </section>
  );
}
