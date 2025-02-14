/* eslint-disable react/prop-types */
import { useEffect } from "react";

const Step8 = ({ restart }) => {
  useEffect(() => {
    console.log("step2 rendered");
    const timer = setTimeout(() => {
      console.log("Step2 finished, moving to Step3");
      restart();
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white text-center">
      <h1 className="text-4xl drop-shadow-[0_1.2px_1.2px_rgba(255,255,255)]">
        Need to rewind the glimpse of us again
      </h1>
    </div>
  );
};

export default Step8;
