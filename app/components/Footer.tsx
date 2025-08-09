"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="animate-fadeIn">
      {/* Info Section */}
      <section className="bg-gray-900 py-14 text-gray-300">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Address */}
            <div>
              <h4 className="text-xl font-bold mb-4 text-white">Address</h4>
              <div className="space-y-3">
                <a
                  href="#"
                  className="flex items-center hover:text-blue-400 transition-colors duration-300"
                >
                  <i className="fas fa-map-marker-alt mr-3"></i>
                  Location
                </a>
                <a
                  href="tel:+011234567890"
                  className="flex items-center hover:text-blue-400 transition-colors duration-300"
                >
                  <i className="fas fa-phone mr-3"></i>
                  Call +01 000000000
                </a>
                <a
                  href="mailto:demo@gmail.com"
                  className="flex items-center hover:text-blue-400 transition-colors duration-300"
                >
                  <i className="fas fa-envelope mr-3"></i>
                  demo@gmail.com
                </a>
              </div>
              <div className="flex space-x-4 mt-5">
                {["facebook-f", "twitter", "linkedin-in", "instagram"].map(
                  (icon) => (
                    <a
                      key={icon}
                      href="#"
                      className="w-9 h-9 flex items-center justify-center border border-gray-500 rounded-full text-gray-300 hover:bg-blue-500 hover:text-white hover:border-blue-500 transform hover:scale-110 transition-all"
                    >
                      <i className={`fab fa-${icon}`}></i>
                    </a>
                  )
                )}
              </div>
            </div>

            {/* Info */}
            <div>
              <h4 className="text-xl font-bold mb-4 text-white">Info</h4>
              <p className="text-gray-400 leading-relaxed">
                Necessary, making this the first true generator on the Internet.
                It uses a dictionary of over 200 Latin words, combined with a handful.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-xl font-bold mb-4 text-white">Links</h4>
              <div className="space-y-2">
                {[
                  { name: "Home", href: "/" },
                  { name: "About", href: "/about" },
                  { name: "Services", href: "/service" },
                  { name: "Contact Us", href: "/contact" },
                ].map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="group flex items-center hover:text-blue-400 transition-colors duration-300"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 transition-transform group-hover:scale-125"></span>
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Subscribe */}
            <div>
              <h4 className="text-xl font-bold mb-4 text-white">Subscribe</h4>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="px-4 py-3 w-full border border-gray-500 rounded-l-lg bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-5 py-3 rounded-r-lg hover:bg-blue-600 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <div className="bg-gradient-to-r from-blue-700 to-black text-white py-6">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} All Rights Reserved By
            <a
              href="https://mobus.com"
              className="ml-1 underline hover:text-gray-200 transition-colors"
            >
              MOBUS
            </a>
            <span className="mx-2">|</span>
            Distributed By
            <a
              href="https://demo.com"
              className="ml-1 underline hover:text-gray-200 transition-colors"
            >
              Demo
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
