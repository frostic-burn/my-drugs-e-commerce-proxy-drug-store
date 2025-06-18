"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronDown, Shield, Bitcoin, Truck, HelpCircle, AlertTriangle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { useState } from "react"
import Navbar from "@/components/navbar"

const faqCategories = [
  {
    title: "General Questions",
    icon: HelpCircle,
    color: "text-cyan-400",
    questions: [
      {
        question: "What is MyDrugs.to?",
        answer:
          "MyDrugs.to is a   parody website inspired by the Netflix series 'How to Sell Drugs Online (Fast)'. It's created purely for entertainment and educational purposes to showcase modern web development techniques with a cyberpunk aesthetic.",
      },
      {
        question: "Is this website real?",
        answer:
          "No, this is entirely  . No real products are sold, no real transactions occur, and no illegal activities are supported. This is a parody website created for entertainment purposes only.",
      },
      {
        question: "Can I actually buy anything here?",
        answer:
          "No, all products are  . The 'Add to Cart' buttons and checkout process are non-functional. This is purely a demonstration of e-commerce UI/UX design.",
      },
      {
        question: "Who created this website?",
        answer:
          "This website was created as a fan project inspired by the Netflix series. It demonstrates modern web development technologies including React, Next.js, and Tailwind CSS.",
      },
    ],
  },
  {
    title: "  Ordering",
    icon: Truck,
    color: "text-pink-400",
    questions: [
      {
        question: "How does   ordering work?",
        answer:
          "In our   world, users would browse products, add them to cart, and proceed through a checkout process. All payment methods, shipping, and delivery are imaginary concepts for the parody.",
      },
      {
        question: "What   payment methods do you accept?",
        answer:
          "In our   marketplace, we would accept Bitcoin (BTC), Monero (XMR), and other cryptocurrencies. All pricing is displayed in   cryptocurrency amounts.",
      },
      {
        question: "How long does   shipping take?",
        answer:
          "Our   shipping would take 3-5 business days for standard delivery, or 1-2 days for express. All packages would be discreetly packaged for privacy.",
      },
      {
        question: "Do you ship internationally ( ly)?",
        answer:
          "Yes, our   marketplace would serve customers worldwide with discreet international shipping options.",
      },
    ],
  },
  {
    title: "Security & Privacy",
    icon: Shield,
    color: "text-green-400",
    questions: [
      {
        question: "How secure is the   platform?",
        answer:
          "In our   world, we would use military-grade encryption, Tor integration, PGP communication, and anonymous payment methods to ensure maximum privacy and security.",
      },
      {
        question: "Do you keep   user data?",
        answer:
          "Our   privacy policy would ensure minimal data collection, automatic data deletion, and complete anonymity for all users.",
      },
      {
        question: "Is there a Tor mirror?",
        answer:
          "In our   setup, yes - we would provide a .onion address for users who prefer to access the site through Tor for maximum anonymity.",
      },
      {
        question: "How do you handle   law enforcement?",
        answer:
          "This is purely  , but in our imaginary world, we would use advanced security measures, offshore hosting, and legal compliance strategies.",
      },
    ],
  },
  {
    title: "Technical Questions",
    icon: Bitcoin,
    color: "text-purple-400",
    questions: [
      {
        question: "What technologies power this site?",
        answer:
          "This website is built with Next.js 14, React, TypeScript, Tailwind CSS, Framer Motion for animations, and various modern web development tools.",
      },
      {
        question: "Is the source code available?",
        answer:
          "This is a demonstration project. The code showcases modern React patterns, responsive design, and cyberpunk UI/UX principles.",
      },
      {
        question: "How was the design created?",
        answer:
          "The design combines cyberpunk aesthetics with modern e-commerce UX patterns, featuring neon colors, glitch effects, and dark themes inspired by the Netflix series.",
      },
      {
        question: "Can I use this code for learning?",
        answer:
          "Yes! This project demonstrates many modern web development concepts including component architecture, animations, responsive design, and TypeScript usage.",
      },
    ],
  },
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

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <motion.div
          className="flex items-center justify-between p-4 bg-gray-800/50 border border-gray-700 rounded-lg cursor-pointer hover:border-cyan-400 transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <h3 className="text-lg font-medium text-white">{question}</h3>
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </motion.div>
        </motion.div>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <motion.div
          className="p-4 bg-gray-900/50 border-x border-b border-gray-700 rounded-b-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <p className="text-gray-300 leading-relaxed">{answer}</p>
        </motion.div>
      </CollapsibleContent>
    </Collapsible>
  )
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar currentPath="/faq" />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20" />

        <motion.div
          className="container mx-auto text-center relative z-10"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.h1 className="text-5xl md:text-7xl font-bold mb-6" variants={fadeInUp}>
            <span className="bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              FAQ
            </span>
          </motion.h1>

          <motion.p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto" variants={fadeInUp}>
            Frequently Asked Questions about our   marketplace
          </motion.p>

          <motion.div variants={fadeInUp}>
            <Badge className="bg-red-600 text-white font-bold text-lg px-6 py-2">
              <AlertTriangle className="w-4 h-4 mr-2" />
                CONTENT ONLY
            </Badge>
          </motion.div>
        </motion.div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            className="space-y-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {faqCategories.map((category, categoryIndex) => (
              <motion.div key={categoryIndex} variants={fadeInUp}>
                <Card className="bg-gray-800/30 border-gray-700">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-8">
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center mr-4`}
                      >
                        <category.icon className={`w-6 h-6 ${category.color}`} />
                      </div>
                      <h2 className={`text-2xl font-bold ${category.color}`}>{category.title}</h2>
                    </div>

                    <div className="space-y-4">
                      {category.questions.map((faq, faqIndex) => (
                        <FAQItem key={faqIndex} question={faq.question} answer={faq.answer} />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-16 px-4 border-y border-red-800/50">
        <motion.div
          className="container mx-auto max-w-4xl text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="flex items-center justify-center mb-6">
            <AlertTriangle className="w-8 h-8 text-red-400 mr-3" />
            <h2 className="text-3xl font-bold text-red-400">Important Legal Disclaimer</h2>
          </div>

          <div className="bg-gray-800/50 border border-red-700 rounded-lg p-8">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              This website is a <strong className="text-red-400">  parody</strong> created for entertainment and
              educational purposes only. It is inspired by the Netflix series "How to Sell Drugs Online (Fast)" and
              serves as a demonstration of modern web development techniques.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              <strong className="text-red-400">No real products are sold</strong>, no real transactions occur, and no
              illegal activities are promoted or supported in any way. All product listings, prices, and functionality
              are purely  .
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              This project is intended for <strong className="text-cyan-400">educational purposes</strong> to showcase
              web development skills, UI/UX design principles, and modern frontend technologies.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <motion.div
          className="container mx-auto text-center max-w-2xl"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
              Still Have Questions?
            </span>
          </h2>

          <p className="text-xl text-gray-300 mb-8">
            If you have questions about this   project or want to learn more about the web development
            techniques used, feel free to explore the code and design.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about">
              <motion.button
                className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More About Us
              </motion.button>
            </Link>
            <Link href="/shop">
              <motion.button
                className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore   Shop
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-cyan-400">MyDrugs.to</h3>
              <p className="text-gray-400 text-sm">
                  marketplace for entertainment purposes only. Inspired by Netflix series.
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
              <h4 className="font-bold mb-4 text-white">Series Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Netflix Original</li>
                <li>German Production</li>
                <li>3 Seasons Available</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Disclaimer</h4>
              <p className="text-gray-400 text-sm">
                This is a   parody website created for entertainment. No real products or services are offered.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MyDrugs.to -   Parody Site</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
