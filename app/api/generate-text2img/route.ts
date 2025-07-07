// app/api/generate-text2img/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getApiUrl } from "@/lib/liblibai-util";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const baseUrl = "/api/generate/webui/text2img";
    const fullUrl = getApiUrl(baseUrl);

    const response = await fetch(fullUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("❌ LiblibAI API returned error:", result);
      return NextResponse.json(
        { error: "LiblibAI error", details: result },
        { status: response.status }
      );
    }

    return NextResponse.json(result);
  } catch (error: any) {
    console.error("❌ Server error:", error);
    return NextResponse.json(
      { error: "Internal server error", details: error?.message || error },
      { status: 500 }
    );
  }
}
