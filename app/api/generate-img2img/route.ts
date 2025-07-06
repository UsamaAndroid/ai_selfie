import { NextRequest, NextResponse } from "next/server";
import { getSignedUrl } from "@/lib/liblibai-util";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const baseUrl = "/api/generate/webui/img2img";
    const fullUrl = getSignedUrl(baseUrl);

    const response = await fetch(`https://openapi.liblibai.cloud${fullUrl}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const result = await response.json();  
    console.log("📦 LiblibAI Img2Img response:", JSON.stringify(result, null, 2)); // 👈 Add this

    return NextResponse.json(result);
  } catch (error) {
    console.error("❌ Img2Img API Error:", error); // 👈 Add this too
    return NextResponse.json(
      { error: "Image-to-Image failed", details: error },
      { status: 500 }
    );
  }
}
