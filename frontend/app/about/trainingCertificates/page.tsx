"use client";

import React, { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";

interface CertificateCategory {
  title: string;
  tagline: string;
  description: string;
  certificates: string[];
}

const Certificates = () => {
  const [certifications, setCertifications] = useState<
    CertificateCategory[]
  >([]);
  const [activeTab, setActiveTab] = useState(0);
  const [open, setOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/certificate_category`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch certificates");
        }

        const data = await res.json();

        const formatted: CertificateCategory[] = data.map((cat: any) => ({
          title: cat.title,
          tagline: "",
          description: "",
          certificates: cat.images?.map((img: any) => img.image) || [],
        }));

        setCertifications(formatted);
        setActiveTab(0);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchCertificates();
  }, []);

  const activeCategory = certifications[activeTab];

  const allCertificates = certifications.flatMap((category) =>
    category.certificates.map((image) => ({
      src: image,
    }))
  );

  const handleImageClick = (currentSrc: string) => {
    const globalIndex = allCertificates.findIndex(
      (img) => img.src === currentSrc
    );

    if (globalIndex !== -1) {
      setLightboxIndex(globalIndex);
      setOpen(true);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading certificates...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">
        {error}
      </div>
    );
  }

  if (!certifications.length) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        No certificates found
      </div>
    );
  }

  return (

    <div className="bg-[#c5eace] text-slate-900 min-h-screen py-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20">
          <p className="text-red-600 text-xs sm:text-sm font-extrabold tracking-[0.25em] uppercase mb-3">
            Compliance & Verification
          </p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-950">
            Our Training & <span className="text-emerald-700">Credentials</span>
          </h2>
          <p className="mt-4 text-slate-800 font-semibold max-w-xl mx-auto text-sm sm:text-base">
            Consistently audited global benchmarks validating our end-to-end fair placement mechanics.
          </p>
          <div className="w-12 h-1 bg-emerald-700 mx-auto mt-6 rounded-full" />
        </div>

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
          <div className="text-center mb-20">
            <p className="text-red-600 text-xs sm:text-sm font-extrabold tracking-[0.25em] uppercase mb-3">
              Compliance & Verification
            </p>

            <p className="mt-4 text-slate-800 font-semibold max-w-xl mx-auto text-sm sm:text-base">
              Consistently audited global benchmarks validating our end-to-end
              fair placement mechanics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 space-y-3 bg-blue-50/70 p-4 border border-blue-200 rounded-3xl shadow-sm">
              <p className="text-slate-500 font-extrabold uppercase tracking-wider text-[11px] px-3 mb-2">
                Select Category
              </p>

              {certifications.map((category, index) => {
                const isActive = index === activeTab;

                return (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 relative overflow-hidden ${
                      isActive
                        ? "bg-white border-blue-300 shadow-sm"
                        : "bg-transparent border-transparent hover:bg-white/40"
                    }`}
                  >
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-700 rounded-r" />
                    )}

                    <span
                      className={`font-black tracking-tight ${
                        isActive
                          ? "text-emerald-700"
                          : "text-slate-950"
                      }`}
                    >
                      {category.title}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="lg:col-span-8 bg-blue-50/50 border border-blue-200 rounded-3xl p-6 sm:p-8">
              <div className="mb-8 pb-6 border-b border-blue-200">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-black uppercase text-red-700 bg-red-500/10 px-2 py-1 rounded">
                      Certified Standard
                    </span>

                    <h3 className="text-2xl sm:text-3xl font-black text-emerald-800 mt-2">
                      {activeCategory?.title}
                    </h3>
                  </div>

                  <span className="text-xs bg-white font-bold px-3 py-1.5 rounded-full border">
                    {activeCategory?.certificates?.length || 0} Document(s)
                  </span>
                </div>

                <p className="mt-4 text-slate-700 text-sm sm:text-base">
                  {activeCategory?.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {activeCategory?.certificates?.map((image, i) => (
                  <div
                    key={`${image}-${i}`}
                    onClick={() => handleImageClick(image)}
                    className="cursor-pointer rounded-2xl border bg-white p-2 hover:border-emerald-600/40 transition-all"
                  >
                    <div className="aspect-[4/3] overflow-hidden rounded-xl">
                      <img
                        src={image}
                        alt={`Certificate ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
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
    </>
  );
};

export default Certificates;