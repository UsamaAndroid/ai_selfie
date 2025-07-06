// app/api/auth/login/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { compare } from "bcryptjs";
import { signJwt } from "@/lib/jwt";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || !user.password) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const isPasswordCorrect = await compare(password, user.password);

    if (!isPasswordCorrect) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const token = signJwt({ id: user.id, email: user.email });

    return NextResponse.json(
      {
        token,
        user: {
          id: user.id,
          email: user.email,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
