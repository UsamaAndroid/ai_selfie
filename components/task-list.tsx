"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Download, Share2, Clock, CheckCircle, AlertCircle, Camera } from "lucide-react"
import Image from "next/image"

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

interface TaskListProps {
  tasks: Task[]
  onShare: (imageUrl: string) => void
  user: User | null
  onLoginRequired: () => void
}

export function TaskList({ tasks, onShare, user, onLoginRequired }: TaskListProps) {
  if (!user) {
    return (
      <div className="text-center py-20">
        <div className="max-w-md mx-auto">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Camera className="h-10 w-10 text-gray-400" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Sign In Required</h3>
          <p className="text-gray-600 mb-8">Sign in to view your task list and generation progress</p>
          <Button
            onClick={onLoginRequired}
            className="text-white px-8 py-3 border-0"
            style={{ background: "linear-gradient(to right, #F5A4CC, #DFF6B2)" }}
          >
            Sign In Now
          </Button>
        </div>
      </div>
    )
  }

  if (tasks.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="max-w-md mx-auto">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Clock className="h-10 w-10 text-gray-400" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">No Tasks Yet</h3>
          <p className="text-gray-600">Upload your pet's photo to start generating adorable AI selfies!</p>
        </div>
      </div>
    )
  }

  const handleDownload = (imageUrl: string, petName: string) => {
    const link = document.createElement("a")
    link.href = imageUrl
    link.download = `${petName}-selfie.jpg`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const formatTimeAgo = (date: Date) => {
    const now = new Date()
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60))

    if (diffInMinutes < 60) {
      return `${diffInMinutes} minutes ago`
    } else if (diffInMinutes < 1440) {
      return `${Math.floor(diffInMinutes / 60)} hours ago`
    } else {
      return `${Math.floor(diffInMinutes / 1440)} days ago`
    }
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Tasks</h2>
        <p className="text-lg text-gray-600">Track your pet AI selfie generation progress</p>
      </div>

      <div className="grid gap-6 max-w-4xl mx-auto">
        {tasks.map((task) => (
          <Card key={task.id} className="border-2 border-gray-100 shadow-lg">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center space-x-3 text-xl">
                    <span>{task.petName}'s Selfie</span>
                    {task.status === "completed" && <CheckCircle className="h-5 w-5 text-green-500" />}
                    {task.status === "processing" && <Clock className="h-5 w-5" style={{ color: "#F5A4CC" }} />}
                    {task.status === "failed" && <AlertCircle className="h-5 w-5 text-red-500" />}
                  </CardTitle>
                  <CardDescription className="text-gray-500">{formatTimeAgo(task.createdAt)}</CardDescription>
                </div>
                <Badge
                  variant={
                    task.status === "completed" ? "default" : task.status === "processing" ? "secondary" : "destructive"
                  }
                  className="text-sm px-3 py-1"
                >
                  {task.status === "completed" && "Completed"}
                  {task.status === "processing" && "Processing"}
                  {task.status === "failed" && "Failed"}
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Original Image */}
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-700 mb-3">Original Photo</p>
                  <Image
                    src={task.originalImage || "/placeholder.svg"}
                    alt={`${task.petName} original`}
                    width={200}
                    height={200}
                    className="rounded-xl mx-auto object-cover shadow-md"
                  />
                </div>

                {/* Generated Image or Progress */}
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-700 mb-3">AI Selfie</p>
                  {task.status === "completed" && task.generatedImage ? (
                    <Image
                      src={task.generatedImage || "/placeholder.svg"}
                      alt={`${task.petName} selfie`}
                      width={200}
                      height={200}
                      className="rounded-xl mx-auto object-cover shadow-md"
                    />
                  ) : task.status === "processing" ? (
                    <div className="w-[200px] h-[200px] mx-auto bg-gray-50 rounded-xl flex flex-col items-center justify-center border-2 border-gray-200">
                      <Clock className="h-8 w-8 text-gray-400 mb-3" />
                      <p className="text-sm font-medium text-gray-600 mb-3">Generating...</p>
                      <Progress value={task.progress} className="w-32 mb-2" />
                      <p className="text-xs text-gray-500">{Math.round(task.progress)}% complete</p>
                    </div>
                  ) : (
                    <div className="w-[200px] h-[200px] mx-auto bg-red-50 rounded-xl flex flex-col items-center justify-center border-2 border-red-200">
                      <AlertCircle className="h-8 w-8 text-red-400 mb-3" />
                      <p className="text-sm font-medium text-red-600">Generation Failed</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              {task.status === "completed" && task.generatedImage && (
                <div className="flex justify-center space-x-4">
                  <Button
                    onClick={() => handleDownload(task.generatedImage!, task.petName)}
                    variant="outline"
                    className="px-6 py-2"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                  <Button
                    onClick={() => onShare(task.generatedImage!)}
                    className="text-white px-6 py-2 border-0"
                    style={{ background: "linear-gradient(to right, #F5A4CC, #DFF6B2)" }}
                  >
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                </div>
              )}

              {task.status === "processing" && (
                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Estimated time remaining: {Math.round(((100 - task.progress) / 100) * 60)} minutes
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
