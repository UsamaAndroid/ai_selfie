// app/api/generate-img2img/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getSignedUrl } from "@/lib/liblibai-util";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("📥 Received request:", body);

    const baseUrl = "/api/generate/webui/img2img";
    const fullUrl = getSignedUrl(baseUrl);

    const response = await fetch(`https://openapi.liblibai.cloud${fullUrl}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const result = await response.json();
    console.log("📦 LiblibAI Img2Img response:", JSON.stringify(result, null, 2));

    // ✅ Extract generateUuid from LiblibAI response
    const generateUuid = result?.data?.generateUuid;

    if (!generateUuid) {
      console.error("❌ Missing generateUuid in Img2Img response:", result);
      return NextResponse.json(
        { error: "Missing generateUuid", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      data: {
        generateUuid,
      },
    });
  } catch (error) {
    console.error("❌ Img2Img API Error:", error);
    return NextResponse.json(
      { error: "Image-to-Image failed", details: error },
      { status: 500 }
    );
  }
}
