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
    <header className={`fixed  bg-white/20 backdrop-blur-md shadow-none w-full  top-0 z-50 ${showNavbar ? "translate-y-0" : "-translate-y-full"} transition-transform duration-300 h-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">

        <div className="flex items-center justify-between py-4">

          <div className="flex items-center gap-3 ">
            <Link href="/">
              <Image
                src="/images/belts/logoo.png"
                alt="AusDog"
                height={112}
                width={200}
                className="h-17 w-auto" />

            </Link>
          </div>



          <nav className="hidden md:flex items-center gap-3">
            <Link href="/" className="text-gray-900 font-medium px-3 py-1 rounded transition-all duration-300 
             hover:text-black hover:border-2 hover:rounded-2xl hover:border-black">HOME</Link>
            <Link href="/about" className="text-gray-900 font-medium px-3 py-1 rounded transition-all duration-300 
             hover:text-black hover:border-2 hover:rounded-2xl hover:border-black">ABOUT US</Link>
             
            <div className="relative group">
              <button
                className="text-gray-900 font-medium px-3 py-1 rounded-2xl border-2 border-transparent transition-all duration-300
             hover:text-[#7644a2] hover:border-[#6f2e18] cursor-pointer"
              >
                SERVICES
              </button>

              <div className="absolute left-0 mt-2 w-56 bg-[#cbc1c1] border rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                <Link
                  href="/singapore"
                  className="block w-full text-left px-3 py-1 rounded-2xl border-2 border-transparent text-gray-900 font-medium
             transition-all duration-300 hover:text-[#7644a2] hover:border-[#6f2e18]"
                >
                  OVERSEAS RECRUITEMENT
                </Link>

                <Link
                  href="/dubai"
                  className="block w-full text-left px-3 py-1 rounded-2xl border-2 border-transparent text-gray-900 font-medium
             transition-all duration-300 hover:text-[#7644a2] hover:border-[#6f2e18]"
                >
                  COUNSELLING SESSION
                </Link>
                <Link
                  href="/france"
                  className="block w-full text-left px-3 py-1 rounded-2xl border-2 border-transparent text-gray-900 font-medium
             transition-all duration-300 hover:text-[#7644a2] hover:border-[#6f2e18]"
                >
                  PRE-DEPARTURE TRAINING
                </Link>


              </div>
            </div>

            <Link href="/about" className="text-gray-900 font-medium px-3 py-1 rounded transition-all duration-300 
             hover:text-black hover:border-2 hover:rounded-2xl hover:border-black">JOB SECTORS</Link>

            <Link href="/about" className="text-gray-900 font-medium px-3 py-1 rounded transition-all duration-300 
             hover:text-black hover:border-2 hover:rounded-2xl hover:border-black">NEWSPAPER VACANCY</Link>




            {/* <Link href="/exhibition" className="text-gray-900 font-medium px-3 py-1 rounded transition-all duration-300 
             hover:text-[#7644a2] hover:border-2 hover:rounded-2xl hover:border-yellow-400">AIRSHOW EXPO/EXHIBITION</Link> */}

            <Link href="/contact" className="text-gray-900 font-medium px-3 py-1 rounded transition-all duration-300 
              hover:border-2 hover:rounded-2xl hover:text-black hover:border-black">CONTACT</Link>


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
              href="/products"
              className="text-gray-700 hover:text-pink-600 font-medium text-lg"
            >
              Products
            </Link>

            <Link
              href="/about"
              className="text-gray-700 hover:text-pink-600 font-medium text-lg"
            >
              About Us
            </Link>

            <Link
              href="/contact"
              className="text-gray-700 hover:text-pink-600 font-medium text-lg"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
