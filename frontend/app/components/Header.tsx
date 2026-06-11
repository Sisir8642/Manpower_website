// 'use client';

// import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function Header() {
//   const [showNavbar, setShowNavbar] = useState(true);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   const [mobileDropdowns, setMobileDropdowns] = useState({
//     about: false,
//     howWeWork: false,
//     services: false
//   });

//   const toggleMobileDropdown = (key: keyof typeof mobileDropdowns) => {
//     setMobileDropdowns(prev => ({
//       ...prev,
//       [key]: !prev[key]
//     }));
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       if (currentScrollY > lastScrollY && currentScrollY > 50) {
//         setShowNavbar(false);
//         setMobileMenuOpen(false); // Cleanly collapse active trays on scroll down
//       } else {
//         setShowNavbar(true);
//       }

//       setLastScrollY(currentScrollY);
//     };
//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   const closeAllMenus = () => {
//     setMobileMenuOpen(false);
//     setMobileDropdowns({ about: false, howWeWork: false, services: false });
//   };

//   return (
//     <header
//       className={`sticky top-0 z-50 h-22 transition-all  duration-500 ${
//         showNavbar ? "translate-y-0" : "-translate-y-full"
//       } ${
//         lastScrollY
//           ? "bg-[#F2F5FD] backdrop-blur-xl shadow-xl border-b border-gray-200"
//           : "bg-[#F2F5FD] backdrop-blur-md shadow-lg"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between py-1">
//           <div className="flex items-center gap-3">
//             <Link href="/" onClick={closeAllMenus}>
//               <Image
//                 src="/logo.png"
//                 alt="Manpower"
//                 height={112}
//                 width={200}
//                 className="h-23 w-auto"
//               />
//             </Link>
//           </div>

//           <nav className="hidden md:flex items-center gap-3">
//             <Link
//               href="/"
//               className="relative text-gray-900 font-medium px-3 py-2 rounded-xl transition-all duration-300 hover:text-green-700 group overflow-hidden"
//             >
//               <span className="relative z-10">HOME</span>
//               <span className="absolute inset-0 bg-gradient-to-r from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
//               <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-red-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
//             </Link>

//             <div className="relative group">
//               <button className="flex items-center gap-1 relative text-gray-900 font-medium px-3 py-2 rounded-xl transition-all duration-300 hover:text-green-700 overflow-hidden">
//                 <span className="relative z-10">ABOUT US</span>
//                 <ChevronDown size={14} className="relative z-10 transition-transform duration-300 group-hover:rotate-180" />
//                 <span className="absolute inset-0 bg-gradient-to-r from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
//                 <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-red-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
//               </button>

//               <div className="absolute left-0 mt-2 w-64 bg-white border rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
//                 <Link href="/about" className="block w-full text-left px-4 py-3 font-semibold text-lg text-gray-600 hover:bg-green-50 hover:text-green-700 transition-all duration-300">About Electra</Link>
//                 <Link href="/about/missionVission" className="block w-full text-left px-4 py-3 font-semibold text-lg text-gray-600 hover:bg-green-50 hover:text-green-700 transition-all duration-300">Mission, Vision & Values</Link>
//                 <Link href="/about/WhyChooseElectra" className="block w-full text-left px-4 py-3 font-semibold text-lg text-gray-600 hover:bg-green-50 hover:text-green-700 transition-all duration-300">Why Choose Electra</Link>
//                 <Link href="/about/BodMessage" className="block w-full text-left px-4 py-3 font-semibold text-lg text-gray-600 hover:bg-green-50 hover:text-green-700 transition-all duration-300">Message From BOD</Link>
//                 <Link href="/about/trainingCertificates" className="block w-full text-left px-4 py-3 font-semibold text-lg text-gray-600 hover:bg-green-50 hover:text-green-700 transition-all duration-300">Training & Certifications</Link>
//               </div>
//             </div>

//             <div className="relative group">
//               <button className="flex items-center gap-1 relative text-gray-900 font-medium px-3 py-2 rounded-xl transition-all duration-300 hover:text-green-700 overflow-hidden">
//                 <span className="relative z-10">HOW WE WORK</span>
//                 <ChevronDown size={14} className="relative z-10 transition-transform duration-300 group-hover:rotate-180" />
//                 <span className="absolute inset-0 bg-gradient-to-r from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
//                 <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-red-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
//               </button>

//               <div className="absolute left-0 mt-2 w-64 bg-white border rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
//                 <Link href="/howWeWork/legalCompliance" className="block w-full text-left px-4 py-3 font-semibold text-lg text-gray-600 hover:bg-green-50 hover:text-green-700 transition-all duration-300">Legal Compliance and Accreditation</Link>
//                 <Link href="/howWeWork/orgStructure" className="block w-full text-left px-4 py-3 font-semibold text-lg text-gray-600 hover:bg-green-50 hover:text-green-700 transition-all duration-300">Organizational Structure</Link>
//                 <Link href="/howWeWork/commitments" className="block w-full text-left px-4 py-3 font-semibold text-lg text-gray-600 hover:bg-green-50 hover:text-green-700 transition-all duration-300">Our Commitments</Link>
//                 <Link href="/howWeWork/ourTeam" className="block w-full text-left px-4 py-3 font-semibold text-lg text-gray-600 hover:bg-green-50 hover:text-green-700 transition-all duration-300">Our Team</Link>
//                 <Link href="/howWeWork/RequiredDocs" className="block w-full text-left px-4 py-3 font-semibold text-lg text-gray-600 hover:bg-green-50 hover:text-green-700 transition-all duration-300">Required Documents</Link>
//                 <Link href="/howWeWork/recruitement" className="block w-full text-left px-4 py-3 font-semibold text-lg text-gray-600 hover:bg-green-50 hover:text-green-700 transition-all duration-300">Recruitment Procedure</Link>
//               </div>
//             </div>

//             <div className="relative group">
//               <button className="flex items-center gap-1 relative text-gray-900 font-medium px-3 py-2 rounded-xl transition-all duration-300 hover:text-green-700 overflow-hidden">
//                 <span className="relative z-10">SERVICES</span>
//                 <ChevronDown size={14} className="relative z-10 transition-transform duration-300 group-hover:rotate-180" />
//                 <span className="absolute inset-0 bg-gradient-to-r from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
//                 <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-red-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
//               </button>

//               <div className="absolute left-0 mt-2 w-64 bg-white border rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
//                 <Link href="/services/globalEmployer" className="block w-full text-left px-4 py-3 font-semibold text-lg text-gray-600 hover:bg-green-50 hover:text-green-700 transition-all duration-300">Services for Global Employers</Link>
//                 <Link href="/services/migratingWorkers" className="block w-full text-left px-4 py-3 font-semibold text-lg text-gray-600 hover:bg-green-50 hover:text-green-700 transition-all duration-300">Services for Migrating Workers</Link>
//                 <Link href="/services/stakeholders" className="block w-full text-left px-4 py-3 font-semibold text-lg text-gray-600 hover:bg-green-50 hover:text-green-700 transition-all duration-300">Services for Stakeholders</Link>
//                 <Link href="/services/serveCountries" className="block w-full text-left px-4 py-3 font-semibold text-lg text-gray-600 hover:bg-green-50 hover:text-green-700 transition-all duration-300">Countries We Serve</Link>
//               </div>
//             </div>

//             <Link
//               href="/vacancy"
//               className="relative text-gray-900 font-medium px-3 py-2 rounded-xl transition-all duration-300 hover:text-green-700 group overflow-hidden"
//             >
//               <span className="relative z-10">AVAILABLE JOBS</span>
//               <span className="absolute inset-0 bg-gradient-to-r from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
//               <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-red-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
//             </Link>

//             <Link
//               href="/contact"
//               className="relative text-gray-900 font-medium px-3 py-2 rounded-xl transition-all duration-300 hover:text-green-700 group overflow-hidden"
//             >
//               <span className="relative z-10">CONTACT US</span>
//               <span className="absolute inset-0 bg-green-100 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
//               <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-red-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
//             </Link>
//           </nav>

//           <button
//             className="md:hidden p-2 rounded-xl text-gray-900 hover:bg-gray-100 transition-colors"
//             aria-label="Toggle menu"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {mobileMenuOpen && (
//         <div className="md:hidden absolute left-0 top-full w-full bg-white border-t border-gray-200 shadow-2xl max-h-[calc(100vh-5.5rem)] overflow-y-auto z-40">
//           <nav className="flex flex-col px-5 py-6 space-y-3">
            
//             <Link
//               href="/"
//               onClick={closeAllMenus}
//               className="text-gray-900 hover:text-green-700 font-bold text-base px-3 py-2 rounded-xl hover:bg-green-50/50 transition-all"
//             >
//               HOME
//             </Link>

//             <div className="flex flex-col">
//               <button
//                 onClick={() => toggleMobileDropdown('about')}
//                 className="flex items-center justify-between w-full text-left text-gray-900 hover:text-green-700 font-bold text-base px-3 py-2 rounded-xl hover:bg-green-50/50 transition-all"
//               >
//                 <span>ABOUT US</span>
//                 {mobileDropdowns.about ? <ChevronUp size={18} className="text-green-700" /> : <ChevronDown size={18} className="text-gray-500" />}
//               </button>
              
//               {mobileDropdowns.about && (
//                 <div className="flex flex-col ml-4 mt-1 pl-3 border-l-2 border-green-600/30 space-y-1">
//                   <Link href="/about" onClick={closeAllMenus} className="block py-2 text-[15px] font-semibold text-gray-600 hover:text-green-700">About Electra</Link>
//                   <Link href="/about/missionVission" onClick={closeAllMenus} className="block py-2 text-[15px] font-semibold text-gray-600 hover:text-green-700">Mission, Vision & Values</Link>
//                   <Link href="/about/WhyChooseElectra" onClick={closeAllMenus} className="block py-2 text-[15px] font-semibold text-gray-600 hover:text-green-700">Why Choose Electra</Link>
//                   <Link href="/about/BodMessage" onClick={closeAllMenus} className="block py-2 text-[15px] font-semibold text-gray-600 hover:text-green-700">Message From BOD</Link>
//                   <Link href="/about/trainingCertificates" onClick={closeAllMenus} className="block py-2 text-[15px] font-semibold text-gray-600 hover:text-green-700">Training & Certifications</Link>
//                 </div>
//               )}
//             </div>

//             <div className="flex flex-col">
//               <button
//                 onClick={() => toggleMobileDropdown('howWeWork')}
//                 className="flex items-center justify-between w-full text-left text-gray-900 hover:text-green-700 font-bold text-base px-3 py-2 rounded-xl hover:bg-green-50/50 transition-all"
//               >
//                 <span>HOW WE WORK</span>
//                 {mobileDropdowns.howWeWork ? <ChevronUp size={18} className="text-green-700" /> : <ChevronDown size={18} className="text-gray-500" />}
//               </button>

//               {mobileDropdowns.howWeWork && (
//                 <div className="flex flex-col ml-4 mt-1 pl-3 border-l-2 border-green-600/30 space-y-1">
//                   <Link href="/howWeWork/legalCompliance" onClick={closeAllMenus} className="block py-2 text-[15px] font-semibold text-gray-600 hover:text-green-700">Legal Compliance and Accreditation</Link>
//                   <Link href="/howWeWork/orgStructure" onClick={closeAllMenus} className="block py-2 text-[15px] font-semibold text-gray-600 hover:text-green-700">Organizational Structure</Link>
//                   <Link href="/howWeWork/commitments" onClick={closeAllMenus} className="block py-2 text-[15px] font-semibold text-gray-600 hover:text-green-700">Our Commitments</Link>
//                   <Link href="/howWeWork/ourTeam" onClick={closeAllMenus} className="block py-2 text-[15px] font-semibold text-gray-600 hover:text-green-700">Our Team</Link>
//                   <Link href="/howWeWork/RequiredDocs" onClick={closeAllMenus} className="block py-2 text-[15px] font-semibold text-gray-600 hover:text-green-700">Required Documents</Link>
//                   <Link href="/howWeWork/recruitement" onClick={closeAllMenus} className="block py-2 text-[15px] font-semibold text-gray-600 hover:text-green-700">Recruitment Procedure</Link>
//                 </div>
//               )}
//             </div>

//             <div className="flex flex-col">
//               <button
//                 onClick={() => toggleMobileDropdown('services')}
//                 className="flex items-center justify-between w-full text-left text-gray-900 hover:text-green-700 font-bold text-base px-3 py-2 rounded-xl hover:bg-green-50/50 transition-all"
//               >
//                 <span>SERVICES</span>
//                 {mobileDropdowns.services ? <ChevronUp size={18} className="text-green-700" /> : <ChevronDown size={18} className="text-gray-500" />}
//               </button>

//               {mobileDropdowns.services && (
//                 <div className="flex flex-col ml-4 mt-1 pl-3 border-l-2 border-green-600/30 space-y-1">
//                   <Link href="/services/globalEmployer" onClick={closeAllMenus} className="block py-2 text-[15px] font-semibold text-gray-600 hover:text-green-700">Services for Global Employers</Link>
//                   <Link href="/services/migratingWorkers" onClick={closeAllMenus} className="block py-2 text-[15px] font-semibold text-gray-600 hover:text-green-700">Services for Migrating Workers</Link>
//                   <Link href="/services/stakeholders" onClick={closeAllMenus} className="block py-2 text-[15px] font-semibold text-gray-600 hover:text-green-700">Services for Stakeholders</Link>
//                   <Link href="/services/serveCountries" onClick={closeAllMenus} className="block py-2 text-[15px] font-semibold text-gray-600 hover:text-green-700">Countries We Serve</Link>
//                 </div>
//               )}
//             </div>

//             <Link
//               href="/vacancy"
//               onClick={closeAllMenus}
//               className="text-gray-900 hover:text-green-700 font-bold text-base px-3 py-2 rounded-xl hover:bg-green-50/50 transition-all"
//             >
//               AVAILABLE JOBS
//             </Link>

//             <Link
//               href="/contact"
//               onClick={closeAllMenus}
//               className="text-gray-900 hover:text-green-700 font-bold text-base px-3 py-2 rounded-xl hover:bg-green-50/50 transition-all"
//             >
//               CONTACT US
//             </Link>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }
'use client';

import { Menu, X, ChevronDown, ChevronUp, Phone, Mail, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [mobileDropdowns, setMobileDropdowns] = useState({
    about: false,
    howWeWork: false,
    services: false
  });

  const toggleMobileDropdown = (key: keyof typeof mobileDropdowns) => {
    setMobileDropdowns(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false);
        setMobileMenuOpen(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setMobileDropdowns({ about: false, howWeWork: false, services: false });
  };

  return (
    <>
      {/* Top Bar - License Info & Social Icons */}
      <div className="hidden md:block bg-white border-b border-gray-100 py-2 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-700">Licensed by Government of Nepal</span>
              <span className="text-gray-300">|</span>
              <span className="text-gray-600">License No. 1850/082/083</span>
            </div>
            <div className="flex items-center gap-3">
              <a href="tel:+97715915454" className="flex items-center gap-1 text-gray-600 hover:text-emerald-600 transition">
                <Phone size={12} /> +977 1 5915454
              </a>
              <span className="text-gray-300">|</span>
              <a href="mailto:info@electraglobal.com.np" className="flex items-center gap-1 text-gray-600 hover:text-emerald-600 transition">
                <Mail size={12} /> info@electraglobal.com.np
              </a>
            </div>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex items-center gap-2">
            <a href="https://www.facebook.com/share/1AEniKV8x2/?mibextid=wwXIfr" className="text-gray-400 hover:text-blue-600 transition-colors">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/118384280/admin/dashboard/" className="text-gray-400 hover:text-blue-700 transition-colors">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
           
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        } bg-white shadow-md border-b border-gray-100`}
      >
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2">
            {/* Logo Section */}
            <div className="flex items-center gap-2">
              <Link href="/" onClick={closeAllMenus} className="flex items-center gap-2">
                <div className="w-14 h-14 relative">
                  <Image
                    src="/logo.png"
                    alt="Electra Global Recruitment"
                    width={56}
                    height={56}
                    className="object-contain rounded-full"
                    priority
                  />
                </div>
                <div>
                  <h1 className="text-emerald-800 font-extrabold text-base tracking-tight leading-tight">
                    ELECTRA GLOBAL
                  </h1>
                  <p className="text-emerald-600 text-[9px] font-semibold -mt-0.5">
                    Recruitment Pvt. Ltd.
                  </p>
                  <p className="text-black text-[7px] italic">"Connecting talent: Delivering Ethical Recruitment Solution "</p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-0.5">
              <Link
                href="/"
                className="relative text-gray-700 font-semibold text-sm px-3 py-1.5 rounded-lg transition-all duration-300 hover:text-emerald-700 group"
              >
                Home
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-emerald-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
              </Link>

              {/* About Us Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-gray-700 font-semibold text-sm px-3 py-1.5 rounded-lg transition-all duration-300 hover:text-emerald-700">
                  About Us
                  <ChevronDown size={13} className="transition-transform duration-300 group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-100 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                  <Link href="/about" className="block px-4 py-2 text-sm text-gray-600 hover:bg-emerald-50 hover:text-emerald-700 rounded-t-lg">About Electra</Link>
                  <Link href="/about/missionVission" className="block px-4 py-2 text-sm text-gray-600 hover:bg-emerald-50 hover:text-emerald-700">Mission, Vision & Values</Link>
                  <Link href="/about/WhyChooseElectra" className="block px-4 py-2 text-sm text-gray-600 hover:bg-emerald-50 hover:text-emerald-700">Why Choose Electra</Link>
                  <Link href="/about/BodMessage" className="block px-4 py-2 text-sm text-gray-600 hover:bg-emerald-50 hover:text-emerald-700">Message From BOD</Link>
                  <Link href="/about/trainingCertificates" className="block px-4 py-2 text-sm text-gray-600 hover:bg-emerald-50 hover:text-emerald-700 rounded-b-lg">Training & Certifications</Link>
                </div>
              </div>

              {/* How We Work Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-gray-700 font-semibold text-sm px-3 py-1.5 rounded-lg transition-all duration-300 hover:text-emerald-700">
                  How We Work
                  <ChevronDown size={13} className="transition-transform duration-300 group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-100 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                  <Link href="/howWeWork/legalCompliance" className="block px-4 py-2 text-sm text-gray-600 hover:bg-emerald-50 hover:text-emerald-700 rounded-t-lg">Legal Compliance & Accreditation</Link>
                  <Link href="/howWeWork/orgStructure" className="block px-4 py-2 text-sm text-gray-600 hover:bg-emerald-50 hover:text-emerald-700">Organizational Structure</Link>
                  <Link href="/howWeWork/commitments" className="block px-4 py-2 text-sm text-gray-600 hover:bg-emerald-50 hover:text-emerald-700">Our Commitments</Link>
                  <Link href="/howWeWork/ourTeam" className="block px-4 py-2 text-sm text-gray-600 hover:bg-emerald-50 hover:text-emerald-700">Our Team</Link>
                  <Link href="/howWeWork/RequiredDocs" className="block px-4 py-2 text-sm text-gray-600 hover:bg-emerald-50 hover:text-emerald-700">Required Documents</Link>
                  <Link href="/howWeWork/recruitement" className="block px-4 py-2 text-sm text-gray-600 hover:bg-emerald-50 hover:text-emerald-700 rounded-b-lg">Recruitment Procedure</Link>
                </div>
              </div>

              {/* Services Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-gray-700 font-semibold text-sm px-3 py-1.5 rounded-lg transition-all duration-300 hover:text-emerald-700">
                  Services
                  <ChevronDown size={13} className="transition-transform duration-300 group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-100 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                  <Link href="/services/globalEmployer" className="block px-4 py-2 text-sm text-gray-600 hover:bg-emerald-50 hover:text-emerald-700 rounded-t-lg">Services for Global Employers</Link>
                  <Link href="/services/migratingWorkers" className="block px-4 py-2 text-sm text-gray-600 hover:bg-emerald-50 hover:text-emerald-700">Services for Migrating Workers</Link>
                  <Link href="/services/stakeholders" className="block px-4 py-2 text-sm text-gray-600 hover:bg-emerald-50 hover:text-emerald-700">Services for Stakeholders</Link>
                  <Link href="/services/serveCountries" className="block px-4 py-2 text-sm text-gray-600 hover:bg-emerald-50 hover:text-emerald-700 rounded-b-lg">Countries We Serve</Link>
                </div>
              </div>

              <Link
                href="/vacancy"
                className="relative text-gray-700 font-semibold text-sm px-3 py-1.5 rounded-lg transition-all duration-300 hover:text-emerald-700 group"
              >
                Available Jobs
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-emerald-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
              </Link>

              <Link
                href="/contact"
                className="relative text-gray-700 font-semibold text-sm px-3 py-1.5 rounded-lg transition-all duration-300 hover:text-emerald-700 group"
              >
                Contact Us
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-emerald-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
              </Link>
            </nav>

            {/* Right Side - Phone */}
            <div className="hidden lg:flex items-center gap-2">
              <div className="flex items-center gap-2">
                <Phone size={15} className="text-emerald-600" />
                <span className="text-gray-700 font-semibold text-sm">+977 1 5915454</span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-1.5 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute left-0 top-full w-full bg-white border-t border-gray-100 shadow-xl max-h-[calc(100vh-5rem)] overflow-y-auto z-40">
            <nav className="flex flex-col px-4 py-3 space-y-1">
              
              <Link
                href="/"
                onClick={closeAllMenus}
                className="text-gray-700 hover:text-emerald-700 font-semibold py-2 border-b border-gray-100"
              >
                Home
              </Link>

              {/* About Us Mobile */}
              <div className="border-b border-gray-100">
                <button
                  onClick={() => toggleMobileDropdown('about')}
                  className="flex items-center justify-between w-full text-left text-gray-700 hover:text-emerald-700 font-semibold py-2"
                >
                  <span>About Us</span>
                  {mobileDropdowns.about ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {mobileDropdowns.about && (
                  <div className="flex flex-col ml-3 pb-2 space-y-1">
                    <Link href="/about" onClick={closeAllMenus} className="py-1 text-sm text-gray-500 hover:text-emerald-600">About Electra</Link>
                    <Link href="/about/missionVission" onClick={closeAllMenus} className="py-1 text-sm text-gray-500 hover:text-emerald-600">Mission, Vision & Values</Link>
                    <Link href="/about/WhyChooseElectra" onClick={closeAllMenus} className="py-1 text-sm text-gray-500 hover:text-emerald-600">Why Choose Electra</Link>
                    <Link href="/about/BodMessage" onClick={closeAllMenus} className="py-1 text-sm text-gray-500 hover:text-emerald-600">Message From BOD</Link>
                    <Link href="/about/trainingCertificates" onClick={closeAllMenus} className="py-1 text-sm text-gray-500 hover:text-emerald-600">Training & Certifications</Link>
                  </div>
                )}
              </div>

              {/* How We Work Mobile */}
              <div className="border-b border-gray-100">
                <button
                  onClick={() => toggleMobileDropdown('howWeWork')}
                  className="flex items-center justify-between w-full text-left text-gray-700 hover:text-emerald-700 font-semibold py-2"
                >
                  <span>How We Work</span>
                  {mobileDropdowns.howWeWork ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {mobileDropdowns.howWeWork && (
                  <div className="flex flex-col ml-3 pb-2 space-y-1">
                    <Link href="/howWeWork/legalCompliance" onClick={closeAllMenus} className="py-1 text-sm text-gray-500 hover:text-emerald-600">Legal Compliance & Accreditation</Link>
                    <Link href="/howWeWork/orgStructure" onClick={closeAllMenus} className="py-1 text-sm text-gray-500 hover:text-emerald-600">Organizational Structure</Link>
                    <Link href="/howWeWork/commitments" onClick={closeAllMenus} className="py-1 text-sm text-gray-500 hover:text-emerald-600">Our Commitments</Link>
                    <Link href="/howWeWork/ourTeam" onClick={closeAllMenus} className="py-1 text-sm text-gray-500 hover:text-emerald-600">Our Team</Link>
                    <Link href="/howWeWork/RequiredDocs" onClick={closeAllMenus} className="py-1 text-sm text-gray-500 hover:text-emerald-600">Required Documents</Link>
                    <Link href="/howWeWork/recruitement" onClick={closeAllMenus} className="py-1 text-sm text-gray-500 hover:text-emerald-600">Recruitment Procedure</Link>
                  </div>
                )}
              </div>

              {/* Services Mobile */}
              <div className="border-b border-gray-100">
                <button
                  onClick={() => toggleMobileDropdown('services')}
                  className="flex items-center justify-between w-full text-left text-gray-700 hover:text-emerald-700 font-semibold py-2"
                >
                  <span>Services</span>
                  {mobileDropdowns.services ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {mobileDropdowns.services && (
                  <div className="flex flex-col ml-3 pb-2 space-y-1">
                    <Link href="/services/globalEmployer" onClick={closeAllMenus} className="py-1 text-sm text-gray-500 hover:text-emerald-600">Services for Global Employers</Link>
                    <Link href="/services/migratingWorkers" onClick={closeAllMenus} className="py-1 text-sm text-gray-500 hover:text-emerald-600">Services for Migrating Workers</Link>
                    <Link href="/services/stakeholders" onClick={closeAllMenus} className="py-1 text-sm text-gray-500 hover:text-emerald-600">Services for Stakeholders</Link>
                    <Link href="/services/serveCountries" onClick={closeAllMenus} className="py-1 text-sm text-gray-500 hover:text-emerald-600">Countries We Serve</Link>
                  </div>
                )}
              </div>

              <Link
                href="/vacancy"
                onClick={closeAllMenus}
                className="text-gray-700 hover:text-emerald-700 font-semibold py-2 border-b border-gray-100"
              >
                Available Jobs
              </Link>

              <Link
                href="/contact"
                onClick={closeAllMenus}
                className="text-gray-700 hover:text-emerald-700 font-semibold py-2 border-b border-gray-100"
              >
                Contact Us
              </Link>

              {/* Mobile Phone */}
              <div className="pt-3 flex items-center justify-center gap-2">
                <Phone size={14} className="text-emerald-600" />
                <span className="text-gray-700 font-semibold text-sm">+977 1 5915454</span>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}