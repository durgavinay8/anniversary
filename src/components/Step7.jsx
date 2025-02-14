import { useState } from "react";
import catMeme from "../assets/happy_happy_cat__meme.gif";
// eslint-disable-next-line react/prop-types
const Step7 = ({ nextStep }) => {
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white text-center">
      {!accepted ? (
        <>
          <h2 className="text-3xl font-bold">Happy Anniversary! Let’s continue laughing, loving, and living this beautiful journey. 💫✨</h2>

          <div className="mt-10">
            <button
              className="px-6 py-2 bg-green-500 rounded-lg hover:bg-green-600 mr-4"
              onClick={() => setAccepted(true)}
            >
              Without a doubt!
            </button>
            <button
              className="px-6 py-2 bg-red-500 rounded-lg hover:bg-red-600"
              onClick={nextStep}
            >
              No
            </button>
          </div>
        </>
      ) : (
        <>
          <img src={catMeme} className="absolute  h-1/2"></img>
        </>
      )}
    </div>
  );
};

export default Step7;
