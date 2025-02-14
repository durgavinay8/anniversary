import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import videoBg from "./assets/heart_bg.mp4";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Step5 from "./components/Step5";
import Step6 from "./components/Step6";
import Step7 from "./components/Step7";
import Step8 from "./components/Step8";

const App = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    console.log("Moving to next step:", step + 1);
    setStep((prev) => prev + 1);
  };

  const restart = () => {
    setStep(6);
  };

  const animations = {
    1: {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { duration: 0.8 } },
      exit: { opacity: 0, transition: { duration: 0.8 } },
    }, // Normal fade in and fade out
    2: {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { duration: 0.8 } },
      exit: { opacity: 0, transition: { duration: 0.8 } },
    }, // Normal fade in and fade out
    3: {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { duration: 0.8 } },
      exit: { opacity: 0, transition: { duration: 0.01 } }, // Sudden stop
    }, // Normal fade in, sudden stop for exit
    4: {
      initial: { opacity: 1, transition: { duration: 0.01 } }, // Sudden start
      animate: { opacity: 1 },
      exit: { opacity: 0, transition: { duration: 0.01 } }, // Sudden stop
    }, // Sudden start and stop
    5: {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { duration: 0.8 } },
      exit: { opacity: 0, transition: { duration: 0.8 } },
    }, // Normal fade in and fade out
    6: {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { duration: 0.8 } },
      exit: { opacity: 0, transition: { duration: 0.8 } },
    }, // Normal fade in and fade out
    7: {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { duration: 0.8 } },
      exit: { opacity: 0, transition: { duration: 0.01 } }, // Sudden stop
    }, // Normal fade in, sudden stop for exit
    8: {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { duration: 0.8 } },
      exit: { opacity: 0, transition: { duration: 0.8 } },
    }, // Normal fade in and fade out
  };

  return (
    <div className="w-full h-full">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoBg} type="video/mp4" />
      </video>

      {/* Smooth Step Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={animations[step]?.initial || { opacity: 0 }}
          animate={animations[step]?.animate || { opacity: 1 }}
          exit={animations[step]?.exit || { opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10"
        >
          {step === 1 && <Step1 nextStep={nextStep} />}
          {step === 2 && <Step2 nextStep={nextStep} />}
          {step === 3 && <Step3 nextStep={nextStep} />}
          {step === 4 && <Step4 nextStep={nextStep} />}
          {step === 5 && <Step5 nextStep={nextStep} />}
          {step === 6 && <Step6 nextStep={nextStep} />}
          {step === 7 && <Step7 nextStep={nextStep} />}
          {step === 8 && <Step8 restart={restart} />}
        </motion.div>
      </AnimatePresence>

      {/* Dark Overlay for Readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
    </div>
  );
};

export default App;
