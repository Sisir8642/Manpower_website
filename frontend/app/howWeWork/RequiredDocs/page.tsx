
"use client";

import React, { useEffect, useState } from "react";

type ApiDoc = {
  id: number;
  title: string;
  document: string;
};

type UIData = {
  title: string;
  docs: {
    id: number;
    name: string;
    file: string;
  }[];
};

export default function RequiredDocuments() {
  const [data, setData] = useState<UIData | null>(null);
  const [loading, setLoading] = useState(true);

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  useEffect(() => {
    const fetchDocs = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/Document/`);
        const result: ApiDoc[] = await res.json();

        const formatted: UIData = {
          title: "Required Documents",
          docs: result.map((item) => ({
            id: item.id,
            name: item.title,
            file: item.document,
          })),
        };

        setData(formatted);
      } catch (err) {
        console.error("Error fetching documents:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDocs();
  }, [BASE_URL]);

  // Download function
  const handleDownload = async (file: string) => {
    try {
      const response = await fetch(file);
      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = file.split("/").pop() || "document";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);

      const a = document.createElement("a");
      a.href = file;
      a.download = file.split("/").pop() || "document";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">
        Failed to load documents
      </div>
    );
  }

  return (
    <div>
      <section
        className="relative overflow-hidden text-white bg-cover bg-bottom min-h-[60vh]"
        style={{ backgroundImage: "url('/images/banner/RequiredDocs.jpg')" }}
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
              Required Documents
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
    <div className="min-h-screen bg-[#E1F1E6] px-6 py-10">
      <div className="max-w-6xl mx-auto">
        {/* TITLE */}
        <h1 className="text-4xl font-black text-emerald-800 text-center mb-10">
          {data.title}
        </h1>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.docs.map((doc) => (
            <div
              key={doc.id}
              className="bg-white border border-blue-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-2 mb-3">
                <span>📄</span>
                <h2 className="font-black text-slate-900">{doc.name}</h2>
              </div>

              <p className="text-xs text-slate-500 mb-4">
                {doc.file.split(".").pop()?.toUpperCase()} File
              </p>

              {/* ONLY DOWNLOAD BUTTON */}
              <button
                onClick={() => handleDownload(doc.file)}
                className=" p-2 text-xs font-bold bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}