"use client"
import Header from "@/components/Header";
import ListingCard from "@/components/ListingCard/ListingCard";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

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
        <div className="flex-1 lg:w-1/2">

          {allListings?.data?.allListings?.map((listing) => (
            <ListingCard listing={listing} />
          ))}
        
        </div>
        <div className="hidden lg:block lg:w-1/2">Map</div>
      </div>
    </main>
  );
}
