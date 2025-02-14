/* eslint-disable react/prop-types */
const Step4 = ({ nextStep }) => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-[#1f85dd] text-white font-semibold">
      <div id="wind" className="text-left">
        <p className="text-[150px] font-light font-[Segoe UI] mb-[-7px]">:(</p>
        <p className="text-lg font-[Arial]">
          This page ran into a problem and needs to restart.
          <br /> Reason - Users&apos; cuteness level exceeded safe limits!
        </p>
      </div>
      <button
        className="font-[Arial] mt-6 px-6 py-2 bg-white text-[#1f85dd] font-bold rounded-xs text-base cursor-pointer"
        onClick={nextStep}
      >
        Restart
      </button>
    </div>
  );
};

export default Step4;
