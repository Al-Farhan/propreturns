
"use client";

import { Carousel } from "flowbite-react";

export function ListingCarousel({ images }) {
  return (
      <Carousel className="h-44 lg:w-72" slide={false}>
        {images?.map((image, index) => (
          <img key={index} className="rounded-md" src={image} alt={image} />
        ))}
      </Carousel>
  );
}
