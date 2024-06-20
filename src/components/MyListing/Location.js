import React from "react";

const Location = () => {
  return (
    <div className="my-8 border-b">
        <h3 className="text-xl font-semibold my-4">Location</h3>
    <div className="flex sm:flex-nowrap flex-wrap ">
      <div className="lg:w-full md:w-1/2 bg-gray-300 rounded-lg overflow-hidden flex items-end justify-start relative h-72">
        <iframe
          width="100%"
          height="100%"
          className="absolute inset-0"
          frameborder="0"
          title="map"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
          style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
        ></iframe>
      </div>
    </div>
    </div>
  );
};

export default Location;
