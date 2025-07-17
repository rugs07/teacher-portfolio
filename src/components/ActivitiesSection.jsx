import React from "react";

const ActivitiesSection = ({ activities }) => (
  <div id="activities" className="w-full max-w-6xl mx-auto px-4 sm:px-6 mb-8 sm:mb-12">
    <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 h-full flex flex-col">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">मागील उपक्रम</h3>
      <div className="grid gap-5 sm:gap-8 grid-cols-1 sm:grid-cols-3">
        {activities.map((activity, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-md p-0 border-t-4 border-green-300 hover:scale-105 transition-transform duration-200 flex flex-col h-full"
          >
            <img
              src={activity.image}
              alt={activity.title}
              className="w-full h-32 sm:h-40 object-cover rounded-t-lg"
            />
            <div className="p-4 sm:p-5 flex flex-col flex-1">
              <h4 className="text-base sm:text-lg font-semibold text-green-800 mb-1">{activity.title}</h4>
              <span className="text-xs text-gray-500 mb-2 block">{activity.date}</span>
              <p className="text-gray-700 flex-1 text-xs sm:text-base">{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ActivitiesSection; 