import { GiWalk } from "react-icons/gi";
import { IoIosTrain } from "react-icons/io";
import { FaBicycle } from "react-icons/fa6";

const Neighborhood = () => {
  return (
    <div className='my-8 border-b'>
        <h3 className='font-semibold'>Neighborhood: South Kearny</h3>
        <div className="flex justify-between">
            <div className='flex flex-col justify-center items-center gap-y-2 my-4'>
                <p className='text-[#88979E] text-sm'>Walk Score</p>
                <GiWalk color="#515B60" size={30} />
                <p className="text-[#88979E] text-sm"><span className="text-[#2fa8ff] hover:text-[#5FAAFF] hover:cursor-pointer font-semibold">35</span> / 100</p>
                <p className="text-xs text-[#88979E]">Car-Dependent</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-y-2 my-4'>
                <p className='text-[#88979E] text-sm'>Transit Score</p>
                <IoIosTrain color="#515B60" size={30} />
                <p className="text-[#88979E] text-sm"><span className="text-[#2fa8ff] hover:text-[#5FAAFF] hover:cursor-pointer font-semibold">46</span> / 100</p>
                <p className="text-xs text-[#88979E]">Some Transit</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-y-2 my-4'>
                <p className='text-[#88979E] text-sm'>Bike Score</p>
                <FaBicycle color="#515B60" size={30} />
                <p className="text-[#88979E] text-sm"><span className="text-[#2fa8ff] hover:text-[#5FAAFF] hover:cursor-pointer font-semibold">46</span> / 100</p>
                <p className="text-xs text-[#88979E]">Somewhat Bikeable</p>
            </div>
        </div>
    </div>
  )
}

export default Neighborhood