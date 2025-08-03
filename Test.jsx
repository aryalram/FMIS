import React from "react";

function Test() {
  return (
    <>
      <div className="bg-blue-500 text-white text-center p-4 rounded-lg">
        Hello Ram You Are learing Tailwind . I learn everything so fast .
      </div>
      <div className="flex items-centre justify-center">
        <div className="bg-green-300 p-4">Left</div>
        <div className="bg-red-300 p-4">Right</div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="text-color-blue bg-lime-200 text-center">1</div>
        <div>2</div>
        <div>3</div>
      </div>
      <div className="h-screen w-full flex items-start justify-center bg-gray-100">
        <p className="text-xl mt-4">Centered content at top</p>
      </div>
    </>
  );
}

export default Test;
