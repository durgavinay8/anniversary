/* eslint-disable react/prop-types */
const Step5 = ({ nextStep }) => {
  console.log("step5");

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl drop-shadow-[0_1.2px_1.2px_rgba(255,255,255)]">
      Want to see how I felt the life with you? Let this video say what words can’t.
      </h1>
      <button
        className="text-xl mt-10 px-6 py-2 bg-[#E30022] rounded-lg hover:bg-[#D3212C]"
        onClick={nextStep}
      >
        Let’s Rewind 🎞️
      </button>
    </div>
  );
};

export default Step5;
