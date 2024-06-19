import React from 'react'
import { FaCalendarDays } from "react-icons/fa6";
import { PiCurrencyDollarSimpleThin, PiRulerThin } from "react-icons/pi";
import { MdOutlineDoorFront } from "react-icons/md";

const HeaderStrip = () => {
  return (
    <div className="flex space-x-2 mb-2 mx-auto justify-between max-w-7xl items-center">
        <div className="lg:flex hidden items-center space-x-2">
          <div>
            <button className="flex items-center space-x-2 border rounded-md py-2 px-4 hover:bg-gray-200  text-blue-600 font-semibold">
              <FaCalendarDays /> <span>Full time</span>
            </button>
          </div>
          <div>
            <button className="flex items-center space-x-2 border rounded-md py-2 px-4 hover:bg-gray-200 text-gray-700 ">
              <PiCurrencyDollarSimpleThin /> <span>Price</span>
            </button>
          </div>
          <div>
            <button className="flex items-center space-x-2 border rounded-md py-2 px-4 hover:bg-gray-200 text-gray-700 ">
              <PiRulerThin />
              <span>Size</span>
            </button>
          </div>
          <div>
            <button className="flex items-center space-x-2 border rounded-md py-2 px-4 hover:bg-gray-200 text-gray-700 ">
              <MdOutlineDoorFront />
              <span>Meeting rooms</span>
            </button>
          </div>
          <div>
            <button className="text-sm text-gray-700">Reset</button>
          </div>
        </div>
        <div className="flex space-x-1">
          <p>Show only offsite availability </p>
          <label className="flex items-center cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                className="hidden"
                // checked={isChecked}
                // onChange={handleToggle}
              />
              <div className="toggle__line w-10 h-6 bg-gray-400 rounded-full shadow-inner"></div>
              <div
                className={`toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0 ${
                  true ? "toggle__dot--active" : ""
                }`}
              ></div>
            </div>
          </label>
        </div>
      </div>
  )
}

export default HeaderStrip