import dbConnect from "@/lib/dbConnect";
import Listing from "@/models/Listing";

export async function GET(request) {
    await dbConnect();

    try {
        const { searchParams } = new URL(request.url);
        console.log(searchParams);

        const slugParam = {
            slug: searchParams.get("slug")
        }

        const mySlug = slugParam.slug;

        console.log("Slug param", mySlug)

        const myListing = await Listing.findOne({ slug: mySlug });

        if (!myListing) {
            return Response.json(
                {
                    success: false,
                    message: "Some error occured"
                },
                {
                    status: 500
                }
            )
        }

        return Response.json(
            {
                success: true,
                myListing
            },
            {
                status: 200
            }
        )
        
    } catch (error) {
        return Response.json(
            {
                success: false,
                message: "Some error occured",
                error: error.message
            },
            {
                status: 500
            }
        )
    }
}