"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/service" },
    { name: "About", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      {/* Top Bar */}
      <div className="bg-gray-900 text-gray-200 py-2 text-sm">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
          <div className="flex space-x-4">
            <a
              href="tel:+01123455678990"
              className="flex items-center hover:text-blue-400 transition-colors"
            >
              <i className="fas fa-phone mr-2"></i> +01 000000000
            </a>
            <a
              href="mailto:demo@gmail.com"
              className="flex items-center hover:text-blue-400 transition-colors"
            >
              <i className="fas fa-envelope mr-2"></i> demo@gmail.com
            </a>
            <a
              href="#"
              className="flex items-center hover:text-blue-400 transition-colors"
            >
              <i className="fas fa-map-marker-alt mr-2"></i> Location
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link
            href="/"
            className="text-3xl font-extrabold text-gray-900 hover:scale-105 transition-transform duration-300"
          >
            <span className="bg-gradient-to-r from-blue-800 to-blue-500 bg-clip-text text-transparent">
              MOBUS
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-900 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className={`h-7 w-7 transform transition-transform duration-300 ${
                isMenuOpen ? "rotate-90" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative font-medium transition-colors duration-300 ${
                  pathname === link.href
                    ? "text-blue-600"
                    : "text-gray-900 hover:text-blue-600"
                }`}
              >
                {link.name}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-blue-600 transition-all duration-300 ${
                    pathname === link.href
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            ))}
            <Link
              href="/login"
              className="px-4 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all"
            >
              <i className="fas fa-user mr-1"></i> Login
            </Link>
            <button className="text-gray-900 hover:text-blue-600 transition-colors">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 origin-top ${
            isMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`block py-2 px-2 border-b border-gray-200 transition-colors duration-300 ${
                pathname === link.href
                  ? "text-blue-600"
                  : "text-gray-900 hover:text-blue-600"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/login"
            className="block py-2 px-2 text-gray-900 hover:text-blue-600"
            onClick={() => setIsMenuOpen(false)}
          >
            <i className="fas fa-user mr-1"></i> Login
          </Link>
        </div>
      </div>
    </header>
  );
}
