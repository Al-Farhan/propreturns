"use client";
import { ListingCarousel } from "./ListingCarousel";

const ListingCard = ({ listing }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 border-b py-4">
      <div className="flex-1 md:max-w-96">
        <ListingCarousel images={listing?.images} />
      </div>
      <div className="flex flex-col justify-around">
        <div className="flex flex-col">
          <h3 className="text-sm text-gray-400"> {listing?.location} </h3>
          <p>{listing?.title}</p>
        </div>

        <div className="flex gap-x-4">
          <p>
            {listing?.area} ft <sup>2</sup>{" "}
          </p>
          {listing?.room && <li> {listing?.room} meeting rooms</li>}
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
