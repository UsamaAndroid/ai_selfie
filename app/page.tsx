"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Star, Clock, Sparkles, ArrowRight } from "lucide-react"
import Image from "next/image"
import { LoginDialog } from "@/components/login-dialog"
import { UploadArea } from "@/components/upload-area"
import { TaskList } from "@/components/task-list"
import { ShareDialog } from "@/components/share-dialog"
import { SuccessCases } from "@/components/success-cases"

interface Task {
  id: string
  petName: string
  originalImage: string
  generatedImage?: string
  status: "processing" | "completed" | "failed"
  progress: number
  createdAt: Date
}

interface User {
  id: string
  name: string
  email: string
  avatar: string
}

export default function PetSelfieGenerator() {
  const [user, setUser] = useState<User | null>(null)
  const [tasks, setTasks] = useState<Task[]>([])
  const [showLoginDialog, setShowLoginDialog] = useState(false)
  const [showShareDialog, setShowShareDialog] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string>("")

  // Mock user login state
  useEffect(() => {
    // Check actual login state here
    const mockUser = {
      id: "1",
      name: "Pet Lover",
      email: "user@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    }
    // setUser(mockUser)
  }, [])

  // Mock task data
  useEffect(() => {
    const mockTasks: Task[] = [
      {
        id: "1",
        petName: "Buddy",
        originalImage: "/placeholder.svg?height=200&width=200",
        generatedImage: "/placeholder.svg?height=200&width=200",
        status: "completed",
        progress: 100,
        createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
      },
      {
        id: "2",
        petName: "Luna",
        originalImage: "/placeholder.svg?height=200&width=200",
        status: "processing",
        progress: 65,
        createdAt: new Date(Date.now() - 30 * 60 * 1000),
      },
    ]
    setTasks(mockTasks)
  }, [])

  const handleLogin = async (
  provider: "google" | "facebook" | "credentials",
  email?: string,
  password?: string
) => {
  if (provider === "credentials") {
    if (!email || !password) {
      alert("Email and password are required");
      return;
    }
    // Call your login API with email/password
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (res.ok) {
      localStorage.setItem("token", data.token);
      setUser(data.user);
      setShowLoginDialog(false);
    } else {
      alert(data.error);
    }
  } else {
    // OAuth login flow here, e.g. redirect or popup
    console.log(`Login with ${provider} not implemented yet`);
  }
};

  const handleUpload = async (file: File, petName: string) => {
    if (!user) {
      setShowLoginDialog(true)
      return
    }

    // Create new task
    const newTask: Task = {
      id: Date.now().toString(),
      petName,
      originalImage: URL.createObjectURL(file),
      status: "processing",
      progress: 0,
      createdAt: new Date(),
    }

    setTasks((prev) => [newTask, ...prev])

    // Simulate processing progress
    const interval = setInterval(() => {
      setTasks((prev) =>
        prev.map((task) => {
          if (task.id === newTask.id && task.status === "processing") {
            const newProgress = Math.min(task.progress + Math.random() * 15, 100)
            if (newProgress >= 100) {
              clearInterval(interval)
              return {
                ...task,
                status: "completed",
                progress: 100,
                generatedImage: "/placeholder.svg?height=200&width=200",
              }
            }
            return { ...task, progress: newProgress }
          }
          return task
        }),
      )
    }, 2000)

    console.log("Uploading file:", file, "Pet name:", petName)
  }

  const handleShare = (imageUrl: string) => {
    setSelectedImage(imageUrl)
    setShowShareDialog(true)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span
              className="text-2xl font-bold bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(to right, #F5A4CC, #DFF6B2)" }}
            >
              AI Pet Selfie
            </span>
          </div>

          {user ? (
            <div className="flex items-center space-x-4">
              <Image
                src={user.avatar || "/placeholder.svg"}
                alt={user.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="font-medium text-gray-900 hidden sm:block">{user.name}</span>
            </div>
          ) : (
            <Button
              onClick={() => setShowLoginDialog(true)}
              className="text-white border-0"
              style={{ background: "linear-gradient(to right, #F5A4CC, #DFF6B2)" }}
            >
              Sign In
            </Button>
          )}
        </div>
      </header>

      {/* Hero Section with Background */}
      <section className="relative py-20 lg:py-32 overflow-hidden min-h-[80vh] flex items-center">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1200"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            {/* Content without background container */}
            <div className="space-y-8">
              <div className="flex items-center justify-center mb-6">
                <Sparkles className="h-8 w-8 mr-3" style={{ color: "#F5A4CC" }} />
              </div>

              <p className="text-base md:text-lg text-gray-800 max-w-2xl mx-auto leading-relaxed font-medium">
                Upload your pet's photo and get an adorable AI-generated selfie in just 1 hour. Transform your furry
                friend into a social media star!
              </p>

              <div className="flex flex-wrap items-center justify-center gap-6 text-gray-700">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" style={{ color: "#F5A4CC" }} />
                  <span className="text-sm font-medium">1 Hour Generation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4" style={{ color: "#DFF6B2" }} />
                  <span className="text-sm font-medium">AI Powered</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="h-4 w-4 text-red-500" />
                  <span className="text-sm font-medium">Adorable Results</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Badge variant="secondary" className="text-base px-5 py-2 bg-gray-900 text-white hover:bg-gray-800">
                  Only $6.99 per generation
                </Badge>
                <Button
                  size="lg"
                  className="text-white px-6 py-3 text-base border-0"
                  style={{ background: "linear-gradient(to right, #F5A4CC, #DFF6B2)" }}
                  onClick={() => document.getElementById("upload-section")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-20">
        <Tabs defaultValue="upload" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-12 max-w-md mx-auto">
            <TabsTrigger value="upload" className="text-lg py-3">
              Upload Photo
            </TabsTrigger>
            <TabsTrigger value="tasks" className="text-lg py-3">
              My Tasks
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upload" className="space-y-20">
            {/* Upload Area */}
            <div id="upload-section">
              <UploadArea onUpload={handleUpload} />
            </div>

            {/* Success Cases */}
            <SuccessCases />
          </TabsContent>

          <TabsContent value="tasks">
            <TaskList
              tasks={tasks}
              onShare={handleShare}
              user={user}
              onLoginRequired={() => setShowLoginDialog(true)}
            />
          </TabsContent>
        </Tabs>
      </div>

      {/* Login Dialog */}
      <LoginDialog open={showLoginDialog} onOpenChange={setShowLoginDialog} onLogin={handleLogin} />

      {/* Share Dialog */}
      <ShareDialog open={showShareDialog} onOpenChange={setShowShareDialog} imageUrl={selectedImage} />
    </div>
  )
}
