"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import FirstSection from "@/components/MyListing/FirstSection";
import Measures from "@/components/MyListing/Measures";
import ImageSection from "@/components/MyListing/ImageSection";
import AboutSection from "@/components/MyListing/AboutSection";
import IncludedSection from "@/components/MyListing/IncludedSection";
import OptionalAddons from "@/components/MyListing/OptionalAddons";
import Location from "@/components/MyListing/Location";
import Neighborhood from "@/components/MyListing/Neighborhood";
import MeetJames from "@/components/MyListing/MeetJames";
import Nearby from "@/components/MyListing/Nearby";
import FloatingCard from "@/components/MyListing/FloatingCard";
import axios from "axios";

const MyListing = () => {
  const { id } = useParams();
  
  const [myListing, setMyListing] = useState();


  useEffect(() => {
    const getMyListing = async () => {
      const response = await axios.get(`/api/get-mylisting?slug=${id}`);
      console.log(response);
      setMyListing(response?.data);
    }

    getMyListing()
  }, [])
  

  return (
    <div className="min-h-screen">
      <div className="image-section ">
        <FirstSection myListing={myListing?.myListing} />
        <div className="px-8 max-w-7xl m-auto">
          <Measures capacity={myListing?.myListing?.capacity} size={myListing?.myListing?.area} room={myListing?.myListing?.room} />
          <ImageSection images={myListing?.myListing?.images} />
          <div className="lg:flex">
            <div className="lg:w-2/3">
              <AboutSection about={myListing?.myListing?.about} />
              <IncludedSection />
              <OptionalAddons />
              <Location />
              <Neighborhood walkscore={myListing?.myListing?.walk_score} transitscore={myListing?.myListing?.transit_score} bikescore={myListing?.myListing?.bike_score} />
              <MeetJames />
            </div>
            <div className="lg:w-1/3 hidden lg:block">
                <FloatingCard />
            </div>
          </div>
          <Nearby />
        </div>
      </div>
    </div>
  );
};

export default MyListing;
