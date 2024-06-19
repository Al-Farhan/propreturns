import dbConnect from "@/lib/dbConnect";
import Listing from "@/models/Listing";

export async function GET(request) {
    await dbConnect();

    try {
        const allListings = await Listing.find();

        return Response.json(
            {
                success: true,
                allListings
            },
            {
                status: 200
            }
        )
    } catch (error) {
        console.log("Error getting listings", error.message);
        return Response.json(
            {
                success: false,
                message: "Error getting listings"
            },
            {
                status: 500
            }
        )
    }
}