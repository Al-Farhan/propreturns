import Link from 'next/link'
import React from 'react'

const Nearby = () => {
  return (
    <div className='my-8'>
        <h1 className="font-bold text-3xl my-4">Nearby office spaces</h1>
        <div className='flex flex-col lg:flex-row justify-between'>
            <Link href={"#"}>
            <div className='flex flex-col'>
                <img className='w-full lg:w-80 rounded-md' src="https://assets.codi.com/production/tr:w-1200,h-800/6v9ngwfgum5al7b3zhcwuj8e2hcz" alt="" />
                <p className='mt-4 text-[#9c9c9d]'>Kearny, NJ</p>
                <p className="text-[#9c9c9d]">Sunny, Industrial Office Space in Kearny</p>
            </div>
            </Link>
            <Link href={"#"}>
            <div className='flex flex-col'>
                <img className='w-full lg:w-80 rounded-md' src="https://assets.codi.com/production/tr:w-1200,h-800/ilgd7i12skfi5nbxmxy4g1o78hps" alt="" />
                <p className='mt-4 text-[#9c9c9d]'>Kearny Point, Kearny, NJ</p>
                <p className="text-[#9c9c9d]">Large, Modern Office in Kearny Point</p>
            </div>
            </Link>
            <Link href={"#"}>
            <div className='flex flex-col'>
                <img className='w-full lg:w-80 rounded-md' src="https://assets.codi.com/production/tr:w-1200,h-800/iut9648885oj5mq6yf0fq5s3pgo4" alt="" />
                <p className='mt-4 text-[#9c9c9d]'>Kearny, NJ</p>
                <p className="text-[#9c9c9d]">Large Industrial office</p>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default Nearby