
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
    currentLocation: "",
    experience: "",
    expectedSalary: "",
    coverLetter: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    console.log("Application submitted:", {
      ...formData,
      position: lot.position,
      company: lot.companyName
    });
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert(`Application submitted for ${lot.position} at ${lot.companyName}!`);
    setIsSubmitting(false);
    
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      currentLocation: "",
      experience: "",
      expectedSalary: "",
      coverLetter: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="bg-emerald-50 p-4 rounded-lg mb-4 border-l-4 border-emerald-600">
        <h3 className="font-bold text-emerald-800 text-sm">Applying for:</h3>
        <p className="text-sm text-slate-700 font-medium">{lot.position} at {lot.companyName}</p>
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1">
          Full Name *
        </label>
        <input
          type="text"
          name="fullName"
          required
          value={formData.fullName}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1">
          Email Address *
        </label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1">
          Phone Number *
        </label>
        <input
          type="tel"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1">
          Current Location
        </label>
        <input
          type="text"
          name="currentLocation"
          value={formData.currentLocation}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1">
          Years of Experience *
        </label>
        <select
          name="experience"
          required
          value={formData.experience}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          <option value="">Select experience</option>
          <option value="fresher">Fresher</option>
          <option value="1-2">1-2 years</option>
          <option value="3-5">3-5 years</option>
          <option value="5+">5+ years</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1">
          Expected Salary (USD)
        </label>
        <input
          type="text"
          name="expectedSalary"
          value={formData.expectedSalary}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1">
          Cover Letter
        </label>
        <textarea
          name="coverLetter"
          rows={4}
          value={formData.coverLetter}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          placeholder="Tell us why you're a good fit for this position..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full font-bold py-3 px-4 rounded-lg transition-colors duration-200 ${
          isSubmitting 
            ? "bg-gray-400 cursor-not-allowed" 
            : "bg-emerald-600 hover:bg-emerald-700"
        } text-white`}
      >
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}