"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ArrowRight } from "lucide-react"
import Image from "next/image"

export function SuccessCases() {
  const successCases = [
    {
      id: 1,
      before: "/placeholder.svg?height=120&width=120",
      after: "/placeholder.svg?height=120&width=120",
      petName: "Max",
      breed: "Golden Retriever",
      rating: 5,
      owner: "Sarah M.",
    },
    {
      id: 2,
      before: "/placeholder.svg?height=120&width=120",
      after: "/placeholder.svg?height=120&width=120",
      petName: "Bella",
      breed: "Persian Cat",
      rating: 5,
      owner: "Mike R.",
    },
    {
      id: 3,
      before: "/placeholder.svg?height=120&width=120",
      after: "/placeholder.svg?height=120&width=120",
      petName: "Charlie",
      breed: "French Bulldog",
      rating: 5,
      owner: "Emma L.",
    },
    {
      id: 4,
      before: "/placeholder.svg?height=120&width=120",
      after: "/placeholder.svg?height=120&width=120",
      petName: "Luna",
      breed: "Siberian Husky",
      rating: 5,
      owner: "David K.",
    },
  ]

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Amazing Transformations</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          See how our AI transforms ordinary pet photos into extraordinary selfies that capture their unique personality
        </p>
      </div>

      <Card className="max-w-6xl mx-auto border-2 border-gray-100 shadow-xl">
        <CardContent className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successCases.map((case_) => (
              <div key={case_.id} className="text-center space-y-4">
                {/* Before/After Images */}
                <div className="relative">
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <div className="text-center">
                      <p className="text-xs font-medium text-gray-500 mb-2">BEFORE</p>
                      <Image
                        src={case_.before || "/placeholder.svg"}
                        alt={`${case_.petName} before`}
                        width={120}
                        height={120}
                        className="rounded-lg object-cover shadow-md"
                      />
                    </div>

                    <ArrowRight className="h-6 w-6 text-gray-400 flex-shrink-0" />

                    <div className="text-center">
                      <p className="text-xs font-medium text-gray-500 mb-2">AFTER</p>
                      <div className="relative">
                        <Image
                          src={case_.after || "/placeholder.svg"}
                          alt={`${case_.petName} after`}
                          width={120}
                          height={120}
                          className="rounded-lg object-cover shadow-md"
                        />
                        <Badge
                          className="absolute -top-2 -right-2 text-white text-xs px-2 py-1 border-0"
                          style={{ background: "linear-gradient(to right, #F5A4CC, #DFF6B2)" }}
                        >
                          AI
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pet Info */}
                <div className="space-y-2">
                  <h3 className="font-bold text-lg text-gray-900">{case_.petName}</h3>
                  <p className="text-sm text-gray-600">{case_.breed}</p>
                  <p className="text-xs text-gray-500">by {case_.owner}</p>

                  {/* Rating */}
                  <div className="flex justify-center space-x-1">
                    {[...Array(case_.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2" style={{ color: "#F5A4CC" }}>
                  10,000+
                </div>
                <div className="text-gray-600">Happy Pet Parents</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2" style={{ color: "#DFF6B2" }}>
                  50,000+
                </div>
                <div className="text-gray-600">Selfies Generated</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500 mb-2">4.9★</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
