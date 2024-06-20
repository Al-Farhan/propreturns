import React from "react";

const FloatingCard = () => {
  return (
    <div className="sticky flex flex-col rounded-md shadow-md p-5 mt-5 mr-5">
      <div className="flex justify-center items-center gap-x-2 border-b pb-8">
        <img
          className="w-16 rounded-md"
          src="https://assets.codi.com/production/tr:w-320,h-320/qv9hg4u2njz73w14l2lu3pgux330"
          alt=""
        />
        <div>
          <h1 className="text-xl font-bold">Large Industrial Office</h1>
          <p className="text-[#88979E] text-sm">Kearny, NJ</p>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button className="text-white w-full bg-[#0078FF] hover:bg-[#0043CE] px-8 py-4 rounded-md">Log in to see pricing</button>
      </div>
    </div>
  );
};

export default FloatingCard;
