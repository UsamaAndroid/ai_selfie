import { NextRequest, NextResponse } from "next/server";
import { getSignedUrl } from "@/lib/liblibai-util";

export async function POST(req: NextRequest) {
  try {
    const { generateUuid } = await req.json();

    const baseUrl = "/api/generate/webui/query";
    const fullUrl = getSignedUrl(baseUrl);

    const response = await fetch(`https://openapi.liblibai.cloud${fullUrl}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ generateUuid }),
    });

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Query failed", details: error }, { status: 500 });
  }
}
