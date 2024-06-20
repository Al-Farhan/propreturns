"use client";
import React from "react";
import { useParams } from "next/navigation";
import FirstSection from "@/components/MyListing/FirstSection";
import Measures from "@/components/MyListing/Measures";
import ImageSection from "@/components/MyListing/ImageSection";
import AboutSection from "@/components/MyListing/AboutSection";

const MyListing = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="min-h-screen">
      <div className="image-section">
        <FirstSection />
        <div className="px-8">
          <Measures />
          <ImageSection />
          <AboutSection />
        </div>
      </div>
    </div>
  );
};

export default MyListing;
