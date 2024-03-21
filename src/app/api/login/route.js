import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import User from "@/models/user.model";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    connectDB();
    const { email, password } = await req.json();

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: "Invalid email" }, { status: 400 });
    }

    const hashedPassword = user.password;
    const result = await bcrypt.compare(password, hashedPassword);

    if (!result) {
      return NextResponse.json(
        { message: "Incorrect password" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Signed in!!!", user },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}
