"use client"
import { motion } from "framer-motion"
import { Shield, Users, Award, Globe } from "lucide-react"

const foundingDate = new Date("2025-06-17")
const currentDate = new Date()
const timeDiff = currentDate.getTime() - foundingDate.getTime()
const daysInBusiness = Math.floor(timeDiff / (1000 * 60 * 60 * 24))

const stats = [
  { label: "Active Users", value: "50+", icon: Users },
  { label: "Families Served", value: "25+", icon: Globe },
  { label: "Uptime", value: "99.9%", icon: Shield },
  { label: "Days in Business", value: `${daysInBusiness} days`, icon: Award },
]

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

// Simple Card components since we don't have shadcn/ui
const Card = ({ children, className = "" }) => <div className={`rounded-lg ${className}`}>{children}</div>

const CardContent = ({ children, className = "" }) => <div className={className}>{children}</div>

const Badge = ({ children, className = "" }) => (
  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${className}`}>{children}</span>
)

// Simple Navbar component
const Navbar = ({ currentPath }) => (
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

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar currentPath="/about" />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden mt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20" />

        <motion.div
          className="container mx-auto text-center relative z-10"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.h1 className="text-5xl md:text-7xl font-bold mb-6" variants={fadeInUp}>
            <span className="bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              About
            </span>
            <br />
            <span className="text-white">MyDrugs.to</span>
          </motion.h1>

          <motion.p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto" variants={fadeInUp}>
            This is more than a marketplace — it's the infrastructure behind every all-nighter, every blackout, every
            good decision gone bad. Built for speed, masked in simplicity, and trusted by those who move in silence. No
            middlemen. No noise. Just straight product, straight to the point.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <Badge className="bg-yellow-600 text-black font-bold text-lg px-6 py-2">⚠️ </Badge>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {stats.map((stat, index) => (
              <motion.div key={index} className="text-center" variants={fadeInUp}>
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-pink-500 rounded-full flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 className="text-4xl font-bold text-center mb-12" variants={fadeInUp}>
              <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
                Our Story
              </span>
            </motion.h2>

            <motion.div className="space-y-8 text-gray-300 text-lg leading-relaxed" variants={fadeInUp}>
              <p>
                MyDrugs.to is what happens when code meets the corner. Born in the backroom, built with precision — this
                marketplace doesn't just sell, it runs. From first drop to final delivery, every click fuels the
                underground. This isn't a story. It's a system.
              </p>

              <p>
                Built like a darknet storefront, wired like a dev's dream. This site isn't just clean code and slick UI
                — it's a masterclass in web dominance, masked behind glitch art and cyberpunk attitude. UX that bites.
                Security that ghosts. Marketing that moves in silence.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Supplier Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 className="text-4xl font-bold text-center mb-12" variants={fadeInUp}>
              <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
                Our Supplier
              </span>
            </motion.h2>

            <motion.div className="mb-8" variants={fadeInUp}>
              <div className="w-64 h-64 mx-auto mb-8 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg shadow-cyan-400/20">
                <img
                  src="https://i.ibb.co/Q3qKT5YG/Whats-App-Image-2025-06-17-at-21-29-27-42b4d5cc.jpg"
                  alt="Our Supplier"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src =
                      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPjI1NngyNTY8L3RleHQ+PC9zdmc+"
                  }}
                />
              </div>
            </motion.div>

            <motion.div className="space-y-6 text-gray-300 text-lg leading-relaxed" variants={fadeInUp}>
              <p>
                Our primary supplier is known only as The Armchair General — a name whispered across closed forums and
                invite-only markets. Operating out of a secure, undisclosed lab in Noida, they've spent over a decade
                mastering precision synthesis, formulating compounds with clinical accuracy and street consistency. No
                slip-ups. No signatures. Just pure, engineered reliability.
              </p>

              <p>
                Educated in substandard tapri labs, trained by chaos. Our supplier holds a bachelors in Computer Science
                — not for the letters, but for the leverage. Their compounds aren't just pure; they're engineered at a
                molecular level to outperform, outlast, and outclass anything on the market. This isn't backyard
                chemistry. It's black-label synthesis.
              </p>

              <div className="bg-gray-800/50 border border-cyan-400 rounded-lg p-6 mt-8">
                <p className="text-cyan-400 font-semibold mb-2">Quality Guarantee</p>
                <p className="text-gray-300">
                  "Every product that leaves our laboratory meets the highest standards of purity and potency. We take
                  pride in our craft and stand behind every molecule we create." - The Chemist
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <motion.div
          className="container mx-auto text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Explore Our Marketplace?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Jack into the network and browse where firewalls fear to tread. This isn't online shopping — it's
            black-market futurism wrapped in code and chrome. Welcome to commerce reprogrammed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => (window.location.href = "/shop")}
            >
              Browse Products
            </motion.button>
            <motion.button
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => (window.location.href = "/")}
            >
              Back to Home
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-cyan-400">MyDrugs.to</h3>
              <p className="text-gray-400 text-sm">
                This isn't a marketplace. It's an ecosystem — coded for control, masked by design, and trusted by those
                who never ask twice.
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
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy;© 2025 MyDrugs.to – Stay low. Buy high.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
