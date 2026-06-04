"use client";

import React, { useState, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";

<<<<<<< HEAD
   interface CertificateImage {
  image: string;
}

interface CertificateCategory {
  title: string;
  images: CertificateImage[];
} 
=======
import type { VacancyData } from "../vacancy/page"; // OR move to shared types file

type MyFormProps = {
  lot: VacancyData;
};

>>>>>>> e0539123faa2b71c65fc0cd51e21d714a4433c33
interface Certification {
  title: string;
  tagline: string;
  description: string;
  certificates: string[];
}
<<<<<<< HEAD
const Certificates = () => {
const [certifications, setCertifications] = useState<Certification[]>([]);
const [error, setError] = useState<string | null>(null);
=======

interface CertificateImage {
  image: string;
}

interface CertificateCategory {
  title: string;
  images: CertificateImage[];
}


export default function MyForm({ lot }: MyFormProps) {
  const [certifications, setCertifications] = useState<Certification[]>([]);
>>>>>>> e0539123faa2b71c65fc0cd51e21d714a4433c33
  const [activeTab, setActiveTab] = useState(0);
  const [open, setOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [loading, setLoading] = useState(true);
<<<<<<< HEAD
=======
  const [error, setError] = useState<string | null>(null);
>>>>>>> e0539123faa2b71c65fc0cd51e21d714a4433c33

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/certificate-category`);

        if (!res.ok) {
          throw new Error("Failed to fetch certificates");
        }

    

<<<<<<< HEAD
const data: CertificateCategory[] = await res.json();

const formatted = data.map((cat: CertificateCategory) => ({
  title: cat.title,
  tagline: "",
  description: "",
  certificates: cat.images.map((img: CertificateImage) => img.image),
=======
        // Transform API data into your UI structure
       const formatted = data.map((cat: CertificateCategory) => ({
  title: cat.title,
  tagline: "",
  description: "",
  certificates: cat.images.map((img) => img.image),
>>>>>>> e0539123faa2b71c65fc0cd51e21d714a4433c33
}));

        setCertifications(formatted);
        setActiveTab(0);
<<<<<<< HEAD
     } catch (err: unknown) {
  setError(
    err instanceof Error
      ? err.message
      : "Failed to fetch certificates"
  );
=======
      } catch (err) {
  setError(err instanceof Error ? err.message : "An unexpected error occurred");
>>>>>>> e0539123faa2b71c65fc0cd51e21d714a4433c33
} finally {
        setLoading(false);
      }
    };

    fetchCertificates();
  }, []);

  const allCertificates = certifications.flatMap((category) =>
    category.certificates.map((image) => ({ src: image }))
  );

<<<<<<< HEAD
const handleImageClick = (currentSrc: string) => {
=======
  const handleImageClick = (currentSrc: string) => {
>>>>>>> e0539123faa2b71c65fc0cd51e21d714a4433c33
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
  if (!certifications.length) {
    return <div className="p-10 text-center">Loading...</div>;
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">
        {error}
      </div>
    );
  }

  return (
    <div className="bg-[#c5eace] text-slate-900 min-h-screen py-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">

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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          <div className="lg:col-span-4 space-y-3 bg-blue-50/70 p-4 border border-blue-200 rounded-3xl shadow-sm shadow-blue-900/5">
            <p className="text-slate-500 font-extrabold uppercase tracking-wider text-[11px] px-3 mb-2">
              Select Category
            </p>

            {certifications.map((category, index) => {
              const isActive = index === activeTab;

              return (
                <button
                  key={index}
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

                  <span
                    className={`font-black tracking-tight transition-colors ${
                      isActive
                        ? "text-emerald-700"
                        : "text-slate-950 group-hover:text-emerald-700"
                    }`}
                  >
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
                    {certifications?.[activeTab]?.title || ""}                  </h3>
                </div>

                <span className="text-xs bg-white text-slate-700 font-bold px-3 py-1.5 rounded-full border border-blue-200 shadow-inner">
                  {certifications?.[activeTab]?.certificates?.length || 0} Document(s)
                </span>

              </div>

              <p className="mt-4 text-slate-700 font-medium text-sm sm:text-base leading-relaxed">
              {certifications?.[activeTab]?.description || ""}              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {certifications?.[activeTab]?.certificates?.map((image, i) => (
                <div
                  key={image + i}
                  onClick={() => handleImageClick(image)}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl border border-blue-200 bg-white p-2 shadow-sm hover:border-emerald-600/40 transition-all duration-300"
                >
                  <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-slate-50 border border-blue-100">
                    <img
                      src={image}
                      alt="Certificate"
                      className="w-full h-full object-cover grayscale mix-blend-multiply contrast-105 brightness-95 group-hover:grayscale-0 group-hover:mix-blend-normal group-hover:brightness-100 group-hover:scale-[1.02] transition-all duration-500 ease-out"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-xs text-emerald-400 font-bold tracking-wide">
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
