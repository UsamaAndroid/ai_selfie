"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Chrome, Facebook } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useState } from "react"

interface LoginDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onLogin: (provider: "google" | "facebook" | "credentials", email?: string, password?: string) => void
}

export function LoginDialog({ open, onOpenChange, onLogin }: LoginDialogProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = () => {
    if (email.trim() && password.trim()) {
      onLogin("credentials", email, password)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">
            Sign In to Continue
          </DialogTitle>
          <DialogDescription className="text-center text-gray-600">
            Choose your preferred sign-in method to start creating adorable pet selfies
          </DialogDescription>
        </DialogHeader>
    
        <div className="space-y-4 py-4">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            onClick={() => onLogin("credentials", email, password)}
            className="w-full h-12 text-lg text-white border-0"
            style={{ background: "linear-gradient(to right, #F5A4CC, #DFF6B2)" }}
          >
            Sign in with Email
          </Button>
        </div>

        <div className="space-y-4 pt-2">
          {/* <Button
            onClick={() => onLogin("google")}
            variant="outline"
            className="w-full h-12 text-lg border-2 hover:bg-gray-50"
          >
            <Chrome className="mr-3 h-5 w-5" />
            Continue with Google
          </Button> */}

          {/* <Button
            onClick={() => onLogin("facebook")}
            className="w-full h-12 text-lg text-white border-0"
            style={{ background: "linear-gradient(to right, #FFB7B2, #FCE38A)" }}
          >
            <Facebook className="mr-3 h-5 w-5" />
            Continue with Facebook
          </Button> */}
        </div>

        <p className="text-xs text-gray-500 text-center">
          By signing in, you agree to our Terms of Service and Privacy Policy
        </p>
      </DialogContent>
    </Dialog>
  )
}
