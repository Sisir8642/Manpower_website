"use client";

import { useState } from "react";
import { newspapers, JobLot } from "@/data/jobs";
import MyForm from "../components/MyForm";
import Modal from "@/components/ui/Modal";
import { motion, AnimatePresence } from "framer-motion";

export default function VacancyPage() {
  const [selectedLot, setSelectedLot] = useState<JobLot & { image: string } | null>(null);
  const [tab, setTab] = useState<"view" | "apply">("view");

  const openModal = (lot: JobLot, newspaperImage: string) => {
    setSelectedLot({ ...lot, image: newspaperImage });
    setTab("view");
  };
  const closeModal = () => setSelectedLot(null);

  // Flatten lots and attach newspaper image
  const allLots: (JobLot & { image: string })[] = newspapers.flatMap((n) =>
    n.lots.map((lot) => ({ ...lot, image: n.image }))
  );

  // Grid animation variants
  const gridItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  // Modal animation variants
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 md:p-10">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 py-12 text-gray-800 dark:text-gray-100">
        <span className="text-[#0b703c]">Vacancy</span>{" "}
        <span className="text-[#ec202a]">Newspaper Ads</span>
      </h1>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } }
        }}
      >
        {allLots.map((lot) => (
          <motion.div
            key={lot.lotNo}
            whileHover={{ scale: 1.05 }}
            onClick={() => openModal(lot, lot.image)}
            className="group cursor-pointer relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300"
            variants={gridItemVariants}
          >
            <img
              src={lot.image}
              alt={lot.company}
              className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="text-lg font-bold">{lot.company}</h3>
              <p className="text-sm opacity-90">Lot {lot.lotNo} • {lot.country}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedLot && (
          <Modal open={!!selectedLot} onClose={closeModal}>
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl max-w-4xl w-full mx-4 md:mx-auto"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={modalVariants}
              transition={{ duration: 0.3 }}
            >
              <div className="p-6 md:p-8">
                {/* Tabs */}
                <div className="flex gap-8 mb-8 border-b border-gray-200 dark:border-gray-700">
                  <button
                    className={`pb-3 font-semibold text-lg transition-colors ${
                      tab === "view" ? "border-b-4 border-[#0b703c] text-[#0b703c]" : "text-gray-500 dark:text-gray-400"
                    }`}
                    onClick={() => setTab("view")}
                  >
                    View Ad
                  </button>
                  <button
                    className={`pb-3 font-semibold text-lg transition-colors ${
                      tab === "apply" ? "border-b-4 border-[#ec202a] text-[#ec202a]" : "text-gray-500 dark:text-gray-400"
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
                      className="space-y-6"
                    >
                      <img
                        src={selectedLot.image}
                        alt={selectedLot.company}
                        className="w-full h-96 md:h-[400px] object-cover rounded-xl shadow-lg"
                      />
                      <div className="space-y-2">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">
                          {selectedLot.company}
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400">
                          Lot No: <span className="font-semibold text-[#0b703c]">{selectedLot.lotNo}</span>
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-400">
                          Country: <span className="font-semibold text-[#ec202a]">{selectedLot.country}</span>
                        </p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="apply"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="max-h-[60vh] md:max-h-[70vh] overflow-y-auto pr-2"
                    >
                      <MyForm lot={selectedLot} />
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