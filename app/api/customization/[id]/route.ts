import { connectDB } from "@/lib/db";
import { Customization } from "@/lib/schema";
import { NextResponse } from "next/server";

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectDB();

    const body = await req.json();

    const { orderStatus } = body;
    const { id } = params;

    if (!orderStatus) {
      return NextResponse.json(
        { message: "Please provide all the details" },
        {
          status: 400,
        }
      );
    }

    const customization = await Customization.findByIdAndUpdate(id, { orderStatus: orderStatus }, { new: true });

    return NextResponse.json(customization, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: (error as Error).message },
      {
        status: 500,
      }
    );
  }
}
