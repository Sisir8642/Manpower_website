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
            file: item.document, // backend file URL
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


  const handleDownload = (file: string) => {
    const a = document.createElement("a");
    a.href = file;
    a.download = file.split("/").pop() || "document.docx";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
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
                <h2 className="font-black text-slate-900">
                  {doc.name}
                </h2>
              </div>

              <p className="text-xs text-slate-500 mb-4">
                DOCX File
              </p>

              <div className="flex gap-2">
               

                <button
                  onClick={() => handleDownload(doc.file)}
                  className="flex-1 py-2 text-xs font-bold bg-emerald-700 text-white rounded-lg"
                >
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}