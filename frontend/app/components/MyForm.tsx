"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { useState, useEffect } from "react";
import { JobLot } from "@/data/jobs";

type Inputs = {
  name: string;
  phone_number: string;
  email: string;
  company: string;
  location: string;
  others: string;
  cv: FileList;
  lot_no: string;
  position: string;
};

type Slider = {
  id: number;
  title: string;
  image: string;
};

type MyFormProps = {
  lot: JobLot;
};

export default function MyForm({ lot }: MyFormProps) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [sliders, setSliders] = useState<Slider[]>([]);

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

  // ✅ 1. FETCH SLIDERS (GET API)
  useEffect(() => {
    const fetchSliders = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/sliders/");
        const data = await res.json();
        setSliders(data);
        console.log("Sliders:", data);
      } catch (error) {
        console.error("Error fetching sliders:", error);
      }
    };

    fetchSliders();
  }, []);

  // ✅ 2. SUBMIT FORM (POST API)
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    setMessage(null);

    try {
      const formData = new FormData();

      Object.entries(data).forEach(([key, value]) => {
        if (value instanceof FileList) {
          formData.append(key, value[0]);
        } else {
          formData.append(key, value as string);
        }
      });

      const response = await fetch("http://127.0.0.1:8000/api/job-applications/", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      const result = await response.json();
      console.log("Response:", result);

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
      {/* SLIDERS DISPLAY (from API) */}
      {sliders.length > 0 && (
        <div className="mb-4">
          <h2 className="font-bold">Sliders</h2>
          <ul>
            {sliders.map((s) => (
              <li key={s.id}>{s.title}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Lot & Position */}
      <div className="space-y-3">
        <label>Lot Number</label>
        <input {...register("lot_no")} disabled className="border p-2 w-full bg-gray-100" />

        <label>Position</label>
        <select {...register("position")} className="border p-2 w-full">
          {lot.positions.map((pos) => (
            <option key={pos.id} value={pos.title}>
              {pos.title}
            </option>
          ))}
        </select>
      </div>

      {/* Name */}
      <input {...register("name", { required: true })} placeholder="Name" className="border p-2 w-full" />

      {/* Email */}
      <input {...register("email", { required: true })} placeholder="Email" className="border p-2 w-full" />

      {/* Phone */}
      <input {...register("phone_number", { required: true })} placeholder="Phone" className="border p-2 w-full" />

      {/* Location */}
      <input {...register("location")} placeholder="Location" className="border p-2 w-full" />

      {/* File */}
      <input type="file" {...register("cv")} className="border p-2 w-full" />

      <button type="submit" disabled={loading} className="bg-green-600 text-white px-4 py-2 rounded">
        {loading ? "Submitting..." : "Submit"}
      </button>

      {message && <p className="text-green-600">{message}</p>}
    </form>
  );
}