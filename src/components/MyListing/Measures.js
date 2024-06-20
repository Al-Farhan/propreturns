import React from 'react'

const Measures = () => {
  return (
    <div className='flex items-center justify-around my-8 max-w-lg mx-auto'>
        <div className="flex flex-col items-center">
            <h3 className='text-[#657C87] text-xs'>CAPACITY</h3>
            <p className='text-[#546E7A] text-lg font-semibold'>25</p>
            <p className='text-[#657C87] text-xs'>seats</p>
        </div>
        <div className="flex flex-col items-center">
            <h3 className='text-[#657C87] text-xs'>SIZE</h3>
            <p className='text-[#546E7A] text-lg font-semibold'>3166</p>
            <p className='text-[#657C87] text-xs'>sq. feet</p>
        </div>
        <div className="flex flex-col items-center">
            <h3 className='text-[#657C87] text-xs'>MEETING</h3>
            <p className='text-[#546E7A] text-lg font-semibold'>5</p>
            <p className='text-[#657C87] text-xs'>rooms</p>
        </div>
    </div>
  )
}

export default Measures