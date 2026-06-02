'use client';
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { div } from "framer-motion/client";
export default function Header() {

  const [showNavbar, setShowNavbar] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItem =
  "relative text-gray-900 font-medium px-3 py-1 rounded-xl transition-all duration-300 hover:text-green-700 group overflow-hidden";
  return (
    <header
      className={`sticky top-0 z-50 h-22 transition-all duration-500 ${showNavbar ? "translate-y-0" : "-translate-y-full"
        } ${lastScrollY
          ? "bg-white backdrop-blur-xl shadow-xl border-b border-gray-200"
          : "bg-white/90 backdrop-blur-md shadow-lg"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">

        <div className="flex items-center justify-between py-1">

          <div className="flex items-center gap-3 ">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Manpower"
                height={112}
                width={200}
                className="h-23 w-auto" />

            </Link>
          </div>



          <nav className="hidden md:flex items-center gap-3">
  <Link
    href="/"
    className="relative text-gray-900 font-medium px-3 py-2 rounded-xl transition-all duration-300 hover:text-green-700 group overflow-hidden"
  >
    <span className="relative z-10">HOME</span>
    <span className="absolute inset-0 bg-gradient-to-r from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-red-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
  </Link>

  <div className="relative group">
    <button
      className="relative text-gray-900 font-medium px-3 py-2 rounded-xl transition-all duration-300 hover:text-green-700 overflow-hidden"
    >
      <span className="relative z-10">ABOUT US</span>
      <span className="absolute inset-0 bg-gradient-to-r from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
      <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-red-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
    </button>

    <div className="absolute left-0 mt-2 w-64 bg-white border rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
      <Link
        href="/about"
        className="block w-full text-left px-4 py-3 font-semibold text-lg text-gray-600 hover:bg-green-50 hover:text-green-700 transition-all duration-300"
      >
        About Electra
      </Link>

      <Link
        href="/about/missionVission"
        className="block w-full text-left px-4 py-3 font-semibold text-lg text-gray-600 hover:bg-green-50 hover:text-green-700 transition-all duration-300"
      >
        Mission, Vision & Values
      </Link>

      <Link
        href="/about/WhyChooseElectra"
        className="block w-full text-left px-4 py-3 font-semibold text-lg text-gray-600 hover:bg-green-50 hover:text-green-700 transition-all duration-300"
      >
        Why Choose Electra
      </Link>
      <Link
        href="/about/BodMessage"
        className="block w-full text-left px-4 py-3 font-semibold text-lg text-gray-600 hover:bg-green-50 hover:text-green-700 transition-all duration-300"
      >
        Message From BOD
      </Link>
      <Link
        href="/about/trainingCertificates"
        className="block w-full text-left px-4 py-3 font-semibold text-lg text-gray-600 hover:bg-green-50 hover:text-green-700 transition-all duration-300"
      >
        Training & Certifications 
      </Link>
    </div>
  </div>
  <div className="relative group">
    <button
      className="relative text-gray-900 font-medium px-3 py-2 rounded-xl transition-all duration-300 hover:text-green-700 overflow-hidden"
    >
      <span className="relative z-10">HOW WE WORK</span>
      <span className="absolute inset-0 bg-gradient-to-r from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
      <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-red-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
    </button>

    <div className="absolute left-0 mt-2 w-64 bg-white border rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
      <Link
        href="/howWeWork/legalCompliance"
        className="block w-full text-left px-4 py-3 font-semibold text-lg text-gray-600 hover:bg-green-50 hover:text-green-700 transition-all duration-300"
      >
        Legal Compliance and Accreditation
      </Link>

      <Link
        href="/howWeWork/orgStructure"
        className="block w-full text-left px-4 py-3 font-semibold text-lg text-gray-600 hover:bg-green-50 hover:text-green-700 transition-all duration-300"
      >
        Organizational Structure
      </Link>

      <Link
        href="/howWeWork/commitments"
        className="block w-full text-left px-4 py-3 font-semibold text-lg text-gray-600 hover:bg-green-50 hover:text-green-700 transition-all duration-300"
      >
        Our Commitments
      </Link>
      <Link
        href="/howWeWork/ourTeam"
        className="block w-full text-left px-4 py-3 font-semibold text-lg text-gray-600 hover:bg-green-50 hover:text-green-700 transition-all duration-300"
      >
        Our Team
      </Link>
      <Link
        href="/howWeWork/RequiredDocs"
        className="block w-full text-left px-4 py-3 font-semibold text-lg text-gray-600 hover:bg-green-50 hover:text-green-700 transition-all duration-300"
      >
        Required Documents
      </Link>
      <Link
        href="/howWeWork/recruitement"
        className="block w-full text-left px-4 py-3 font-semibold text-lg text-gray-600 hover:bg-green-50 hover:text-green-700 transition-all duration-300"
      >
        Recruitment Procedure
      </Link>
    </div>
  </div>


  <Link
    href="/services"
    className="relative text-gray-900 font-medium px-3 py-2 rounded-xl transition-all duration-300 hover:text-green-700 group overflow-hidden"
  >
    <span className="relative z-10">SERVICES</span>
    <span className="absolute inset-0 bg-gradient-to-r from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-red-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
  </Link>

  <Link
    href="/vacancy"
    className="relative text-gray-900 font-medium px-3 py-2 rounded-xl transition-all duration-300 hover:text-green-700 group overflow-hidden"
  >
    <span className="relative z-10">AVAILABLE JOBS</span>
    <span className="absolute inset-0 bg-gradient-to-r from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-red-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
  </Link>

  <Link
    href="/contact"
    className="relative text-gray-900 font-medium px-3 py-2 rounded-xl transition-all duration-300 hover:text-green-700 group overflow-hidden"
  >
    <span className="relative z-10">CONTACT US</span>
    <span className="absolute inset-0 bg-green-100 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-red-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
  </Link>
</nav>

          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute left-0 top-full w-full bg-white border-t border-gray-200 shadow-lg animate-slideDown z-40">
          <nav className="flex flex-col px-6 py-5 space-y-4">
            <Link
              href="/"
              className="text-gray-700 hover:text-pink-600 font-medium text-lg"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-gray-700 hover:text-pink-600 font-medium text-lg"
            >
              About Us
            </Link>

            <Link
              href="/howWeWork"
              className="text-gray-700 hover:text-pink-600 font-medium text-lg"
            >
              How We Work
            </Link>

            <Link
              href="/services"
              className="text-gray-700 hover:text-pink-600 font-medium text-lg"
            >
              Services
            </Link>
            <Link
              href="/vacancy"
              className="text-gray-700 hover:text-pink-600 font-medium text-lg"
            >
              Available Jobs
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-pink-600 font-medium text-lg"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
