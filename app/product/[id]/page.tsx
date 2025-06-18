"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, Star, Bitcoin, Shield, Truck, Plus, Minus, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import Navbar from "@/components/navbar"

const product = {
  id: 1,
  name: "Neon Dreams",
  price: "0.025",
  currency: "BTC",
  images: [
    "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
  ],
  rating: 4.8,
  reviewCount: 127,
  category: "Party Pack",
  description:
    "Experience the ultimate   party enhancement with Neon Dreams. This premium kit includes everything you need for an unforgettable night of dancing and good vibes. Completely   and for entertainment purposes only.",
  features: [
    "Premium   ingredients",
    "Long-lasting effects ( )",
    "Tested for purity (in our imagination)",
    "Discreet packaging",
    "24/7 customer support",
  ],
  inStock: true,
  stockCount: 42,
}

const reviews = [
  {
    id: 1,
    username: "ghost69",
    rating: 5,
    comment: "🔥🔥🔥 Absolutely incredible   experience! Will definitely order again.",
    date: "2024-01-15",
  },
  {
    id: 2,
    username: "raverX",
    rating: 5,
    comment: "Best   party supplies I've ever tried. The glow effects were amazing!",
    date: "2024-01-12",
  },
  {
    id: 3,
    username: "basshead",
    rating: 4,
    comment: "Good quality   product. Shipping was super discreet as promised.",
    date: "2024-01-10",
  },
]

const relatedProducts = [
  {
    id: 2,
    name: "Electric Vibes",
    price: "0.018",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150&h=150&fit=crop",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Cosmic Journey",
    price: "0.032",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=150&h=150&fit=crop",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Glow Kit Pro",
    price: "0.015",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=150&h=150&fit=crop",
    rating: 4.6,
  },
]

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <Navbar currentPath="/product" />

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-400">
          <Link href="/" className="hover:text-cyan-400">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/shop" className="hover:text-cyan-400">
            Shop
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <div>
            <div className="mb-4">
              <Image
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                width={500}
                height={500}
                className="w-full h-96 object-cover rounded-lg border border-gray-700"
                onError={(e) => {
                  e.currentTarget.src =
                    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyMCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPjUwMHg1MDA8L3RleHQ+PC9zdmc+"
                }}
              />
            </div>
            <div className="flex gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`border-2 rounded-lg overflow-hidden ${
                    selectedImage === index ? "border-cyan-400" : "border-gray-700"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    width={80}
                    height={80}
                    className="w-20 h-20 object-cover"
                    onError={(e) => {
                      e.currentTarget.src =
                        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyMCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPjUwMHg1MDA8L3RleHQ+PC9zdmc+"
                    }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <Badge className="mb-4 bg-purple-600">{product.category}</Badge>

            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
              {product.name}
            </h1>

            <div className="flex items-center mb-6">
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-600"
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-400 ml-2">
                ({product.rating}) • {product.reviewCount} reviews
              </span>
            </div>

            <div className="text-3xl font-bold text-green-400 font-mono mb-6 flex items-center">
              <Bitcoin className="w-6 h-6 mr-2" />
              {product.price} {product.currency}
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">{product.description}</p>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-cyan-400">Features:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border border-gray-600 rounded-lg">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="rounded-r-none"
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="px-4 py-2 border-x border-gray-600">{quantity}</span>
                <Button variant="ghost" size="sm" onClick={() => setQuantity(quantity + 1)} className="rounded-l-none">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>

              <div className="text-sm text-gray-400">
                {product.inStock ? (
                  <span className="text-green-400">✓ In Stock ({product.stockCount} available)</span>
                ) : (
                  <span className="text-red-400">✗ Out of Stock</span>
                )}
              </div>
            </div>

            <div className="flex gap-4 mb-8">
              <Button
                size="lg"
                className="flex-1 bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-white font-bold"
                disabled={!product.inStock}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`border-pink-500 ${
                  isWishlisted ? "bg-pink-500 text-white" : "text-pink-400 hover:bg-pink-500 hover:text-white"
                }`}
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? "fill-current" : ""}`} />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center text-gray-300">
                <Shield className="w-4 h-4 mr-2 text-green-400" />
                Secure & Anonymous
              </div>
              <div className="flex items-center text-gray-300">
                <Truck className="w-4 h-4 mr-2 text-blue-400" />
                Discreet Shipping
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="reviews" className="mb-12">
          <TabsList className="grid w-full grid-cols-3 bg-gray-800">
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="shipping">Shipping Info</TabsTrigger>
            <TabsTrigger value="safety">Safety ( )</TabsTrigger>
          </TabsList>

          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-6">
              {reviews.map((review) => (
                <Card key={review.id} className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarFallback className="bg-gradient-to-r from-cyan-500 to-pink-500">
                          {review.username.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-semibold text-cyan-400">{review.username}</span>
                          <div className="flex items-center">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < review.rating ? "text-yellow-400 fill-current" : "text-gray-600"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-400">{review.date}</span>
                        </div>
                        <p className="text-gray-300">{review.comment}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="shipping" className="mt-6">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">Shipping Information</h3>
                <div className="space-y-4 text-gray-300">
                  <p>• All packages are shipped in discreet, unmarked packaging</p>
                  <p>• Standard delivery: 3-5 business days ( )</p>
                  <p>• Express delivery: 1-2 business days ( )</p>
                  <p>• All orders require signature confirmation</p>
                  <p>• Tracking information provided via encrypted email</p>
                  <p>• We use stealth shipping methods for maximum privacy</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="safety" className="mt-6">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">Safety Information ( )</h3>
                <div className="space-y-4 text-gray-300">
                  <p className="text-yellow-400 font-semibold">
                    ⚠️ DISCLAIMER: This is entirely content for entertainment purposes.
                  </p>
                  <p>• Always test substances with a test kit</p>
                  <p>• Start with small doses</p>
                  <p>• Never mix substances</p>
                  <p>• Stay hydrated during experiences</p>
                  <p>• Have a trip sitter present</p>
                  <p>• Know your limits</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Related Products */}
        <section>
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
            Related Products
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Card
                key={relatedProduct.id}
                className="bg-gray-800/50 border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6">
                  <Image
                    src={relatedProduct.image || "/placeholder.svg"}
                    alt={relatedProduct.name}
                    width={150}
                    height={150}
                    className="w-full h-32 object-cover rounded-lg mb-4"
                    onError={(e) => {
                      e.currentTarget.src =
                        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyMCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPjUwMHg1MDA8L3RleHQ+PC9zdmc+"
                    }}
                  />
                  <h3 className="font-semibold mb-2">{relatedProduct.name}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-green-400 font-mono text-sm">
                      <Bitcoin className="w-3 h-3 mr-1" />
                      {relatedProduct.price} BTC
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-400 ml-1">{relatedProduct.rating}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
