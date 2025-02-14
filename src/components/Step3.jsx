/* eslint-disable react/prop-types */
import legoMemeVid from "../assets/lego_meme.mp4";

const Step3 = ({ nextStep }) => {
  console.log("Step3 rendered");
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white text-center">
      <video
        onEnded={() => {
          console.log("Step3 video ended, moving to Step4");
          nextStep();
        }}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        playsInline
      >
        <source src={legoMemeVid} type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
      <h1 className={"text-4xl font-bold z-10"}>
        Stop smiling like that—years have passed, but your charm hasn’t changed
        one bit! 😍
      </h1>
    </div>
  );
};

export default Step3;
