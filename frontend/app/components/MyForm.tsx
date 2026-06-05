
"use client";

import { useState } from "react";

export type VacancyData = {
  company_name: string;
  position: string;
  category: string;
  basicSalary: string;
  contractPeriod: string;
  address: string;
  quantity: string;
  gender: string;
  requiredQualifications: string;
  image: string;
};

interface MyFormProps {
  lot: VacancyData;
}

type NotificationType = {
  show: boolean;
  type: 'success' | 'error';
  message: string;
};

export default function MyForm({ lot }: MyFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "",
  });

  const [cvFile, setCvFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<NotificationType>({
    show: false,
    type: 'success',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setCvFile(e.target.files[0]);
    }
  };

  const showNotification = (type: 'success' | 'error', message: string) => {
    setNotification({ show: true, type, message });
    // Auto hide after 4 seconds
    setTimeout(() => {
      setNotification({ show: false, type: 'success', message: '' });
    }, 4000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = new FormData();

      // REQUIRED FIELDS (must match Django EXACTLY)
      form.append("position", lot.position);
      form.append("name", formData.fullName);
      form.append("email", formData.email);
      form.append("phone_number", formData.phone);

      if (formData.gender) {
        form.append("gender", formData.gender);
      }

      if (cvFile instanceof File) {
        form.append("cv", cvFile);
      }

      // SAFE API URL
      const API_URL =
        process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

      const res = await fetch(`${API_URL}/api/job-applications/`, {
        method: "POST",
        body: form,
      });

      // 🔥 IMPORTANT DEBUG (DO NOT REMOVE)
      const text = await res.text();
      console.log("STATUS:", res.status);
      console.log("RESPONSE:", text);

      if (!res.ok) {
        throw new Error(text);
      }

      showNotification('success', '✅ Application submitted successfully! Redirecting...');

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        gender: "",
      });
      setCvFile(null);

      // Navigate back to vacancy page after delay
      setTimeout(() => {
        window.location.href = "/vacancy";
      }, 2000);
      
    } catch (error: any) {
      console.error("SUBMIT ERROR:", error.message);
      showNotification('error', `❌ ${error.message || "Submission failed"}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Notification Toast - Centered at Top */}
      {notification.show && (
        <div className={`fixed top-5 left-1/2 transform -translate-x-1/2 z-50 animate-slide-down ${notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white px-6 py-4 rounded-lg shadow-lg max-w-md w-full mx-4`}>
          <div className="flex items-center gap-3">
            <div className="flex-1 text-center">
              <p className="font-semibold">{notification.type === 'success' ? 'Success!' : 'Error!'}</p>
              <p className="text-sm opacity-95">{notification.message}</p>
            </div>
            <button 
              onClick={() => setNotification({ show: false, type: 'success', message: '' })}
              className="text-white hover:text-gray-200"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Position Info */}
        <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-600">
          <p className="text-sm font-medium">
            Applying for: {lot.position} at {lot.company_name}
          </p>
        </div>

        {/* Name */}
        <input
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          required
          className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />

        {/* Phone */}
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          required
          className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />

        {/* Gender */}
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        {/* CV */}
        <input
          type="file"
          onChange={handleFileChange}
          className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
          
        />

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-emerald-700 text-white p-3 rounded hover:bg-emerald-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </button>
      </form>

      <style jsx>{`
        @keyframes slideDown {
          from {
            transform: translate(-50%, -100%);
            opacity: 0;
          }
          to {
            transform: translate(-50%, 0);
            opacity: 1;
          }
        }
        .animate-slide-down {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </>
  );
}