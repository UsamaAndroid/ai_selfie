// app/api/generate/route.ts

import { NextRequest, NextResponse } from "next/server";
import { getSignedUrl } from "@/lib/liblibai-util";


export async function POST(req: NextRequest) {
  const body = await req.json();

  const baseUrl = "/api/generate/webui"; // Adjust based on LibLibAI docs
  const fullUrl = getSignedUrl(baseUrl);

  const response = await fetch(`https://openapi.liblibai.cloud${fullUrl}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const result = await response.json();
  return NextResponse.json(result);
}
