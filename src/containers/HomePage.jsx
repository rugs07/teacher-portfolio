import React from "react";
import { motion } from "framer-motion";
import InfoSection from "../components/InfoSection";
import ExperienceSection from "../components/ExperienceSection";
import ActivitiesSection from "../components/ActivitiesSection";

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

const experiences = [
  {
    years: "२००२ - २०११",
    title: "सहाय्यक शिक्षिका",
    place: "ऑरोबिंदो अक्षरज्योती स्कूल, परभणी, महाराष्ट्र",
    details: [
      "इयत्ता ७ ते १० च्या विद्यार्थ्यांना गणित शिकवले, जटिल संकल्पना सोप्या पद्धतीने समजावून सांगितल्या.",
      "विद्यार्थ्यांच्या शैक्षणिक प्रगतीत मोजता येईल असा बदल घडवण्यासाठी नवीन अध्यापन पद्धती राबवल्या.",
      "स्पर्धा परीक्षांसाठी विद्यार्थ्यांना मार्गदर्शन केले, त्यांची विचारशक्ती व समस्या सोडवण्याची क्षमता वाढवली.",
    ],
  },
  {
    years: "२०११ - वर्तमान",
    title: "वरिष्ठ गणित शिक्षिका",
    place: "समर्थ विद्या मंदिर, परभणी, महाराष्ट्र",
    details: [
      "गणित विभागाचे नेतृत्व केले, इयत्ता ७ ते १० च्या विद्यार्थ्यांना संकल्पनात्मक स्पष्टता व परीक्षेची तयारी यावर भर देऊन अध्यापन केले.",
      "९०% पेक्षा जास्त विद्यार्थ्यांनी बोर्ड परीक्षेत विशेष प्राविण्य मिळवले.",
      "विद्यार्थ्यांचा सहभाग वाढवण्यासाठी कार्यशाळा व सेमिनार्स आयोजित केले.",
    ],
  },
  {
    years: "२०१८ - वर्तमान",
    title: "फ्रँचायझी अबॅकस शिक्षिका",
    place: "आलमा अबॅकस, परभणी, महाराष्ट्र",
    details: [
      "ऑनलाइन व ऑफलाइन पद्धतीने ५००+ विद्यार्थ्यांना अबॅकसचे प्रशिक्षण दिले, त्यांच्या अंकगणित व बौद्धिक कौशल्यात वाढ केली.",
      "अबॅकस शिक्षणाचे महत्त्व पटवून देण्यासाठी कार्यशाळा आयोजित केल्या.",
      "फ्रँचायझीचे व्यवस्थापन यशस्वीरित्या केले, दर्जेदार प्रशिक्षण व विद्यार्थ्यांचे समाधान कायम राखले.",
    ],
  },
];

const aboutText = "नमस्कार! मी स्वाती बोधनकर, गेल्या २५ वर्षांपासून श्री समर्थ विद्या मंदिर, परभणी येथे गणित विषय शिकवते. विद्यार्थ्यांना गणिताची गोडी लागावी व त्यांचा बौद्धिक विकास व्हावा, यासाठी मी नेहमीच सर्जनशील व कृतीशील शिक्षणपद्धती वापरते।";

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-green-100 font-sans relative overflow-hidden">

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
          <blockquote className="italic text-lg sm:text-xl text-yellow-800 font-semibold drop-shadow-sm">गणित म्हणजे केवळ आकडेमोड नव्हे, तर विचार करण्याची कला आहे.</blockquote>
        </div>
      </div>

      <InfoSection
        experienceYears="२५+ वर्षे"
        contact="swatiparbhani@gmail.com"
        aboutText={aboutText}
      />
      <ExperienceSection experiences={experiences} />
      <ActivitiesSection activities={activities} />

      {/* Footer */}
      <footer className="mt-10 sm:mt-16 pb-2 sm:pb-4 text-gray-400 text-xs text-center px-2">© {new Date().getFullYear()} स्वाती बोधनकर | श्री समर्थ विद्या मंदिर, परभणी</footer>
    </div>
  );
}

export default HomePage; 