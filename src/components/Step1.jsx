/* eslint-disable react/prop-types */
const Step1 = ({ nextStep }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white text-center gap-10">
      <h1 className="text-4xl font-bold">Can I have your consent?</h1>
      <button
        className="text-2xl px-6 pt-5 pb-3 bg-[#E30022] rounded-lg hover:bg-[#D3212C] border-1"
        onClick={nextStep}
      >
        For...?
      </button>
    </div>
  );
};

export default Step1;
