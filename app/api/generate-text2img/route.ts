// app/api/generate-text2img/route.ts

import { NextRequest, NextResponse } from "next/server";
import { getSignedUrl } from "@/lib/liblibai-util"; // Your util for signed URLs

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Base API endpoint for text2img generation as per liblibai doc
    const baseUrl = "/api/generate/webui/text2img";

    // Get signed URL with all auth query params
    const fullUrl = getSignedUrl(baseUrl);

    // Call LibLibAI official API
    const response = await fetch(`https://openapi.liblibai.cloud${fullUrl}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    // Forward the response back to frontend
    const result = await response.json();

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: "Failed to generate image", details: error }, { status: 500 });
  }
}