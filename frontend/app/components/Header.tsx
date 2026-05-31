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

  return (
    <header className={`fixed  bg-white/80 backdrop-blur-md shadow-none w-full  top-0 z-50 ${showNavbar ? "translate-y-0" : "-translate-y-full"} transition-transform duration-300 h-23`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">

        <div className="flex items-center justify-between py-1">

          <div className="flex items-center  gap-3 ">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Manpower"
                height={112}
                width={200}
                className="h-25 w-auto " />

            </Link>
          </div>



          <nav className="hidden md:flex items-center gap-3">
            <Link href="/" className="text-gray-900 font-medium px-3 py-1 rounded transition-all duration-300 
             hover:text-black hover:border-2 hover:rounded-2xl hover:border-green-700">HOME</Link>
            <Link href="/about" className="text-gray-900 font-medium px-3 py-1 rounded transition-all duration-300 
             hover:text-black hover:border-2 hover:rounded-2xl hover:border-green-700">ABOUT US</Link>
            <Link href="/howWeWork" className="text-gray-900 font-medium px-3 py-1 rounded transition-all duration-300 
             hover:text-black hover:border-2 hover:rounded-2xl hover:border-green-700">HOW WE WORK</Link>

            <Link href="/services" className="text-gray-900 font-medium px-3 py-1 rounded transition-all duration-300 
             hover:text-black hover:border-2 hover:rounded-2xl hover:border-green-700">SERVICES</Link>

            <Link href="/vacancy" className="text-gray-900 font-medium px-3 py-1 rounded transition-all duration-300 
             hover:text-black hover:border-2 hover:rounded-2xl hover:border-green-700">AVAILABLE JOBS</Link>




            {/* <Link href="/exhibition" className="text-gray-900 font-medium px-3 py-1 rounded transition-all duration-300 
             hover:text-[#7644a2] hover:border-2 hover:rounded-2xl hover:border-yellow-400">AIRSHOW EXPO/EXHIBITION</Link> */}

            <Link href="/contact" className="text-gray-900 font-medium px-3 py-1 rounded transition-all duration-300 
              hover:border-2 hover:rounded-2xl hover:text-black hover:border-green-700">CONTACT US</Link>


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
