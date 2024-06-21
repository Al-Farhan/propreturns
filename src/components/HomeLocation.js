import React from "react";

const HomeLocation = () => {
  return (
    <div className="">
    <div className="flex sm:flex-nowrap flex-wrap ">
      <div className="lg:w-full md:w-1/2 bg-gray-300 rounded-lg overflow-hidden flex items-end justify-start relative h-screen">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1563311.7234041172!2d-76.04327009190789!3d40.06775585275917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c0fb959e00409f%3A0x2cd27b07f83f6d8d!2sNew%20Jersey%2C%20USA!5e0!3m2!1sen!2sin!4v1718952663978!5m2!1sen!2sin" width="100%" height="100%" style={{border: "0", filter: "grayscale(1) contrast(1.2) opacity(0.4)"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
    </div>
  );
};

export default HomeLocation;
