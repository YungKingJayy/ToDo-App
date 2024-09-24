import connectMongoDB from "@/lib/mongodb";
import List from "@/models/list";
import { NextRequest, NextResponse } from "next/server";

// PUT: Update a specific list item by its ID
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const {
      newtitle: title,
      newDescription: description,
      newIsDone: isDone,
    } = await req.json();
    await connectMongoDB();
    const result = await List.findByIdAndUpdate(
      id,
      { title, description, isDone },
      { new: true }
    );

    if (!result) {
      return NextResponse.json({ message: "List not found" }, { status: 404 });
    }

    // Return success response
    return NextResponse.json({ message: "List updated" }, { status: 200 });
  } catch (error) {
    // Return error response on failure
    console.error(error);
    return NextResponse.json(
      { error: "Failed to update list" },
      { status: 500 }
    );
  }
}

// GET: Fetch a specific list item by its ID
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    await connectMongoDB();
    const list = await List.findById(id);

    if (!list) {
      return NextResponse.json({ message: "List not found" }, { status: 404 });
    }

    // Return the found list item
    return NextResponse.json({ list }, { status: 200 });
  } catch (error) {
    // Return error response on failure
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch list" },
      { status: 500 }
    );
  }
}
