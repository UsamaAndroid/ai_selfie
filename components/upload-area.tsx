"use client"

// import { useState, useCallback } from "react"

import { useState, useCallback, useRef, useEffect } from "react"
import { useDropzone } from "react-dropzone"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Upload, DollarSign, Sparkles } from "lucide-react"
import Image from "next/image"
import { fileToBase64 } from "@/lib/fileToBase64";
// import { UploadButton } from "@uploadthing/react";
import type { OurFileRouter } from "@/app/api/uploadthing/core";
import { genUploader } from "uploadthing/client";

const { uploadFiles } = genUploader<OurFileRouter>();
const uploadToUploadThing = async (file: File): Promise<string | null> => {
  try {
    const res = await uploadFiles("imageUploader", { files: [file] });
    return res?.[0]?.url || null;
  } catch (err) {
    console.error("❌ UploadThing upload failed:", err);
    return null;
  }
};


interface UploadAreaProps {
  onUpload: (file: File, petName: string) => void
}

export function UploadArea({  onUpload }: UploadAreaProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [petName, setPetName] = useState("")
  const [preview, setPreview] = useState<string>("")

const [loading, setLoading] = useState(false);
const [isGenerating, setIsGenerating] = useState(false);
const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null);
const [statusText, setStatusText] = useState<string>("");
const [pollFailures, setPollFailures] = useState<number>(0);
const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    if (file) {
      setSelectedFile(file)
      setPreview(URL.createObjectURL(file))
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".webp"],
    },
    maxFiles: 1,
  })

  const handleSubmit = () => {
    if (selectedFile && petName.trim()) {
      onUpload(selectedFile, petName.trim())
      // Reset form
      setSelectedFile(null)
      setPreview("")
      setPetName("")
    }
  }
const handleGenerate = async () => {
  const payload = {
    templateUuid: "6f7c4652458d4802969f8d089cf5b91f",
    generateParams: {
      prompt: "filmfotos, Asian portrait,A young woman wearing a green baseball cap",
      steps: 20,
      width: 768,
      height: 1024,
      imgCount: 1,
      seed: -1,
      restoreFaces: 0,
      additionalNetwork: [
        {
          modelId: "169505112cee468b95d5e4a5db0e5669",
          weight: 1.0,
        },
      ],
    },
  };

  try {
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    console.log("✅ API Response:", data);

    // Optional: show result on screen
    // setResult(data); or setImage(data.imageBase64);
  } catch (error) {
    console.error("❌ API call failed:", error);
  }
};

// Inside your component function:
// const intervalRef = useRef<number | undefined>(undefined);
const intervalRef = useRef<number | null>(null);

const startInterval = () => {
  if (intervalRef.current !== null) {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  intervalRef.current = window.setInterval(() => {
    console.log("Tick");
  }, 1000);
};

const stopInterval = () => {
  if (intervalRef.current !== null) {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }
};

const generateImage = async () => {
  if (!selectedFile || !petName.trim()) return;

  setIsGenerating(true);
  setGeneratedImageUrl(null);

  const formData = {
    templateUuid: "6f7c4652458d4802969f8d089cf5b91f",
    generateParams: {
      prompt: `A cat wearing sunglasses, cartoon style, sunny day.`,
      steps: 20,
      width: 768,
      height: 1024,
      imgCount: 1,
      seed: -1,
      restoreFaces: 1,
      versionUuid: "0f51e0850fdb4d3da25f1e3667e1c071",
      additionalNetwork: [
        {
          modelId: "0f51e0850fdb4d3da25f1e3667e1c071",
          weight: 1.0,
          baseType: "flux",
        },
      ],
    },
  };

  try {
    const res = await fetch("/api/generate-text2img", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    const generateUuid = data?.data?.generateUuid;

    if (!generateUuid) throw new Error("No generateUuid returned");

    // Clear any previous interval
    stopInterval();

    intervalRef.current = window.setInterval(async () => {
      try {
        const statusRes = await fetch("/api/generate-status", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ generateUuid }),
        });

        const statusData = await statusRes.json();
        console.log("🔄 Poll result:", statusData);

        const imageUrl = statusData?.data?.images?.[0]?.imageUrl;
        const generateStatus = statusData?.data?.generateStatus;

        if (imageUrl && imageUrl.length > 0 && generateStatus === 5) {
          setGeneratedImageUrl(imageUrl);
          setIsGenerating(false);
          stopInterval();
        } else if (generateStatus < 0) {
          console.error("Generation failed:", statusData.data.generateMsg);
          setIsGenerating(false);
          stopInterval();
        }
      } catch (err) {
        console.error("Error polling generation status:", err);
        setIsGenerating(false);
        stopInterval();
      }
    }, 15000);
  } catch (err) {
    console.error("❌ Generation failed:", err);
    setIsGenerating(false);
  }
};

