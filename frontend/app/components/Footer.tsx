// "use client";
// import Image from "next/image";

// import Link from "next/link";
// import { useState } from "react";

// // ── Data ─────────────────────────────────────────────────────────────────────

// const quickLinks = [
//   { label: "About Us", href: "/about" },
//   { label: "Services", href: "/services/globalEmployer" },
//   { label: "Available Jobs", href: "/vacancy" },
//   { label: "Gallery", href: "/gallery" },
//   { label: "News & Blogs", href: "/news" },
// ];

// const supportLinks = [
//   { label: "FAQ", href: "/faq" },
//   { label: "Grievance Support", href: "/grievance" },
//   { label: "Misconduct Reporting", href: "/misconduct" },
//   { label: "Contact Us", href: "/contact" },
// ];

// const legalLinks = [
//   { label: "Privacy Policy", href: "/privacy-policy" },
//   { label: "Terms & Conditions", href: "/terms" },
//   { label: "Cookie Policy", href: "/cookie-policy" },
//   { label: "Disclaimer", href: "/disclaimer" },
// ];

// const countries = [
//   "UAE", "Qatar", "Saudi Arabia", "Kuwait",
//   "Oman", "Bahrain", "Malaysia", "Japan",
//   "Maldives", "Mauritius", "Cyprus", "Slovenia",
// ];

// const socials = [
//   {
//     label: "Facebook",
//     href: "#",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
//         <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
//       </svg>
//     ),
//   },
//   {
//     label: "LinkedIn",
//     href: "#",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
//         <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
//         <circle cx="4" cy="4" r="2" />
//       </svg>
//     ),
//   },
//   {
//     label: "WhatsApp",
//     href: "#",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
//         <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
//       </svg>
//     ),
//   },
// ];

