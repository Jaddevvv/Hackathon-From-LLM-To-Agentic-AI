import TrusteeLogo from "@shared/assets/logo/logo_simplified.png";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Plus, Settings } from "lucide-react";
import { motion } from "framer-motion";
import { ScoringGauge } from "../../../shared/components/scoringGauge.component";
import { useEffect, useCallback, useState, useRef } from "react";

// Add TypeScript declaration for the global property
declare global {
  interface Window {
    updateTrusteeScore?: (score: number) => void;
  }
}

const TrusteeListing = () => {
  const [score, setScore] = useState(68);
  const lastSentScore = useRef(score);

  // Function to update the extension's gauge
  const updateExtensionGauge = useCallback((newScore: number) => {
    // Only send if the score has actually changed
    if (lastSentScore.current !== newScore) {
      try {
        window.postMessage({
          type: 'UPDATE_SCORE',
          score: newScore,
          source: 'TrusteeListing'
        }, '*');
        lastSentScore.current = newScore;
      } catch (error) {
        console.error('Frontend: Error updating score:', error);
      }
    }
  }, []);

  // Initialize the extension communication when component mounts
  useEffect(() => {
    // Only send initial score once when component mounts
    if (lastSentScore.current !== score) {
      updateExtensionGauge(score);
    }
  }, [score, updateExtensionGauge]);

  // Example of how to update the score (you can use this or remove it)
  const handleScoreChange = (newScore: number) => {
    setScore(newScore);
  };


  // Determine status, color, and dynamic message based on score
  let status = "";
  let colorClass = "";
  let message = "";

  if (score > 75) {
    status = "Legit ✅";
    colorClass = "#6bdba7";
    message = "Trustee thinks that this listing is trustworthy.";
  } else if (score >= 40 && score <= 75) {
    status = "Take care ⚠️";
    colorClass = "#f59e0b";
    message = "Trustee thinks that you should proceed with caution.";
  } else {
    status = "Risky 🚨";
    colorClass = "#ef4444";
    message = "Trustee thinks that this listing could be a scam.";
  }

  return (
    <motion.div
      className="max-w-xl mx-auto p-6 space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* <button onClick={() => handleScoreChange(Math.round(Math.random()*100))}>Click me</button> */}
      {/* Header */}
      <motion.div
        className="flex justify-between items-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img src={TrusteeLogo} alt="Trustee" className="w-30" />
        <motion.div whileHover={{ rotate: 90 }}>
          <Settings />
        </motion.div>
      </motion.div>

      <ScoringGauge score={score} colorClass={colorClass} />
        
        

        <div className="flex flex-col items-center justify-center text-center gap-1.5 translate-y-[-30px]">
          {/* Status */}
          <div className="flex justify-center items-center">
            <h2 className={`text-2xl font-semibold `}  style={{ color: colorClass }}>{status}</h2>
          </div>

          {/* Description */}
          <p className={`text-sm`}>
            {message}
          </p>

        {/* Tags Section with Animation */}
        <div className="flex flex-wrap gap-2 mt-2">
          <motion.span
            className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            AI-generated description
          </motion.span>
          <motion.span
            className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            Phishing
          </motion.span>
          <motion.span
            className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            Similar images found
          </motion.span>
        </div>
      </div>



      {/* Listing Analysis */}
      <motion.div
        className="rounded-2xl px-4 border-0 bg-white"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <span>Listing analysis</span>
          <span className="text-red-600">12/100</span>
        </h2>

        {/* Images Section */}
        <div className="flex flex-col gap-2 pt-4">
          {["Original images", "Similar images"].map((label, idx) => (
            <div key={idx}>
              <span className="text-sm">{label}</span>
              <div className="flex space-x-4 mt-2 p-1 overflow-x-scroll overflow-y-hidden">
                {[1, 2, 3, 4].map((_, imgIdx) => (
                  <motion.img
                    key={imgIdx}
                    src="https://images.unsplash.com/photo-1741986947217-d1a0ecc39149?q=80&w=1166&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt={`image-${imgIdx}`}
                    className="w-30 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Alert Section */}
        <motion.div
          className="flex justify-center items-center text-sm text-red-500 mt-4 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <AlertTriangle className="w-4 h-4 mr-1" />
          Found 3 similar images on Google (Source.fr, Vinted, Scamland)
        </motion.div>

        {/* Additional Analysis */}
        <p className="mt-2 text-gray-700">
          Moreover:
          <ul className="list-disc list-inside ml-4 flex flex-col gap-2 mt-2">
            {[
              "Description seems to have been generated by AI (79% sure)",
              "The listing has been created a few minutes ago only",
            ].map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </p>
      </motion.div>

      {/* Conversation Analysis */}
      <motion.div
        className="rounded-2xl px-4 pt-4 bg-white"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl font-semibold flex items-center gap-2">
          Conversation analysis
          <span className="text-orange-600">45/100</span>
        </h2>
        <p className="mt-4 text-gray-700">
          User seems to be legit, but his background shows potential issues:
          <ul className="list-disc list-inside ml-4 flex flex-col gap-2 mt-2">
            {[
              "No profile picture",
              "Name already taken too many times",
              "Scam alert in 2019",
            ].map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </p>
      </motion.div>

      {/* Questions Section */}
      <motion.div
        className="px-6"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="font-semibold text-base mb-4 pt-4">What I should ask?</h3>
        <div className="space-y-2">
          {[
            "Could you send me another picture?",
            "How do you want me to pay to you?",
            "Could you tell me more about you?",
          ].map((text, idx) => (
<Button variant="outline" className="!bg-gray-100 border-1 !border-gray-100 w-full" key={idx}>              {text}
              <Plus className="w-4 h-4 ml-auto" />
            </Button>
          ))}
        </div>
      </motion.div>

      {/* Footer */}
      <div className="flex justify-center items-center">
      <Button
        className="rounded-b-sm !bg-transparent border-1 text-black h-8 "
      >
        See more
      </Button>
      </div>
    </motion.div>
  );
};

export default TrusteeListing;