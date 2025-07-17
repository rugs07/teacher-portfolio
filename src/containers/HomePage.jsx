import React from "react";

const activities = [
  {
    title: "गणित प्रश्नमंजुषा स्पर्धा",
    date: "२०२३",
    description: "विद्यार्थ्यांसाठी गणित प्रश्नमंजुषा स्पर्धा आयोजित केली, ज्यामुळे गणितातील गोडी वाढली.",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "गणित प्रात्यक्षिक कार्यशाळा",
    date: "२०२२",
    description: "गणिताच्या संकल्पना प्रत्यक्ष कृतीतून शिकवण्यासाठी कार्यशाळा घेतली.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "राष्ट्रीय गणित दिवस",
    date: "२०२१",
    description: "राष्ट्रीय गणित दिवसानिमित्त विविध उपक्रम राबवले.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  },
];

const quote = "गणित म्हणजे केवळ आकडेमोड नव्हे, तर विचार करण्याची कला आहे.";

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-green-100 font-sans relative overflow-hidden">
      {/* Animated/Decorative Math Background */}
      <svg className="absolute top-0 left-0 w-full h-64 pointer-events-none z-0 animate-pulse" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="200" cy="80" r="32" fill="#fde68a" fillOpacity="0.5" />
        <rect x="1200" y="40" width="48" height="48" rx="12" fill="#bbf7d0" fillOpacity="0.4" />
        <text x="400" y="120" fontSize="48" fill="#a3a3a3" fillOpacity="0.2">π</text>
        <text x="900" y="90" fontSize="40" fill="#a3a3a3" fillOpacity="0.18">∞</text>
        <text x="700" y="60" fontSize="36" fill="#a3a3a3" fillOpacity="0.18">Σ</text>
        <text x="1100" y="150" fontSize="44" fill="#a3a3a3" fillOpacity="0.15">√</text>
        <circle cx="800" cy="180" r="18" fill="#fef9c3" fillOpacity="0.4" />
        <rect x="300" y="140" width="36" height="36" rx="8" fill="#bbf7d0" fillOpacity="0.3" />
      </svg>

      {/* Hero Section */}
      <div className="relative w-full flex flex-col items-center py-10 px-4 sm:py-12 sm:px-6 md:px-12 z-10">
        <img
          src="https://api.dicebear.com/7.x/initials/svg?seed=SwatiBodhankar&backgroundColor=ffd700"
          alt="शिक्षिका"
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full shadow-lg border-4 border-yellow-400 mb-4 sm:mb-6 object-cover"
        />
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-1 sm:mb-2 text-center">स्वाती बोधनकर</h1>
        <h2 className="text-lg sm:text-xl text-green-700 font-semibold mb-1 text-center">गणित शिक्षिका</h2>
        <p className="text-sm sm:text-md text-gray-600 mb-1 text-center">श्री समर्थ विद्या मंदिर, परभणी</p>
        <span className="inline-block bg-green-200 text-green-800 px-3 py-1 rounded-full text-xs font-bold mt-2">परभणी</span>
        {/* Inspirational Quote */}
        <div className="mt-6 mb-2 max-w-xl text-center">
          <blockquote className="italic text-lg sm:text-xl text-yellow-800 font-semibold drop-shadow-sm">{quote}</blockquote>
        </div>
      </div>

      {/* Info Section */}
      <div className="p-2">
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 w-full max-w-5xl mx-auto mb-8 sm:mb-10 border-l-4 border-yellow-400 mt-4 sm:mt-8">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">माझ्याबद्दल</h3>
          <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
            नमस्कार! मी स्वाती बोधनकर, गेल्या १५ वर्षांपासून श्री समर्थ विद्या मंदिर, परभणी येथे गणित विषय शिकवते. विद्यार्थ्यांना गणिताची गोडी लागावी व त्यांचा बौद्धिक विकास व्हावा, यासाठी मी नेहमीच सर्जनशील व कृतीशील शिक्षणपद्धती वापरते.
          </p>
          <div className="flex flex-col sm:flex-row sm:justify-between text-gray-600 text-xs sm:text-sm gap-1 sm:gap-0">
            <div>
              <span className="font-semibold">अनुभव:</span> १५+ वर्षे
            </div>
            <div>
              <span className="font-semibold">संपर्क:</span> swatiparbhani@gmail.com
            </div>
          </div>
        </div>
      </div>

      {/* Activities Section */}
      <div className="p-1">
        <div className="w-full max-w-6xl mx-auto px-2 sm:px-4">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">मागील उपक्रम</h3>
          <div className="grid gap-5 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
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

      {/* Footer */}
      <footer className="mt-10 sm:mt-16 pb-2 sm:pb-4 text-gray-400 text-xs text-center px-2">© {new Date().getFullYear()} स्वाती बोधनकर | गणित शिक्षिका | श्री समर्थ विद्या मंदिर, परभणी</footer>
    </div>
  );
}

export default HomePage; 