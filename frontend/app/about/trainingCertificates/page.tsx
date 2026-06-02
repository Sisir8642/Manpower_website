"use client";
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";

const certifications = [
  {
    title: "EIQ",
    tagline: "Welfare & Ethics",
    description:
      "Training programs heavily focused on ethical recruitment practices, global human compliance, and overseas worker welfare.",
    certificates: [
      "/certificates/ethical-1.jpg",
      "/certificates/ethical-2.jpg",
      "/certificates/ethical-3.jpg",
    ],
  },
  {
    title: "Forced Labour Eradication",
    tagline: "Fair Labor Standards",
    description:
      "Professional certifications and actionable blueprints related to transparent, zero-cost, and lawful workforce mobilization.",
    certificates: [
      "/certificates/employment-1.jpg",
      "/certificates/employment-2.jpg",
    ],
  },
  {
    title: "IOM-IRIS",
    tagline: "International Recruitment Alignment",
    description:
      "Global standards training focused on migrant worker protections and multi-stakeholder international HR management framework verification.",
    certificates: [
      "/certificates/hr-1.jpg",
      "/certificates/hr-2.jpg",
      "/certificates/hr-3.jpg",
    ],
  },
  {
    title: "OTL & SEDEX",
    tagline: "Supply Chain Auditing",
    description:
      "Dedicated corporate alignment modules for ethical business data collection, social accountability, and operational transparency metrics.",
    certificates: [
      "/certificates/hr-1.jpg",
      "/certificates/hr-2.jpg",
      "/certificates/hr-3.jpg",
    ],
  },
  {
    title: "RBA Related Trainings",
    tagline: "Responsible Business Alliance",
    description:
      "Comprehensive certification training matching electronic, automotive, and technology tier-1 supply chain human rights compliance.",
    certificates: [
      "/certificates/hr-1.jpg",
      "/certificates/hr-2.jpg",
      "/certificates/hr-3.jpg",
    ],
  },
];

const Certificates = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [open, setOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const allCertificates = certifications.flatMap((category) =>
    category.certificates.map((image) => ({ src: image }))
  );

  const handleImageClick = (currentSrc: string) => {
    const globalIndex = allCertificates.findIndex((img) => img.src === currentSrc);
    if (globalIndex !== -1) {
      setLightboxIndex(globalIndex);
      setOpen(true);
    }
  };

  return (
    <div>
 <section
   className="relative overflow-hidden text-white bg-cover bg-center md:h-[60vh]"
   style={{ backgroundImage: "url('/images/banner/Training.jpg')" }}
 >
   <div className="absolute inset-0 bg-black/30"></div>
 
   <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 xl:py-32 text-center">
     <div className="text-center">
       <h1
         className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
         style={{
           color: "#1d4ed8",
           WebkitTextStroke: "2px white",
         }}
       >
         Training & Certifications
       </h1>
 
      
     </div>
   </div>
 
   {/* FIXED SVG */}
   <div className="absolute bottom-[-1px] left-0 right-0">
     <svg
       viewBox="0 0 1440 120"
       xmlns="http://www.w3.org/2000/svg"
       className="w-full block"
     >
       <path
         d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
         fill="rgb(225 241 230)"
       />
     </svg>
   </div>
 </section>
    <div className="bg-[#E1F1E6] text-slate-900 min-h-screen pb-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* ── HEADER ── */}
        <div className="text-center mb-20">
          <p className="text-red-600 text-xs sm:text-sm font-extrabold tracking-[0.25em] uppercase mb-3">
            Compliance & Verification
          </p>
        
          <p className="mt-4 text-slate-800 font-semibold max-w-xl mx-auto text-sm sm:text-base">
            Consistently audited global benchmarks validating our end-to-end fair placement mechanics.
          </p>
        
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-4 space-y-3 bg-blue-50/70 p-4 border border-blue-200 rounded-3xl shadow-sm shadow-blue-900/5">
            <p className="text-slate-500 font-extrabold uppercase tracking-wider text-[11px] px-3 mb-2">
              Select Category
            </p>
            {certifications.map((category, index) => {
              const isActive = index === activeTab;
              return (
                <button
                  key={category.title}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex flex-col gap-1 group relative overflow-hidden ${
                    isActive
                      ? "bg-white border-blue-300 shadow-sm shadow-blue-900/5"
                      : "bg-transparent border-transparent hover:bg-white/40 hover:border-blue-200"
                  }`}
                >
                  {isActive && (
                    <div className="absolute top-0 bottom-0 left-0 w-1 bg-emerald-700 rounded-r" />
                  )}
                  <span className={`font-black tracking-tight transition-colors ${isActive ? "text-emerald-700" : "text-slate-950 group-hover:text-emerald-700"}`}>
                    {category.title}
                  </span>
                  <span className="text-red-600 font-bold text-xs truncate max-w-xs">
                    {category.tagline}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-8 bg-blue-50/50 border border-blue-200 rounded-3xl p-6 sm:p-8 shadow-sm shadow-blue-900/5">
            
            <div className="mb-8 pb-6 border-b border-blue-200">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-black tracking-widest text-red-700 uppercase bg-red-500/10 border border-red-600/10 px-2.5 py-1 rounded">
                    Certified Standard
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-emerald-800 mt-2 tracking-tight">
                    {certifications[activeTab].title}
                  </h3>
                </div>
                <span className="text-xs bg-white text-slate-700 font-bold px-3 py-1.5 rounded-full border border-blue-200 shadow-inner">
                  {certifications[activeTab].certificates.length} Document(s)
                </span>
              </div>
              <p className="mt-4 text-slate-700 font-medium text-sm sm:text-base leading-relaxed">
                {certifications[activeTab].description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {certifications[activeTab].certificates.map((image, i) => (
                <div
                  key={image + i}
                  onClick={() => handleImageClick(image)}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl border border-blue-200 bg-white p-2 shadow-sm hover:border-emerald-600/40 transition-all duration-300"
                >
                  <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-slate-50 border border-blue-100">
                    <img
                      src={image}
                      alt={`${certifications[activeTab].title} Proof Document`}
                      className="w-full h-full object-cover grayscale mix-blend-multiply contrast-105 brightness-95 group-hover:grayscale-0 group-hover:mix-blend-normal group-hover:brightness-100 group-hover:scale-[1.02] transition-all duration-500 ease-out"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-xs text-emerald-400 font-bold tracking-wide flex items-center gap-1">
                        Click to Expand Viewer ↗
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={lightboxIndex}
        slides={allCertificates}
      />
    </div>
  );
};

export default Certificates;