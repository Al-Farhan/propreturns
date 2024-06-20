"use client";
import React from "react";
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

const MyListing = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="min-h-screen">
      <div className="image-section ">
        <FirstSection />
        <div className="px-8 max-w-7xl m-auto">
          <Measures />
          <ImageSection />
          <div className="lg:flex">
            <div className="lg:w-2/3">
              <AboutSection />
              <IncludedSection />
              <OptionalAddons />
              <Location />
              <Neighborhood />
              <MeetJames />
            </div>
            <div className="lg:w-1/3 ">
                My Card
            </div>
          </div>
          <Nearby />
        </div>
      </div>
    </div>
  );
};

export default MyListing;
