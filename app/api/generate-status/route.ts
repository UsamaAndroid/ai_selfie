import { NextRequest, NextResponse } from "next/server";
import { getSignedUrl } from "@/lib/liblibai-util"; // or your lib path

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { generateUuid } = body;

    if (!generateUuid) {
      return NextResponse.json({ code: -1, msg: "generateUuid is required" }, { status: 400 });
    }

    const baseUrl = "/api/generate/webui/status";
    const fullUrl = getSignedUrl(baseUrl);

    const response = await fetch(`https://openapi.liblibai.cloud${fullUrl}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ generateUuid }),
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ code: -1, msg: "Failed to query status", error }, { status: 500 });
  }
}
