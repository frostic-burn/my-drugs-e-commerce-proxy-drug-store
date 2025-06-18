"use client"
import Link from "next/link"
import Image from "next/image"
import { Zap, Shield, Star, Bitcoin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"

const featuredProducts = [
  {
    id: 1,
    name: "Neon Dreams",
    price: "0.025",
    currency: "BTC",
    image: "https://static01.nyt.com/images/2023/03/09/multimedia/09WELL-ADDERALL-DIFFERENT1-mklj/09WELL-ADDERALL-DIFFERENT1-mklj-mediumSquareAt3X.jpg?w=200&h=200&fit=crop",
    rating: 4.8,
    category: "Party Pack",
  },
  {
    id: 2,
    name: "Electric Vibes",
    price: "0.018",
    currency: "BTC",
    image: "https://mydr.com.au/wp-content/uploads/2019/01/AdobeStock_109861388-scaled-e1618969753558.jpg?w=200&h=200&fit=crop",
    rating: 4.9,
    category: "Accessories",
  },
  {
    id: 3,
    name: "SkullPop",
    price: "0.032",
    currency: "BTC",
    image: "https://static.dw.com/image/68793590_6.jpg?w=200&h=200&fit=crop",
    rating: 4.7,
    category: "Experience",
  },
  {
    id: 4,
    name: "Bass Drop",
    price: "0.015",
    currency: "BTC",
    image: "https://www.dea.gov/sites/default/files/styles/large/public/2021-09/30%20mg%20Oxy_counterfeit_front_watermark.jpg?w=200&h=200&fit=crop",
    rating: 4.6,
    category: "Lund",
  },
]

function MatrixRain() {
  return (
    <>
      <style jsx>{`
        .matrix-rain {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 1;
        }
        
        .matrix-column {
          position: absolute;
          top: -100%;
          width: 20px;
          height: 100vh;
          display: flex;
          flex-direction: column;
          animation: matrix-fall linear infinite;
        }
        
        @keyframes matrix-fall {
          0% {
            transform: translateY(-100vh);
          }
          100% {
            transform: translateY(100vh);
          }
        }
        
        .matrix-char {
          color: #00ff41;
          font-family: 'Courier New', monospace;
          font-size: 12px;
          line-height: 14px;
          opacity: 0.8;
        }
      `}</style>
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="matrix-rain">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="matrix-column"
              style={{
                left: `${i * 5}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            >
              {Array.from({ length: 20 }).map((_, j) => (
                <span key={j} className="matrix-char">
                  {String.fromCharCode(0x30a0 + Math.random() * 96)}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default function HomePage() {
  const handleImageError = (e) => {
    e.currentTarget.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPjIwMHgyMDA8L3RleHQ+PC9zdmc+"
  }

  return (
    <div
      className="min-h-screen bg-black text-white relative"
      style={{
        backgroundImage:
          "url('https://occ-0-8407-92.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABSFXbvEoEcVGRQA8GYU2R5bFv9BfC1Q-ZnEdiYdL7zJYfwl7jjAiwE4FfTnGfIPXBASOk12Y2dkcaPozXirYUTu_qAUr9dV6yOSH.jpg?r=59e')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background overlay for better readability */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Content wrapper */}
      <div className="relative z-10">
        {/* Header */}
        <Navbar currentPath="/" />

        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <MatrixRain />

          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                MyDrugs
              </span>
            </h1>

            <div className="text-xl md:text-2xl mb-8 text-gray-300 font-mono">
              <p>Your Dealer's Dealer. Online. 24/7.</p>
              <p>Party Fuel. Delivered Like Clockwork.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/shop">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-white font-bold py-4 px-8 text-lg"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Enter Store
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 px-4 bg-black/80 backdrop-blur-sm">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
                Featured Products
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map((product) => (
                <Card
                  key={product.id}
                  className="bg-gray-800/50 border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20 group backdrop-blur-sm"
                >
                  <CardContent className="p-6">
                    <div className="relative mb-4">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={200}
                        height={200}
                        className="w-full h-48 object-cover rounded-lg"
                        onError={handleImageError}
                      />
                      <Badge className="absolute top-2 right-2 bg-purple-600">{product.category}</Badge>
                    </div>

                    <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                      {product.name}
                    </h3>

                    <div className="flex items-center mb-3">
                      <div className="flex items-center">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-600"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-400 ml-2">({product.rating})</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-green-400 font-mono font-bold">
                        <Bitcoin className="w-4 h-4 mr-1" />
                        {product.price} {product.currency}
                      </div>
                      <Link href="/shop">
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600"
                        >
                          Add to Cart
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black/90 backdrop-blur-sm border-t border-gray-800 py-12 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-cyan-400">MyDrugs.to</h3>
                <p className="text-gray-400 text-sm">
                  Marketplace for the streets. No middlemen, no questions, just pure product – inspired by the grind, not a Netflix fantasy.
                </p>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-white">Quick Links</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link href="/privacy" className="hover:text-cyan-400 transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="hover:text-cyan-400 transition-colors">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-cyan-400 transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-white">Security</h4>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center">
                    <Shield className="w-4 h-4 mr-2" />
                    Tor Mirror
                  </li>
                  <li className="flex items-center">
                    <Bitcoin className="w-4 h-4 mr-2" />
                    Crypto Only
                  </li>
                  <li>PGP Encryption</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-white">Disclaimer</h4>
                <p className="text-gray-400 text-sm">
                  You came here for product. You stay here for consistency. Welcome to the new standard.
                </p>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>© 2025 MyDrugs.to – Stay low. Buy high.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
