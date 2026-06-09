
"use client";

import { useState, useEffect } from "react";
import MyForm from "../components/MyForm";
import Modal from "@/components/ui/Modal";
import { motion, AnimatePresence } from "framer-motion";
import { VacancyData } from "../types/vacancy";

export default function VacancyPage() {
  const [selectedVacancy, setSelectedVacancy] = useState<VacancyData | null>(null);
  const [tab, setTab] = useState<"view" | "apply">("view");
  const [vacancies, setVacancies] = useState<VacancyData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data from Django backend
  useEffect(() => {
    const fetchVacancies = async () => {
      try {
        setLoading(true);
        
       const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/job-detail/`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch vacancies');
        }
        
        const data = await response.json();
        
        // Map your backend data to include an image field
        const vacanciesWithImages = data.map((job: any) => ({
          ...job,
          image: job.image || "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }));
        
        setVacancies(vacanciesWithImages);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load vacancies");
        setLoading(false);
      }
    };

    fetchVacancies();
  }, []);

  const openModal = (vacancy: VacancyData) => {
    setSelectedVacancy(vacancy);
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

  if (loading) {
    return (
      <div className="min-h-screen bg-[#E1F1E6] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-emerald-700 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-emerald-700 font-semibold">Loading vacancies...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#E1F1E6] flex items-center justify-center p-4">
        <div className="text-center bg-white/80 backdrop-blur-sm p-8 rounded-2xl max-w-md">
          <div className="text-red-600 text-5xl mb-4">⚠️</div>
          <h3 className="text-xl font-bold text-slate-800 mb-2">Failed to Load Data</h3>
          <p className="text-slate-600 mb-6">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-emerald-700 text-white px-6 py-2 rounded-xl font-semibold hover:bg-emerald-800 transition"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

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

      {vacancies.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-slate-500 text-lg">No vacancies available at the moment.</p>
          <p className="text-slate-400 text-sm mt-2">Check back later for new opportunities.</p>
        </div>
      ) : (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {vacancies.map((vacancy, idx) => (
            <motion.div
              key={vacancy.id || idx}
              whileHover={{ scale: 1.03, y: -4 }}
              onClick={() => openModal(vacancy)}
              className="group cursor-pointer relative overflow-hidden rounded-3xl bg-white/40 border border-blue-200/40 shadow-sm shadow-blue-900/5 transition-all duration-300"
              variants={gridItemVariants}
            >
              <div className="overflow-hidden h-72 w-full relative">
                <img
                  src={vacancy.image}
                  alt={vacancy.company_name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <h3 className="text-base sm:text-lg font-black tracking-tight leading-snug mb-1">
                  {vacancy.company_name}
                </h3>
                <p className="text-xs font-bold opacity-90 text-emerald-300">
                  {vacancy.position}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

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
                          alt={selectedVacancy.company_name}
                          className="w-full h-64 md:h-[380px] object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                          }}
                        />
                      </div>
                      
                      <div className="space-y-3 bg-emerald-50/40 border border-emerald-600/20 p-5 rounded-2xl">
                        <h2 className="text-xl font-black text-slate-950 tracking-tight border-b border-emerald-600/20 pb-2">
                          {selectedVacancy.company_name}
                        </h2>
                        
                        <div className="space-y-2 text-xs sm:text-sm font-bold text-slate-700">
                          <p>
                            <span className="text-slate-400 font-extrabold uppercase text-[10px] tracking-wider block">Position</span> 
                            <span className="text-slate-950">{selectedVacancy.position}</span>
                          </p>
                          <p>
                            <span className="text-slate-400 font-extrabold uppercase text-[10px] tracking-wider block">Category</span> 
                            <span className="text-slate-950">{selectedVacancy.category}</span>
                          </p>
                          <p>
                            <span className="text-slate-400 font-extrabold uppercase text-[10px] tracking-wider block">Basic Salary</span> 
                            <span className="text-emerald-700 font-black">${parseFloat(selectedVacancy.basic_salary).toLocaleString()}</span>
                          </p>
                          <p>
                            <span className="text-slate-400 font-extrabold uppercase text-[10px] tracking-wider block">Contract Period</span> 
                            <span className="text-slate-950">{selectedVacancy.contact_period}</span>
                          </p>
                          <p>
                            <span className="text-slate-400 font-extrabold uppercase text-[10px] tracking-wider block">Address</span> 
                            <span className="text-rose-700">{selectedVacancy.address}</span>
                          </p>
                          <p>
                            <span className="text-slate-400 font-extrabold uppercase text-[10px] tracking-wider block">Quantity</span> 
                            <span className="text-slate-950">{selectedVacancy.quantity}</span>
                          </p>
                          <p>
                            <span className="text-slate-400 font-extrabold uppercase text-[10px] tracking-wider block">Gender Requirement</span> 
                            <span className="text-slate-950">{selectedVacancy.gender}</span>
                          </p>
                          <p>
                            <span className="text-slate-400 font-extrabold uppercase text-[10px] tracking-wider block">Required Qualifications</span> 
                            <span className="text-slate-900 font-medium block mt-1">{selectedVacancy.required_qualification}</span>
                          </p>
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