
"use client";
import { useState } from "react";
import Image from "next/image";

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

const compliance = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Disclaimer", href: "/disclaimer" },
];

const countries = [
  "UAE", "Qatar", "Saudi Arabia", "Kuwait",
  "Oman", "Bahrain", "Malaysia", 

];

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1AEniKV8x2/?mibextid=wwXIfr",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/118384280/admin/dashboard/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  // YouTube
{
  label: "YouTube",
  href: "https://www.youtube.com/@electraglobal-w7j",
  icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1C4.5 20.5 12 20.5 12 20.5s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.5 15.5v-7l6 3.5-6 3.5z" />
    </svg>
  ),
},

// TikTok
{
  label: "TikTok",
  href: "https://www.tiktok.com/@electraglobalrecruitment?_r=1&_t=ZS-977MPEXrfAS",
  icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M16 3c.6 2.4 2.3 4 4.7 4.3v3.2c-1.7.1-3.3-.4-4.7-1.4v6.7a5.7 5.7 0 1 1-5.7-5.7c.3 0 .7 0 1 .1v3.3a2.4 2.4 0 1 0 1.7 2.3V3h3z" />
    </svg>
  ),
},

// X (Twitter)
{
  label: "X",
  href: "https://x.com/electra_pvt",
  icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M18.9 2H22l-6.8 7.8L23 22h-6.6l-5.2-6.5L5.7 22H2.5l7.3-8.4L1 2h6.7l4.7 6L18.9 2zm-1.2 18h1.8L6.3 3.9H4.4L17.7 20z"/>
    </svg>
  ),
}
];

function CookieBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-4 py-4 bg-white border-t border-gray-200 shadow-2xl">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
          We use cookies to improve website functionality, understand visitor interaction, and enhance
          your experience. By continuing to use this site, you consent to our{" "}
          <a href="/cookie-policy" className="text-emerald-600 hover:underline">Cookie Policy</a>.
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={() => setVisible(false)}
            className="border border-gray-300 text-gray-600 hover:text-gray-800 text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
          >
            Reject
          </button>
          <button
            onClick={() => setVisible(false)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold px-5 py-2 rounded-lg transition-colors duration-200"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <>
      <CookieBanner />

      {/* Dynamic Header Wave Container */}
      <div className="bg-[#E8EEF4] w-full overflow-hidden leading-none relative">
        <svg
          viewBox="0 0 1440 70"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-16 block relative"
        >
          {/* Main Dark Emerald Arch Background Shape */}
          <path
            d="M0,20 C360,70 1080,70 1440,20 L1440,70 L0,70 Z"
            fill="#014122"
          />
          {/* Curved Red Accent Border Line following the arch exact curvature */}
          <path
            d="M0,20 C360,70 1080,70 1440,20"
            fill="none"
            stroke="#dc2626"
            strokeWidth="10"
          />
        </svg>
      </div>

      <footer className="bg-[#014122] text-white font-sans relative">
        
        {/* Main Footer Layout Container */}
        <div className="max-w-7xl mx-auto px-6 pb-8 pt-2">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
            
            {/* Column 1: Expanded Logo Block & Tagline Description */}
            <div className="md:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left">
              {/* White dropdown container matched seamlessly to the curved layout */}
              <div className="mb-6 w-[180px] h-[200px] bg-white rounded-b-[5.5rem] flex items-center justify-center p-3 shadow-xl -mt-16 pt-6 relative z-20">
                <div className="w-[1000px] h-[3000px]relative">
                  <Image
                    src="/images/logoo.jpeg"
                    alt="Electra Global Recruitment"
                    fill
                    // className="object-contain w-[180px] h-[200px] "
                     className="object-contain scale-75"
                    sizes="500px"
                    priority
                  />
                </div>
              </div>
              <p className="text-white text-sm font-medium leading-relaxed max-w-[200px] mt-2">
                Ethical recruitment solutions connecting talent globally.
              </p>
              <div className="w-10 h-[2px] bg-red-600 mt-3"></div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="flex gap-6 text-white font-bold text-sm tracking-wider  uppercase mb-5 border-b border-emerald-800/60 pb-1.5" >
                Quick Links
              </h3>
              <ul className="space-y-3.5">
                {quickLinks.map((l) => (
                  <li key={l.label} className="group  items-center text-sm">
                    <span className="text-red-500 text-xl mr-2 opacity-80 transition-transform duration-200 group-hover:translate-x-1">&gt;</span>
                    <a href={l.href} className="text-white hover:text-blue-600 transition-colors duration-200">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Services */}
            <div>
              <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-5 border-b border-emerald-800/60 pb-1.5">
              Support
              </h3>
              <ul className="space-y-3.5">
                {supportLinks.map((l) => (
                  <li key={l.label} className="group flex items-center text-sm">
                    <span className="text-red-500 text-xl mr-2 opacity-80  transition-transform duration-200 group-hover:translate-x-1">&gt;</span>
                    <a href={l.href} className="text-white hover:text-blue-600 transition-colors duration-200">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Resources */}
            <div>
              <h3 className=" text-white font-bold text-sm tracking-wider uppercase mb-5 border-b border-emerald-800/60 pb-1.5">
              compliance
              </h3>
              <ul className="space-y-3.5">
                {compliance.map((l) => (
                  <li key={l.label} className="group flex items-center text-sm">
                    <span className="text-red-500 text-xl mr-2 opacity-80 transition-transform duration-200 group-hover:translate-x-1">&gt;</span>
                    <a href={l.href} className="text-white hover:text-blue-600 transition-colors duration-200">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 6: Get In Touch */}
            <div>
              <h3 className=" text-white font-bold text-sm tracking-wider uppercase mb-5 border-b border-emerald-800/60 pb-1.5">
                Get In Touch
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3 text-white text-sm items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white text-red-600 flex items-center justify-center shadow-sm">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <span className="leading-tight">Sinamangal-9, Airport,<br />Kathmandu, Nepal</span>
                </li>
                <li className="flex gap-3 text-white text-sm items-center">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white text-red-600 flex items-center justify-center shadow-sm">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.0 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </span>
                  <a href="tel:+97715929405" className="hover:text-white transition-colors duration-200">+977-01-5929405</a>
                </li>
                <li className="flex gap-3 text-white text-sm items-center">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white text-red-600 flex items-center justify-center shadow-sm">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </span>
                  <a href="mailto:infoelectraglobalrecruitment@gmail.com" className="hover:text-blue-600 transition-colors duration-200 break-all leading-tight">
                    admin.electraglobalrecruitment@gmail.com
                  </a>
                </li>
                <li className="flex gap-3 text-white text-sm items-center">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white text-red-600 flex items-center justify-center shadow-sm">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12,6 12,12 16,14" />
                    </svg>
                  </span>
                  <span>Sun–Fri, 9:30 AM–5:30 PM</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Countries We Serve - Styled badged area */}
          <div className="border-t border-pt-6 mb-6">
            <p className="text-white text-[11px] uppercase tracking-widest mb-3 text-center font-bold mt-6">
              Countries We Serve
            </p>
            <div className="flex flex-wrap gap-1.5 justify-center max-w-4xl mx-auto">
              {countries.map((c) => (
                <span
                  key={c}
                  className="bg-emerald-900/60 border border-emerald-700/50 text-white text-[12px] px-3 py-1 rounded-full hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-200 cursor-default"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Social Icons Strip Row */}
<div className="flex items-center justify-between w-full max-w-7xl mx-auto gap-4 my-6">
  {/* Left balancing wing line */}
  <div className="flex-1 h-[1px] bg-white"></div>
  
  {/* Amplified Interactive Social Circle Container */}
  <div className="flex justify-center gap-3.5 px-2">
    {socials.map((s) => (
      <a
        key={s.label}
        href={s.href}
        aria-label={s.label}
        className="w-10 h-10 rounded-full border border-emerald-600/80 flex items-center justify-center text-emerald-100 hover:bg-white hover:text-[#014122] hover:border-white hover:scale-110 shadow-md transition-all duration-300"
      >
        <div className="scale-110">
          {s.icon}
        </div>
      </a>
    ))}
  </div>

  {/* Right balancing wing line */}
  <div className="flex-1 h-[1px] bg-white"></div>
</div>

          {/* Registration Info Subtitle Block */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 mt-2 mb-4 text-center">
            <div className="text-white text-[15px] tracking-wide">
              Reg. No. <span className="text-white font-large">386754/82/83</span>
            </div>
            <div className="text-white text-[15px] tracking-wide">
              Foreign Employment License No. <span className="text-white font-medium">1850/082/083</span>
            </div>
          </div>
        </div>

        {/* Bottom bar — Deep strip matching original design footer */}
        <div className="bg-[#002b16] border-t border-emerald-900/50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Dynamic Copyright block */}
            <p className="text-gray-400 text-[13px] text-center lg:text-left">
              &copy; {new Date().getFullYear()} Electra Global Recruitment Pvt. Ltd. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;