// function CookieBanner() {
//   const [visible, setVisible] = useState(true);
//   if (!visible) return null;
//   return (
//     <div className="fixed bottom-0 left-0 right-0 z-50 px-4 py-4 bg-slate-900 border-t border-slate-800 shadow-2xl">
//       <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
//         <p className="text-slate-400 text-xs leading-relaxed max-w-2xl">
//           We use cookies to improve website functionality, understand visitor interaction, and enhance
//           your experience. By continuing to use this site, you consent to our{" "}
//           <Link href="/cookie-policy" className="text-amber-400 hover:underline">Cookie Policy</Link>.
//         </p>
//         <div className="flex gap-3 flex-shrink-0">
//           <button
//             onClick={() => setVisible(false)}
//             className="border border-slate-700 text-slate-400 hover:text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
//           >
//             Reject
//           </button>
//           <button
//             onClick={() => setVisible(false)}
//             className="bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold px-5 py-2 rounded-lg transition-colors duration-200"
//           >
//             Accept All
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function Footer() {
//   return (
//     <>
//       <CookieBanner />

//       <footer className="bg-[#2568A8] border-t border-slate-800 pt-6 pb-3 px-6">
//         <div className="max-w-7xl mx-auto">

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-4">

//             <div className="lg:col-span-1">
//               <div className="mb-1">
//                 <Image
//                               src="/logo.png"
//                               alt="Manpower"
//                               height={150}
//                               width={250}
//                               className="h-43 w-auto brightness-200"
//                             />
//               </div>

//               <p className="text-white text-lg leading-relaxed mb-6 justify-center">
//                ELECTRA GLOBAL RECRUITMENT  PVT LTD
//               </p>

//               {/* Socials */}
//               <div className="flex gap-3">
//                 {socials.map((s) => (
//                   <a
//                     key={s.label}
//                     href={s.href}
//                     aria-label={s.label}
//                     className="w-8 h-8 rounded-lg bg-emerald-100 border border-black flex items-center justify-center text-black transition-all duration-200"
//                   >
//                     {s.icon}
//                   </a>
//                 ))}
//               </div>
//             </div>

//             <div>
//               <h3 className="text-white font-bold text-xs tracking-[0.15em] uppercase mb-5">
//                 Quick Links
//               </h3>
//               <ul className="space-y-2.5">
//                 {quickLinks.map((l) => (
//                   <li key={l.label}>
//                     <Link
//                       href={l.href}
//                       className="text-white hover:text-red-600 text-sm transition-colors duration-200 flex items-center gap-2 group"
//                     >
//                       <span className="w-1 h-1 rounded-full bg-white group-hover:bg-red-600 transition-colors duration-200" />
//                       {l.label}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div>
//               <h3 className="text-white font-bold text-xs tracking-[0.15em] uppercase mb-5">
//                 Support
//               </h3>
//               <ul className="space-y-2.5 mb-7">
//                 {supportLinks.map((l) => (
//                   <li key={l.label}>
//                     <Link
//                       href={l.href}
//                       className="text-white hover:text-red-600 text-sm transition-colors duration-200 flex items-center gap-2 group"
//                     >
//                       <span className="w-1 h-1 rounded-full bg-white group-hover:bg-red-600 transition-colors duration-200" />
//                       {l.label}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//               </div>
//               <div>

//               <h3 className="text-white font-bold text-xs tracking-[0.15em] uppercase mb-5">
//                 Compliance
//               </h3>
//               <ul className="space-y-2.5">
//                 {legalLinks.map((l) => (
//                   <li key={l.label}>
//                     <Link
//                       href={l.href}
//                       className="text-white hover:text-red-600 text-sm transition-colors duration-200 flex items-center gap-2 group"
//                     >
//                       <span className="w-1 h-1 rounded-full bg-white group-hover:bg-red-600 transition-colors duration-200" />
//                       {l.label}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div>
//               <h3 className="text-white font-bold text-xs tracking-[0.15em] uppercase mb-5">
//                 Contact Us
//               </h3>

//               <ul className="space-y-4 mb-7">
//                 {/* Address */}
//                 <li className="flex gap-3 text-white text-sm">
//                   <span className="flex-shrink-0 mt-0.5 text-white">
//                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
//                       <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
//                       <circle cx="12" cy="10" r="3" />
//                     </svg>
//                   </span>
//                   <span>Sinamangal-9, Airport,<br />Kathmandu, Nepal</span>
//                 </li>

//                 <li className="flex gap-3 text-white text-sm">
//                   <span className="flex-shrink-0 mt-0.5 text-white">
//                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
//                       <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.0 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
//                     </svg>
//                   </span>
//                   <span>+977-1-5929405<br /></span>
//                 </li>

//                 <li className="flex gap-3 text-white text-sm">
//                   <span className="flex-shrink-0 mt-0.5 text-white">
//                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
//                       <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
//                       <polyline points="22,6 12,13 2,6" />
//                     </svg>
//                   </span>
//                   <a href="mailto:contacts.electraglobal@gmail.com" className="hover:text-red-600 transition-colors duration-200 break-all">
//                     infoelectraglobalrecruitment@gmail.com
//                   </a>
//                 </li>

//                 <li className="flex gap-3 text-white text-sm">
//                   <span className="flex-shrink-0 mt-0.5 text-white">
//                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
//                       <circle cx="12" cy="12" r="10" />
//                       <polyline points="12,6 12,12 16,14" />
//                     </svg>
//                   </span>
//                   <span>Sun–Fri, 9:30 AM – 5:30 PM</span>
//                 </li>
//               </ul>

            
//             </div>
//           </div>

//           <div className="border-t border-white pt-8 mb-8">
//             <p className="text-white text-xs uppercase tracking-widest mb-4 text-center">
//               Countries We Serve
//             </p>
//             <div className="flex flex-wrap gap-2 justify-center">
//               {countries.map((c) => (
//                 <span
//                   key={c}
//                   className="bg-emerald-100 border border-black text-black text-xs px-3 py-1 rounded-full"
//                 >
//                   {c}
//                 </span>
//               ))}
//             </div>
//           </div>

//           <div className="flex flex-wrap justify-center gap-6 mb-8">
//             <div className="flex items-center gap-2 text-white text-xs">
//               <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
//               Reg. No. 386754/82/83
//             </div>
//             <div className="flex items-center gap-2 text-white text-xs">
//               <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
//               Foreign Employment License No. 1850/082/083
//             </div>
//           </div>

//           <div className="border-t border-white pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
//             <p className="text-white text-xs text-center sm:text-left">
//               © {new Date().getFullYear()} Electra Global Recruitment Pvt. Ltd. All rights reserved.
//             </p>
//             <div className="flex gap-5">
//               {legalLinks.slice(0, 2).map((l) => (
//                 <Link key={l.label} href={l.href} className="text-white hover:text-slate-400 text-xs transition-colors duration-200">
//                   {l.label}
//                 </Link>
//               ))}
//             </div>
//           </div>

//         </div>
//       </footer>
//     </>
//   );
// }
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// ── Data ─────────────────────────────────────────────────────────────────────

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services/globalEmployer" },
  { label: "Available Jobs", href: "/vacancy" },
  { label: "Gallery", href: "/gallery" },
  { label: "News & Blogs", href: "/news" },
];

