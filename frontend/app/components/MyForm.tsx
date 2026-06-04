"use client";

import { useState } from "react";

export type VacancyData = {
  companyName: string;
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

export default function MyForm({ lot }: MyFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "",
  });

  const [cvFile, setCvFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = new FormData();

      // REQUIRED API FIELDS ONLY
      form.append("position", lot.position);
      form.append("name", formData.fullName);
      form.append("email", formData.email);
      form.append("phone_number", formData.phone);

      if (formData.gender) {
        form.append("gender", formData.gender);
      }

      if (cvFile) {
        form.append("cv", cvFile);
      }

      const res = await fetch("/api/job-applications/", {
        method: "POST",
        body: form,
      });

      if (!res.ok) {
        throw new Error("Failed to submit application");
      }

      alert("Application submitted successfully!");

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        gender: "",
      });

      setCvFile(null);
    } catch (error) {
      console.error(error);
      alert("Submission failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Position Info */}
      <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-600">
        <p className="text-sm font-medium">
          Applying for: {lot.position} at {lot.companyName}
        </p>
      </div>

      {/* Name */}
      <input
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="Full Name"
        required
        className="w-full border p-2 rounded"
      />

      {/* Email */}
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
        className="w-full border p-2 rounded"
      />

      {/* Phone */}
      <input
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone Number"
        required
        className="w-full border p-2 rounded"
      />

      {/* Gender */}
      <select
        name="gender"
        value={formData.gender}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      >
        <option value="">Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      {/* CV */}
      <input
        type="file"
        onChange={handleFileChange}
        className="w-full border p-2 rounded"
      />

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-emerald-600 text-white p-3 rounded"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}