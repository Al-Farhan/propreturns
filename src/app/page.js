"use client"
import ListingCard from "@/components/ListingCard/ListingCard";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import HomeLocation from "@/components/HomeLocation";

export default function Home() {

  const [allListings, setAllListings] = useState();

  useEffect(() => {
    const getListings = async () => {
      const response = await axios.get('/api/get-listings');
      setAllListings(response);
    }

    getListings()
  }, [])
  

  return (
    <main className="px-5 min-h-screen">
      <div className="flex lg:flex-row w-full mt-3 px-5">
        <div className="flex-1 lg:w-1/2 xl:w-1/3">

          {allListings?.data?.allListings?.map((listing) => (
            <Link key={listing?._id} href={`/office-space/${listing?.slug}`}>
            <ListingCard listing={listing} />
            </Link>
          ))}
        
        </div>
        <div className="hidden lg:block lg:w-1/2 xl:w-2/3">
          <HomeLocation />
        </div>
      </div>
    </main>
  );
}
