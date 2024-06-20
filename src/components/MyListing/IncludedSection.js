import { GoGear } from "react-icons/go";
import { CiWifiOn } from "react-icons/ci";
import { PiOfficeChairLight } from "react-icons/pi";
import { MdOutlineEmojiFoodBeverage } from "react-icons/md";
import { TfiSpray } from "react-icons/tfi";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";

const IncludedSection = () => {
  return (
    <div className="my-8 border-b">
      <h1 className="font-bold text-3xl">What&apos;s included</h1>
      <div className="bg-[#F8FBFF] p-2 my-4 rounded-md lg:grid lg:grid-cols-2 lg:gap-4 space-y-4">
        <div className="flex flex-row items-start gap-2 mt-3">
          <GoGear className="pt-1" size={22} />
          <div className="flex flex-col justify-center">
            <h3 className="font-medium text-[#263238] text-sm">Rent</h3>
            <p className="text-[#88979E] text-sm">
              Fully serviced; includes monthly rent and maintenance
            </p>
          </div>
        </div>
        <div className="flex flex-row items-start gap-2">
          <CiWifiOn className="" size={22} />
          <div className="flex flex-col justify-center">
            <h3 className="font-medium text-[#263238] text-sm">Fast WiFi</h3>
            <p className="text-[#88979E] text-sm">
              Be connected from day one and know that we&apos;re only one call
              away
            </p>
          </div>
        </div>
        <div className="flex flex-row items-start gap-2">
          <PiOfficeChairLight className="" size={22} />
          <div className="flex flex-col justify-center">
            <h3 className="font-medium text-[#263238] text-sm">Furniture</h3>
            <p className="text-[#88979E] text-sm">
              Ergonomic workstations, lounges, and whiteboards are ready for use
            </p>
          </div>
        </div>
        <div className="flex flex-row items-start gap-2">
          <MdOutlineEmojiFoodBeverage className="" size={22} />
          <div className="flex flex-col justify-center">
            <h3 className="font-medium text-[#263238] text-sm">Beverages</h3>
            <p className="text-[#88979E] text-sm">
              Tea, coffee, and sparkling water, restocked monthly
            </p>
          </div>
        </div>
        <div className="flex flex-row items-start gap-2">
          <TfiSpray className="" size={22} />
          <div className="flex flex-col justify-center">
            <h3 className="font-medium text-[#263238] text-sm">Cleaning</h3>
            <p className="text-[#88979E] text-sm">
              Weekly cleaning, maintenance, and add-ons.
            </p>
          </div>
        </div>
        <div className="flex flex-row items-start gap-2">
          <HiOutlineClipboardDocumentList className="" size={22} />
          <div className="flex flex-col justify-center">
            <h3 className="font-medium text-[#263238] text-sm">
              Office management
            </h3>
            <p className="text-[#88979E] text-sm">
              Fractional office management with on-site support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncludedSection;
