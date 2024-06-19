import dbConnect from "@/lib/dbConnect";
import Listing from "@/models/Listing";
import { slugify } from "@/utils/slugify";

export async function POST(request) {
  await dbConnect();
  try {
    const { title, images, location, capacity, area, room, about, price } =
     await request.json();

      console.log("title", title);

    const slug = slugify(title);

    console.log("Slug", slug);

    if (
      !title ||
      !slug ||
      !images ||
      !location ||
      !capacity ||
      !area ||
      !about
    ) {
      return Response.json(
        {
          success: false,
          message: "All fields are required",
        },
        {
          status: 404,
        }
      );
    }

    const listing = await Listing.findOne({ slug });

    if (listing) {
      return Response.json(
        {
          success: false,
          message: "Listing with same name already exist",
        },
        {
          status: 500,
        }
      );
    }

    const newListing = new Listing({
      title,
      slug,
      images,
      location,
      capacity,
      area,
      room,
      about,
      price,
    });

    await newListing.save();

    return Response.json(
      {
        success: true,
        message: "Listing added successfully",
        title: title,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log("Some error occured while adding listing", error.message);
    return Response.json(
      {
        success: false,
        message: "Some error occured while adding listing",
        error
      },
      {
        status: 500,
      }
    );
  }
}
