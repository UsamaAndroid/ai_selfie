import { NextRequest, NextResponse } from "next/server";
import { getSignedUrl } from "@/lib/liblibai-util";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const baseUrl = "/api/generate/webui/text2img";
    const fullUrl = getSignedUrl(baseUrl);

    const response = await fetch(`https://openapi.liblibai.cloud${fullUrl}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const result = await response.json();

    // 👇 Add this to see the actual response from LibLibAI
    console.log("📦 LibLibAI text2img result:", JSON.stringify(result, null, 2));

    if (!response.ok) {
      return NextResponse.json(
        { error: "LibLibAI API error", details: result },
        { status: 500 }
      );
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error("❌ API handler failed:", error);
    return NextResponse.json(
      { error: "Failed to generate image", details: (error as any)?.message || error },
      { status: 500 }
    );
  }
}
