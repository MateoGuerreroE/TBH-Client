import { NextRequest, NextResponse } from "next/server";
import { nanoid } from "nanoid";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest) {
  try {
    const userAgent = req.headers.get("user-agent");
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0] : "unknown";

    const visitorId = nanoid(12);
    const payload = {
      role: "visitor",
      visitorId,
      userAgent: userAgent || "unknown",
      ip,
    };

    if (!process.env.JWT_SECRET) {
      throw new Error("MISSING_JWT_SECRET");
    }
    const token = jwt.sign(payload, process.env.JWT_SECRET);

    return NextResponse.json({
      token,
    });
  } catch (e) {
    console.error("Error generating visitor token:", e);
    return NextResponse.json({ error: "Failed to generate visitor token" });
  }
}
