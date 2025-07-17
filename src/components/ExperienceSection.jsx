import React from "react";
import { motion } from "framer-motion";

const ExperienceSection = ({ experiences }) => (
  <div id="experience" className="w-full max-w-6xl mx-auto px-4 sm:px-6 mb-8 sm:mb-10">
    <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 border-l-4 border-green-400">
      <h3 className="text-xl sm:text-2xl font-bold text-green-800 mb-8">अनुभव</h3>
      <div className="relative pl-6 sm:pl-12">
        {/* Vertical line */}
        <div className="absolute left-2 sm:left-4 top-0 bottom-0 w-1 bg-green-100 rounded-full"></div>
        {/* Timeline steps */}
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="relative mb-10 last:mb-0"
          >
            {/* Dot */}
            <div className="absolute -left-6 sm:-left-10 top-2 w-5 h-5 bg-green-400 border-4 border-white rounded-full shadow-md flex items-center justify-center">
              <span className="text-xs font-bold text-white">{idx + 1}</span>
            </div>
            {/* Content */}
            <div className="ml-2 sm:ml-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-1">
                <span className="font-semibold text-gray-800 text-base sm:text-lg">{exp.title}</span>
                <span className="text-gray-500 text-xs sm:text-sm">{exp.years}</span>
              </div>
              <div className="text-gray-600 text-xs sm:text-sm mb-1">{exp.place}</div>
              <ul className="list-disc list-inside text-gray-700 text-sm mt-1 space-y-1">
                {exp.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default ExperienceSection; 