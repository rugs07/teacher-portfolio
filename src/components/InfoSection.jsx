import React from "react";

const InfoSection = ({ experienceYears, contact, aboutText }) => (
  <div id="about" className="w-full max-w-6xl mx-auto px-4 sm:px-6 mb-8 sm:mb-10">
    <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 border-l-4 border-yellow-400 mt-4 sm:mt-8">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">माझ्याबद्दल</h3>
      <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">{aboutText}</p>
      <div className="flex flex-col sm:flex-row sm:justify-between text-gray-600 text-xs sm:text-sm gap-1 sm:gap-0">
        <div>
          <span className="font-semibold">अनुभव:</span> {experienceYears}
        </div>
        <div>
          <span className="font-semibold">संपर्क:</span> {contact}
        </div>
      </div>
    </div>
  </div>
);

export default InfoSection; 