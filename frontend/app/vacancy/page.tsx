"use client";

import { useState } from "react";
import { newspapers, JobLot } from "@/data/jobs";
import MyForm from "../components/MyForm";
import Modal from "@/components/ui/Modal";
import { motion, AnimatePresence } from "framer-motion";

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

export default function VacancyPage() {
  const [selectedVacancy, setSelectedVacancy] = useState<VacancyData | null>(null);
  const [tab, setTab] = useState<"view" | "apply">("view");

  const openModal = (lot: any, newspaperImage: string) => {
    setSelectedVacancy({
      companyName: lot.company || "",
      position: lot.position || "Specified in Ad",
      category: lot.category || "General",
      basicSalary: lot.salary || "As per structural scale",
      contractPeriod: lot.contractPeriod || "2 Years",
      address: lot.address || lot.country || "Overseas",
      quantity: lot.quantity || "Verified Demand",
      gender: lot.gender || "Male / Female",
      requiredQualifications: lot.qualifications || "Experience in relevant field",
      image: newspaperImage,
    });
    setTab("view");
  };

  const closeModal = () => setSelectedVacancy(null);

  const gridItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 }
  };

  return (
    <div className="min-h-screen bg-[#E1F1E6] text-emerald-700 font-sans p-6 md:p-10 overflow-x-hidden">
      
      <div className="text-center max-w-3xl mx-auto mb-14 py-12">
        <p className="text-blue-600 text-xs sm:text-sm font-black tracking-[0.2em] uppercase mb-3">
          Available Positions
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-emerald-700 leading-tight tracking-tight mb-4">
          Vacancy <span className="text-red-600">Newspaper Ads</span>
        </h1>
        <div className="w-12 h-1 bg-emerald-700 mx-auto mt-2 mb-6 rounded-full" />
        <p className="text-slate-700 font-medium leading-relaxed text-[15px]">
          Select an active advertisement board below to review requirements and file applications.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } }
        }}
      >
        {newspapers.flatMap((n) => n.lots.map((lot, idx) => ({ ...lot, image: n.image, uniqueKey: `${lot.company}-${idx}` }))).map((lot) => (
          <motion.div
            key={lot.uniqueKey}
            whileHover={{ scale: 1.03, y: -4 }}
            onClick={() => openModal(lot, lot.image)}
            className="group cursor-pointer relative overflow-hidden rounded-3xl bg-white/40 border border-blue-200/40 shadow-sm shadow-blue-900/5 transition-all duration-300"
            variants={gridItemVariants}
          >
            <div className="overflow-hidden h-72 w-full relative">
              <img
                src={lot.image}
                alt={lot.company}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
              <h3 className="text-base sm:text-lg font-black tracking-tight leading-snug mb-1">
                {lot.company}
              </h3>
              <p className="text-xs font-bold opacity-90 text-emerald-300">
                {lot.position || "Click to View Details"}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedVacancy && (
          <Modal open={!!selectedVacancy} onClose={closeModal}>
            <motion.div
              className="bg-white/95 backdrop-blur-md border border-blue-200/60 rounded-3xl overflow-hidden shadow-2xl max-w-4xl w-full mx-4 md:mx-auto"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={modalVariants}
              transition={{ duration: 0.3 }}
            >
              <div className="p-6 md:p-8">
                
                <div className="flex gap-8 mb-8 border-b border-blue-200/60">
                  <button
                    className={`pb-3 font-black text-sm sm:text-base tracking-tight transition-all relative ${
                      tab === "view" 
                        ? "text-emerald-700 border-b-4 border-emerald-700 scale-[1.02]" 
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                    onClick={() => setTab("view")}
                  >
                    View Details
                  </button>
                  
                  <button
                    className={`pb-3 font-black text-sm sm:text-base tracking-tight transition-all relative ${
                      tab === "apply" 
                        ? "text-rose-700 border-b-4 border-rose-700 scale-[1.02]" 
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                    onClick={() => setTab("apply")}
                  >
                    Apply Now
                  </button>
                </div>

                <AnimatePresence mode="wait">
                  {tab === "view" ? (
                    <motion.div
                      key="view"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="grid md:grid-cols-2 gap-6 items-start"
                    >
                      <div className="border border-blue-200/60 rounded-2xl overflow-hidden shadow-sm">
                        <img
                          src={selectedVacancy.image}
                          alt={selectedVacancy.companyName}
                          className="w-full h-64 md:h-[380px] object-cover"
                        />
                      </div>
                      
                      <div className="space-y-3 bg-emerald-50/40 border border-emerald-600/20 p-5 rounded-2xl">
                        <h2 className="text-xl font-black text-slate-950 tracking-tight border-b border-emerald-600/20 pb-2">
                          {selectedVacancy.companyName}
                        </h2>
                        
                        <div className="space-y-2 text-xs sm:text-sm font-bold text-slate-700">
                          <p><span className="text-slate-400 font-extrabold uppercase text-[10px] tracking-wider block">Position</span> <span className="text-slate-950">{selectedVacancy.position}</span></p>
                          <p><span className="text-slate-400 font-extrabold uppercase text-[10px] tracking-wider block">Category</span> <span className="text-slate-950">{selectedVacancy.category}</span></p>
                          <p><span className="text-slate-400 font-extrabold uppercase text-[10px] tracking-wider block">Basic Salary</span> <span className="text-emerald-700 font-black">{selectedVacancy.basicSalary}</span></p>
                          <p><span className="text-slate-400 font-extrabold uppercase text-[10px] tracking-wider block">Contract Period</span> <span className="text-slate-950">{selectedVacancy.contractPeriod}</span></p>
                          <p><span className="text-slate-400 font-extrabold uppercase text-[10px] tracking-wider block">Address</span> <span className="text-rose-700">{selectedVacancy.address}</span></p>
                          <p><span className="text-slate-400 font-extrabold uppercase text-[10px] tracking-wider block">Quantity</span> <span className="text-slate-950">{selectedVacancy.quantity}</span></p>
                          <p><span className="text-slate-400 font-extrabold uppercase text-[10px] tracking-wider block">Gender Requirement</span> <span className="text-slate-950">{selectedVacancy.gender}</span></p>
                          <p><span className="text-slate-400 font-extrabold uppercase text-[10px] tracking-wider block">Required Qualifications</span> <span className="text-slate-900 font-medium block mt-1">{selectedVacancy.requiredQualifications}</span></p>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="apply"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="max-h-[60vh] md:max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar"
                    >
                      <MyForm lot={selectedVacancy} />
                    </motion.div>
                  )}
                </AnimatePresence>
                
              </div>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
      
    </div>
  );
}