'use client';

import React from 'react';

export default function ContactUs() {
  return (
    <section id="contact-us">
      <div id="contact">
        <div className="max-w-[1280px] mx-auto px-2">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2">
              <div id="contact-left">
                <h3 className="text-xl font-semibold mb-2">Dream Home Construction Ltd UK</h3>
                <p className="mb-4">
                  We believe in <strong>Simple</strong>, <strong>Clean</strong> &amp; <strong>Modern</strong>
                  <br /> Browse the amazing work of our company.
                </p>

                <div id="contact-info">
                  <address className="mb-4">
                    <p>405 Green Lane<br />Ilford, London</p>
                  </address>
                  <div id="phone-fax-email">
                    <p>
                      <strong>Tel:</strong> <span>07980 964 090</span> <br />
                      <strong>Tel:</strong> <span>07506 583 199</span> <br />
                      <strong>Email:</strong> <span>info@dhcluk.com</span> <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <div id="contact-right">
                <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                <form id="ajax-contact" action="mailer.php" method="post" className="space-y-4">
                  <input
                    placeholder="Your name"
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full p-2 bg-slate-100 border border-gray-300 rounded"
                  />
                  <input
                    placeholder="Your email"
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full p-2 bg-slate-100 border border-gray-300 rounded"
                  />
                  <input
                    type="tel"
                    placeholder="Your Phone Number (optional)"
                    id="phone"
                    name="phone"
                    className="w-full p-2 bg-slate-100 border border-gray-300 rounded"
                  />
                  <textarea
                    placeholder="Your message here...."
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full p-2 bg-slate-100 border border-gray-300 rounded"
                  ></textarea>

                  <div id="send-btn">
                    <button
                      name="submit"
                      type="submit"
                      id="contact-submit"
                      data-submit="...Sending"
                      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
