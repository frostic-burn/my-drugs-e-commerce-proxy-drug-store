"use client"

import { useState } from "react"
import { Filter, Grid, List, Star, Bitcoin, Search } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Cannabis Core (GANJA)",
    price: "0.025",
    currency: "BTC",
    image: "https://media.post.rvohealth.io/wp-content/uploads/sites/3/2020/03/iStock-1126458271_thumb.jpg",
    rating: 4.8,
    category: "Party Pack",
    description: "Premium party enhancement kit",
  },
  {
    id: 2,
    name: "Electric Vibes (MDMA 30)",
    price: "0.018",
    currency: "BTC",
    image: "https://mydr.com.au/wp-content/uploads/2019/01/AdobeStock_109861388-scaled-e1618969753558.jpg",
    rating: 4.9,
    category: "Ecstasy",
    description: "Glow Sticks up your arse",
  },
  {
    id: 3,
    name: "SkullPop (Xanax)",
    price: "0.032",
    currency: "BTC",
    image: "https://static.dw.com/image/68793590_6.jpg",
    rating: 4.7,
    category: "Experience",
    description: "Mind-bending experience",
  },
  {
    id: 4,
    name: "Adderal XXL (Adderal)",
    price: "0.015",
    currency: "BTC",
    image:
      "https://static01.nyt.com/images/2023/03/09/multimedia/09WELL-ADDERALL-DIFFERENT1-mklj/09WELL-ADDERALL-DIFFERENT1-mklj-mediumSquareAt3X.jpg",
    rating: 4.6,
    category: "Adderall",
    description: "Professional glow kit for events",
  },
  {
    id: 5,
    name: "Bass Drop (Oxy 80)",
    price: "0.028",
    currency: "BTC",
    image:
      "https://www.dea.gov/sites/default/files/styles/large/public/2021-09/30%20mg%20Oxy_counterfeit_front_watermark.jpg?h=d5d72782&itok=sy_YPGtI",
    rating: 4.5,
    category: "Party Pack",
    description: "For the ultimate bass experience",
  },
  {
    id: 6,
    name: "The Punisher Pixel Pills (XTC)",
    price: "0.022",
    currency: "BTC",
    image: "https://www.health.nsw.gov.au/aod/public-drug-alerts/PublishingImages/high-dose-mdma-purple-punisher.jpg",
    rating: 4.8,
    category: "Experience",
    description: "32-bit inspired supplements",
  },
]

const categories = ["All", "Party Pack", "Accessories", "Experience", "Ecstasy", "Adderall"]

// Custom UI Components
function Card({ children, className = "" }) {
  return <div className={`rounded-lg ${className}`}>{children}</div>
}

function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>
}

function Badge({ children, className = "" }) {
  return (
    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${className}`}>
      {children}
    </span>
  )
}

function Button({ children, className = "", variant = "default", size = "default", onClick, ...props }) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"

  const variants = {
    default: "bg-cyan-600 text-white hover:bg-cyan-700",
    outline: "border border-gray-600 bg-transparent hover:bg-gray-100 hover:text-gray-900",
    ghost: "hover:bg-gray-100 hover:text-gray-900",
  }

  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
  }

  return (
    <button className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

function Input({ className = "", ...props }) {
  return (
    <input
      className={`flex h-10 w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  )
}

function Select({ children, value, onValueChange }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        className="flex h-10 w-full items-center justify-between rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
      >
        {children}
      </select>
    </div>
  )
}

function SelectItem({ children, value }) {
  return (
    <option value={value} className="bg-gray-800 text-white">
      {children}
    </option>
  )
}

function Checkbox({ id, checked, onCheckedChange }) {
  return (
    <input
      type="checkbox"
      id={id}
      checked={checked}
      onChange={(e) => onCheckedChange(e.target.checked)}
      className="h-4 w-4 rounded border-gray-600 bg-gray-700 text-cyan-600 focus:ring-cyan-500 focus:ring-2"
    />
  )
}

function Slider({ value, onValueChange, min, max, step }) {
  return (
    <div className="relative">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value[1]}
        onChange={(e) => onValueChange([value[0], Number.parseInt(e.target.value)])}
        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
        style={{
          background: `linear-gradient(to right, #06b6d4 0%, #06b6d4 ${((value[1] - min) / (max - min)) * 100}%, #374151 ${((value[1] - min) / (max - min)) * 100}%, #374151 100%)`,
        }}
      />
    </div>
  )
}

