import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import User from "@/models/user.model";

export async function POST(req) {
  try {
    connectDB();
    const { username, email, password, age, gender, qualification } =
      await req.json();
    console.log(username, email, password, age, gender, qualification);
    const hashedPassword = await bcrypt.hash(password, 10);
    const createdUser = await User.create({
      username,
      email,
      password: hashedPassword,
      age,
      gender,
      qualification,
    });
    console.log(createdUser);
    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}
