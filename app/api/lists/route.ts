import connectMongoDB from "@/lib/mongodb";
import List from "@/models/list";
import { NextRequest, NextResponse } from "next/server";

// POST: Create a new list item
export async function POST(req: NextRequest) {
  try {
    const { title, description, isDone } = await req.json();

    // Input validation
    if (!title || !description) {
      return NextResponse.json(
        { error: "Title and description are required" },
        { status: 400 }
      );
    }

    await connectMongoDB();
    const newList = await List.create({ title, description, isDone });

    return NextResponse.json(
      { message: "List created", list: newList },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create list" },
      { status: 500 }
    );
  }
}

// GET: Fetch all list items
export async function GET() {
  try {
    await connectMongoDB();
    const lists = await List.find();

    return NextResponse.json({ lists }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch lists" },
      { status: 500 }
    );
  }
}

// DELETE: Delete a list item by ID
export async function DELETE(req: NextRequest) {
  try {
    const id = req.nextUrl.searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    await connectMongoDB();
    const deletedList = await List.findByIdAndDelete(id);

    if (!deletedList) {
      return NextResponse.json({ error: "List not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "List deleted", deletedList },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to delete list" },
      { status: 500 }
    );
  }
}