// Cleanup on unmount
useEffect(() => {
  return () => {
    stopInterval();
  };
}, []);

const generateImageToImage = async () => {
  if (!selectedFile || !petName.trim()) return;

  setIsGenerating(true);
  setGeneratedImageUrl(null);

  const url = await uploadToUploadThing(selectedFile);
  if (!url) {
    setIsGenerating(false);
    return;
  }

  console.log("✅ Image URL used for generation:", url);
  // const testSafeImageUrl = "https://liblibai-online.liblib.cloud/img/081e9f07d9bd4c2ba090efde163518f9/7c1cc38e-522c-43fe-aca9-07d5420d743e.png";

  const formData = {
    templateUuid: "9c7d531dc75f476aa833b3d452b8f7ad",
    generateParams: {
      prompt: `The dog in the picture is taking a selfie with the wide-angle camera, jumping around on a hiking trail with greenery and filtered sunlight.`,
      steps: 40,
      seed: -1,
      imgCount: 1,
      restoreFaces: 1,
      sourceImage: url,
      resizeMode: 0,
      resizedWidth: 1024,
      resizedHeight: 1536,
      mode: 0,
      denoisingStrength: 0.75,
      versionUuid: "82b68395b8c24b53a908aa87d52c0740",
      baseType: "Anything-v6.8",
    },
  };

  try {
    const res = await fetch("/api/generate-img2img", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    const generateUuid = data?.data?.generateUuid;

    if (!generateUuid) throw new Error("No generateUuid returned");

    intervalRef.current = window.setInterval(async () => {
      try {
        const statusRes = await fetch("/api/generate-status", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ generateUuid }),
        });

        const statusData = await statusRes.json();
        console.log("🔄 Img2Img Poll result:", statusData);

        const imageUrl = statusData?.data?.images?.[0]?.imageUrl;
        const generateStatus = statusData?.data?.generateStatus;

        if (imageUrl && generateStatus === 5) {
          setGeneratedImageUrl(imageUrl);
          setIsGenerating(false);
          clearInterval(intervalRef.current!);
          intervalRef.current = null;
        } else if (generateStatus < 0) {
          console.error("Generation failed:", statusData.data.generateMsg);
          setIsGenerating(false);
          clearInterval(intervalRef.current!);
          intervalRef.current = null;
        }
      } catch (pollError) {
        console.error("Polling error:", pollError);
        setIsGenerating(false);
        clearInterval(intervalRef.current!);
        intervalRef.current = null;
      }
    }, 15000);
  } catch (err) {
    console.error("❌ Img2Img generation failed:", err);
    setIsGenerating(false);
  }
};


  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Upload Your Pet's Photo</h2>
        <p className="text-lg text-gray-600">Support JPG, PNG, WebP formats up to 10MB</p>
      </div>

      <Card className="border-2 border-gray-100 shadow-lg">
        <CardContent className="p-8 space-y-8">
          {/* File Upload Area */}
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-all duration-200 ${
              isDragActive
                ? "border-custom-pink bg-pink-50"
                : "border-gray-300 hover:border-custom-pink hover:bg-pink-50"
            }`}
          >
            <input {...getInputProps()} />

            {preview ? (
              <div className="space-y-4">
                <Image
                  src={preview || "/placeholder.svg"}
                  alt="Preview"
                  width={200}
                  height={200}
                  className="mx-auto rounded-xl object-cover shadow-md"
                />
                <p className="text-sm text-gray-600">Click or drag to replace image</p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="mx-auto w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center">
                  <Upload className="h-10 w-10" style={{ color: "#F5A4CC" }} />
                </div>
                <div>
                  <p className="text-xl font-semibold text-gray-900 mb-2">
                    {isDragActive ? "Drop your photo here" : "Click to upload or drag & drop"}
                  </p>
                  <p className="text-gray-500">JPG, PNG, WebP up to 10MB</p>
                </div>
              </div>
            )}
          </div>

          {/* Pet Name Input */}
          <div className="space-y-3">
            <Label htmlFor="petName" className="text-lg font-semibold text-gray-900">
              Pet's Name
            </Label>
            <Input
              id="petName"
              placeholder="Enter your pet's name"
              value={petName}
              onChange={(e) => setPetName(e.target.value)}
              className="h-12 text-lg border-2 border-gray-200 focus:border-custom-pink"
            />
          </div>

          {/* Price and Submit */}
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-3 text-xl">
              <DollarSign className="h-6 w-6 text-green-600" />
              <span className="font-bold text-green-600">$6.99</span>
              <span className="text-gray-600">per generation</span>
            </div>
           {/* <UploadButton<OurFileRouter, "imageUploader">
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              const url = res?.[0]?.url;
              console.log("✅ Uploaded image URL:", url);
              setUploadedImageUrl(url || null);
            }}
            onUploadError={(error: Error) => {
              alert(`Upload failed: ${error.message}`);
            }}
          /> */}
            <Button
              onClick={handleGenerate}
              disabled={!selectedFile || !petName.trim()}
              className="w-full h-14 text-lg text-white font-semibold border-0"
              style={{ background: "linear-gradient(to right, #F5A4CC, #DFF6B2)" }}
            >
              <Sparkles className="mr-3 h-5 w-5" />
              Generate AI Selfie
            </Button>
            {loading && (
            <div className="text-center text-gray-600 mt-4 text-lg">
              🌀 Generating your pet's AI portrait... please wait
            </div>
          )}
          {isGenerating && (
          <div className="text-center mt-4 text-sm text-gray-600">
            {statusText}
          </div>
        )}
          {isGenerating && (
          <div className="mt-6 text-center text-pink-600 font-semibold text-lg">
            ⏳ Generating your image... please wait.
          </div>
        )}
        {generatedImageUrl && (
            <div className="mt-8 text-center">
              <h3 className="text-xl font-semibold mb-4 text-gray-700">Generated Image</h3>
              <Image
                src={generatedImageUrl}
                alt="Generated"
                width={300}
                height={400}
                className="mx-auto rounded-lg shadow-lg"
              />
            </div>
          )}
          <Button
              onClick={generateImageToImage}
              disabled={!uploadedImageUrl || !petName.trim()}
              className="w-full h-14 text-lg text-white font-semibold border-0"
              style={{ background: "linear-gradient(to right, #FFB7B2, #FCE38A)" }}
            >
              <Sparkles className="mr-3 h-5 w-5" />
              New Button (Img2Img)
            </Button>
            <Button
              onClick={generateImageToImage}
              disabled={!selectedFile || !petName.trim()}
              className="w-full h-14 text-lg text-white font-semibold border-0"
              style={{ background: "linear-gradient(to right, #FFB7B2, #FCE38A)" }}
            >
              <Sparkles className="mr-3 h-5 w-5" />
              Generate from Image (Img2Img)
            </Button> 
            <Button
              onClick={generateImage}
              disabled={!selectedFile || !petName.trim()}
              className="w-full h-14 text-lg text-white font-semibold border-0"
              style={{ background: "linear-gradient(to right, #F5A4CC, #DFF6B2)" }}
            >
              <Sparkles className="mr-3 h-5 w-5" />
              Generate Text to Image
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={!selectedFile || !petName.trim()}
              className="w-full h-14 text-lg text-white font-semibold border-0"
              style={{ background: "linear-gradient(to right, #F5A4CC, #DFF6B2)" }}
            >
              <Sparkles className="mr-3 h-5 w-5" />
              Generate AI Selfie
            </Button>
          </div>

          <p className="text-sm text-gray-500 text-center">
            Generation takes approximately 1 hour. We'll notify you when it's ready!
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
