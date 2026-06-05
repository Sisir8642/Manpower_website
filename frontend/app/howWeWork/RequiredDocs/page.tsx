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
  const [viewingDoc, setViewingDoc] = useState<{ name: string; file: string } | null>(null);

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

  // Function to check if file is a PDF (can be viewed in browser)
  const isPDF = (file: string) => {
    return file.toLowerCase().endsWith('.pdf');
  };

  // Function to check if file is an image (can be viewed in browser)
  const isImage = (file: string) => {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp'];
    return imageExtensions.some(ext => file.toLowerCase().endsWith(ext));
  };

  // Function to handle document viewing
  const handleView = async (file: string, fileName: string) => {
    // For PDFs and images, open in new tab
    if (isPDF(file) || isImage(file)) {
      window.open(file, '_blank');
      return;
    }

    // For DOCX and other office files, try to use Google Docs viewer
    if (file.toLowerCase().endsWith('.docx') || file.toLowerCase().endsWith('.doc')) {
      const googleDocsUrl = `https://docs.google.com/gview?url=${encodeURIComponent(file)}&embedded=true`;
      setViewingDoc({ name: fileName, file: googleDocsUrl });
      return;
    }

    // Fallback: open in new tab (might download)
    window.open(file, '_blank');
  };

  // Function to handle document download
  const handleDownload = async (file: string) => {
    try {
      // Fetch the file as a blob to ensure proper download
      const response = await fetch(file);
      const blob = await response.blob();
      
      // Create download link
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = file.split("/").pop() || "document";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      // Fallback to direct link if fetch fails
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
                {doc.file.split('.').pop()?.toUpperCase()} File
              </p>

              <div className="flex gap-2">
                {/* View Button */}
                <button
                  onClick={() => handleView(doc.file, doc.name)}
                  className="flex-1 py-2 text-xs font-bold bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  View
                </button>

                {/* Download Button */}
                <button
                  onClick={() => handleDownload(doc.file)}
                  className="flex-1 py-2 text-xs font-bold bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 transition"
                >
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for viewing DOCX files */}
      {viewingDoc && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="font-bold text-lg">{viewingDoc.name}</h3>
              <button 
                onClick={() => setViewingDoc(null)}
                className="text-gray-500 hover:text-gray-700 text-xl"
              >
                ✕
              </button>
            </div>
            <div className="flex-1 p-4 overflow-auto">
              <iframe 
                src={viewingDoc.file}
                className="w-full h-[70vh]"
                title={viewingDoc.name}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}