"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { JobLot } from "@/data/jobs";

type Inputs = {
  name: string;
  phoneNumber: number;
  email: string;
  company: string;
  location: string;
  others: string;
  file: FileList;
  lotNo: string;
  position: string;
};

type MyFormProps = {
  lot: JobLot;
};

export default function MyForm({ lot }: MyFormProps) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    defaultValues: {
      lotNo: lot.lotNo,
      position: lot.positions[0]?.title || "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    setMessage(null);
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value instanceof FileList) formData.append(key, value[0]);
        else formData.append(key, value as string);
      });

      // demo: just log, replace with API call
      console.log("Form Submitted:", Object.fromEntries(formData.entries()));

      setMessage("Form submitted successfully!");
      reset();
    } catch (err) {
      console.error(err);
      setMessage("Error submitting form");
    } finally {
      setLoading(false);
    }
  };

  return (
   <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
  {/* Lot & Position (full width) */}
  <div className="space-y-3">
    <label className="block">Lot Number</label>
    <input
      {...register("lotNo")}
      disabled
      className="border p-2 rounded w-full bg-gray-100"
    />

    <label className="block">Position</label>
    <select {...register("position")} className="border p-2 rounded w-full">
      {lot.positions.map((pos) => (
        <option key={pos.id} value={pos.title}>
          {pos.title} ({pos.vacancies} vacancies)
        </option>
      ))}
    </select>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="space-y-1">
      <label className="block">Name<span className="text-[#ec202a]">*</span></label>
      <input
        {...register("name", { required: "*required" })}
        className="border p-2 rounded w-full"
      />
    </div>

    <div className="space-y-1">
      <label className="block">Email<span className="text-[#ec202a]">*</span></label>
      <input
        {...register("email", { required: "*required" })}
        className="border p-2 rounded w-full"
      />
    </div>

    {/* Phone Number */}
    <div className="space-y-1">
      <label className="block">Phone Number<span className="text-[#ec202a]">*</span></label>
      <input
        {...register("phoneNumber", { required: "*required" })}
        className="border p-2 rounded w-full"
      />
    </div>

    {/* Location */}
    <div className="space-y-1">
      <label className="block">Location</label>
      <input
        {...register("location")}
        className="border p-2 rounded w-full"
      />
    </div>
  </div>

  {/* File Upload */}
  <div className="space-y-1">
    <label className="block">Update Your CV (PDF/DOCX)</label>
    <input
      type="file"
      {...register("file")}
      className="border p-2 rounded w-full"
    />
  </div>

  <button
    type="submit"
    disabled={loading}
    className="bg-[#0b703c] text-white px-4 py-2 rounded"
  >
    {loading ? "Submitting..." : "Submit"}
  </button>

  {message && <p className="text-green-600 mt-2">{message}</p>}
</form>
  );
}