// Simple Navbar component
function Navbar({ currentPath }) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">MyDrugs.to</span>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-6">
            <a
              href="/"
              className={`hover:text-cyan-400 transition-colors ${currentPath === "/" ? "text-cyan-400" : "text-gray-300"}`}
            >
              Home
            </a>
            <a
              href="/about"
              className={`hover:text-cyan-400 transition-colors ${currentPath === "/about" ? "text-cyan-400" : "text-gray-300"}`}
            >
              About
            </a>
            <a
              href="/shop"
              className={`hover:text-cyan-400 transition-colors ${currentPath === "/shop" ? "text-cyan-400" : "text-gray-300"}`}
            >
              Shop
            </a>
            <a
              href="/contact"
              className={`hover:text-cyan-400 transition-colors ${currentPath === "/contact" ? "text-cyan-400" : "text-gray-300"}`}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default function ShopPage() {
  const [selectedCategories, setSelectedCategories] = useState([])
  const [priceRange, setPriceRange] = useState([0, 50])
  const [sortBy, setSortBy] = useState("popular")
  const [viewMode, setViewMode] = useState("grid")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category)
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    const priceInMBTC = Number.parseFloat(product.price) * 1000
    const matchesPrice = priceInMBTC >= priceRange[0] && priceInMBTC <= priceRange[1]

    return matchesCategory && matchesSearch && matchesPrice
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return Number.parseFloat(a.price) - Number.parseFloat(b.price)
      case "price-high":
        return Number.parseFloat(b.price) - Number.parseFloat(a.price)
      case "rating":
        return b.rating - a.rating
      case "newest":
        return b.id - a.id
      default:
        return b.rating - a.rating
    }
  })

  const handleCategoryChange = (category, checked) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category])
    } else {
      setSelectedCategories(selectedCategories.filter((c) => c !== category))
    }
  }

  const handleProductClick = (productId) => {
    console.log(`Navigate to product ${productId}`)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar currentPath="/shop" />

      <div className="container mx-auto px-4 py-8 mt-16">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <Card className="bg-gray-800/50 border border-gray-700 sticky top-24">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 text-cyan-400 flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Filters
                </h3>

                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Search</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium mb-3">Categories</label>
                  <div className="space-y-2">
                    {categories.slice(1).map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox
                          id={category}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={(checked) => handleCategoryChange(category, checked)}
                        />
                        <label htmlFor={category} className="text-sm text-gray-300 cursor-pointer">
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium mb-3">
                    Price Range (mBTC): {priceRange[0]} - {priceRange[1]}
                  </label>
                  <Slider value={priceRange} onValueChange={setPriceRange} max={50} min={0} step={1} />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:w-3/4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
                Shop ({sortedProducts.length} items)
              </h1>

              <div className="flex items-center gap-4">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </Select>

                <div className="flex border border-gray-600 rounded-md">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="rounded-r-none"
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="rounded-l-none"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div
              className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"}`}
            >
              {sortedProducts.map((product) => (
                <Card
                  key={product.id}
                  className="bg-gray-800/50 border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20 group cursor-pointer"
                  onClick={() => handleProductClick(product.id)}
                >
                  <CardContent className={`p-6 ${viewMode === "list" ? "flex gap-6" : ""}`}>
                    <div className={`relative ${viewMode === "list" ? "w-48 flex-shrink-0" : "mb-4"}`}>
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className={`object-cover rounded-lg ${viewMode === "list" ? "w-full h-32" : "w-full h-48"}`}
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder.svg?height=200&width=200"
                        }}
                      />
                      <Badge className="absolute top-2 right-2 bg-purple-600 text-white">{product.category}</Badge>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                        {product.name}
                      </h3>

                      <p className="text-gray-400 text-sm mb-3">{product.description}</p>

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
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
                            onClick={(e) => {
                              e.stopPropagation()
                              handleProductClick(product.id)
                            }}
                          >
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {sortedProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No products found matching your criteria.</p>
                <p className="text-gray-500 text-sm mt-2">Try adjusting your filters or search terms.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <footer className="bg-black border-t border-gray-800 py-12 px-4 mt-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-cyan-400">MyDrugs.to</h3>
              <p className="text-gray-400 text-sm">
                This isn't a marketplace. It's an ecosystem — coded for control, masked by design, and trusted by those
                who never ask twice.
              </p>
              <p className="text-gray-500 text-xs mt-2">
                * Tribute to "How to Sell Drugs Online (Fast)" Netflix series
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="/privacy" className="hover:text-cyan-400 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:text-cyan-400 transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-cyan-400 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Disclaimer</h4>
              <p className="text-gray-400 text-sm">
                This is a fictional tribute website inspired by the Netflix series "How to Sell Drugs Online (Fast)".
                All content is purely fictional and for entertainment purposes only.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 MyDrugs.to - Drugs Bring World Peace</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
