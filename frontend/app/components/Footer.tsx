"use client";

import { Mail, Phone, MapPin, Users } from "lucide-react";

const LINKS = {
  Company: ["About Us", "Job Sector", "Newspaper Vacancy"],
  Industries: ["Manufacturing & Construction", "IT & Technology", "Healthcare"],
  Support: ["Contact Us", "FAQs", "Terms of Service"],
};

// Contact info as a separate array for column layout
const CONTACTS = [
  { icon: <Mail className="h-4 w-4 text-green-400" />, text: "hello@electra@.com" },
  { icon: <Phone className="h-4 w-4 text-green-400" />, text: "+1 (800) 987-6543" },
  { icon: <MapPin className="h-4 w-4 text-green-400" />, text: "123 Nepal" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f1c2e] text-white">

      {/* Main Footer */}
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-5">

          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">

              <span className="text-xl font-black">
                Electra Global <span className="text-[#d44141]">Recruitment</span>
              </span>
            </div>

            <p className="mb-6 text-sm text-white/60">
              Connecting the right talent with the right opportunity — since 2008.
            </p>
          </div>

          {/* Remaining Links */}
          {Object.entries(LINKS).map(([section, links]) => (
            <div key={section}>
              <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-[#d44141]">
                {section}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <span className="text-sm text-white/60">{link}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-[#d44141]">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/60">
              {CONTACTS.map(({ icon, text }) => (
                <li key={text} className="flex items-center gap-2">
                  {icon}
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-5 text-center">
          <p className="text-xs text-red-900">
            © {new Date().getFullYear()} Electra Global Recruitment. All rights reserved.
          </p>
        </div>
      </div>

    </footer>
  );
}