const supportLinks = [
  { label: "FAQ", href: "/faq" },
  { label: "Grievance Support", href: "/grievance" },
  { label: "Misconduct Reporting", href: "/misconduct" },
  { label: "Contact Us", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Disclaimer", href: "/disclaimer" },
];

const countries = [
  "UAE", "Qatar", "Saudi Arabia", "Kuwait",
  "Oman", "Bahrain", "Malaysia", "Japan",
  "Maldives", "Mauritius", "Cyprus", "Slovenia",
];

const socials = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
      </svg>
    ),
  },
];

function CookieBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-4 py-4 bg-white border-t border-gray-200 shadow-2xl">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-gray-600 text-xs leading-relaxed max-w-2xl">
          We use cookies to improve website functionality, understand visitor interaction, and enhance
          your experience. By continuing to use this site, you consent to our{" "}
          <Link href="/cookie-policy" className="text-emerald-600 hover:underline">Cookie Policy</Link>.
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={() => setVisible(false)}
            className="border border-gray-300 text-gray-600 hover:text-gray-800 text-xs font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
          >
            Reject
          </button>
          <button
            onClick={() => setVisible(false)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-5 py-2 rounded-lg transition-colors duration-200"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <>
      <CookieBanner />

      <footer className="bg-white border-t border-gray-200 pt-12 pb-6 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

            {/* Logo & Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-4">
                <Image
                  src="/logo.png"
                  alt="Electra Global Recruitment"
                  height={150}
                  width={250}
                  className="h-auto w-48"
                />
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-6 font-semibold">
                ELECTRA GLOBAL RECRUITMENT PVT LTD
              </p>

              {/* Socials */}
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-9 h-9 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-200"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-emerald-700 font-bold text-xs tracking-[0.15em] uppercase mb-5">
                Quick Links
              </h3>
              <ul className="space-y-2.5">
                {quickLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-gray-600 hover:text-emerald-600 text-sm transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:bg-emerald-600 transition-colors duration-200" />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-emerald-700 font-bold text-xs tracking-[0.15em] uppercase mb-5">
                Support
              </h3>
              <ul className="space-y-2.5 mb-7">
                {supportLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-gray-600 hover:text-emerald-600 text-sm transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:bg-emerald-600 transition-colors duration-200" />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Compliance */}
            <div>
              <h3 className="text-emerald-700 font-bold text-xs tracking-[0.15em] uppercase mb-5">
                Compliance
              </h3>
              <ul className="space-y-2.5">
                {legalLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-gray-600 hover:text-emerald-600 text-sm transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:bg-emerald-600 transition-colors duration-200" />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-emerald-700 font-bold text-xs tracking-[0.15em] uppercase mb-5">
                Contact Us
              </h3>
              <ul className="space-y-4">
                {/* Address */}
                <li className="flex gap-3 text-gray-600 text-sm">
                  <span className="flex-shrink-0 mt-0.5 text-emerald-600">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <span>Sinamangal-9, Airport,<br />Kathmandu, Nepal</span>
                </li>

                {/* Phone */}
                <li className="flex gap-3 text-gray-600 text-sm">
                  <span className="flex-shrink-0 mt-0.5 text-emerald-600">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.0 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </span>
                  <span>+977-1-5929405</span>
                </li>

                {/* Email */}
                <li className="flex gap-3 text-gray-600 text-sm">
                  <span className="flex-shrink-0 mt-0.5 text-emerald-600">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </span>
                  <a href="mailto:infoelectraglobalrecruitment@gmail.com" className="hover:text-emerald-600 transition-colors duration-200 break-all">
                    infoelectraglobalrecruitment@gmail.com
                  </a>
                </li>

                {/* Hours */}
                <li className="flex gap-3 text-gray-600 text-sm">
                  <span className="flex-shrink-0 mt-0.5 text-emerald-600">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12,6 12,12 16,14" />
                    </svg>
                  </span>
                  <span>Sun–Fri, 9:30 AM – 5:30 PM</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Countries We Serve */}
          <div className="border-t border-gray-200 pt-8 mb-8">
            <p className="text-emerald-700 text-xs uppercase tracking-widest mb-4 text-center font-semibold">
              Countries We Serve
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {countries.map((c) => (
                <span
                  key={c}
                  className="bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs px-3 py-1.5 rounded-full hover:bg-emerald-100 transition-colors duration-200"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* License Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-gray-500 text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Reg. No. 386754/82/83
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Foreign Employment License No. 1850/082/083
            </div>
          </div>

          {/* Copyright & Bottom Links */}
          <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-xs text-center sm:text-left">
              © {new Date().getFullYear()} Electra Global Recruitment Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex gap-5">
              {legalLinks.slice(0, 2).map((l) => (
                <Link key={l.label} href={l.href} className="text-gray-500 hover:text-emerald-600 text-xs transition-colors duration-200">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}