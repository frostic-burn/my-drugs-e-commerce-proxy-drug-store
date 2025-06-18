"use client"

import Link from "next/link"
import { motion } from "framer-motion"

// Animation variants for the 3D flip effect
const itemVariants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
}

const backVariants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
}

// Glow effect variants
const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: 0.5, type: "spring", stiffness: 300, damping: 25 },
    },
  },
}

// Shared transition configuration
const sharedTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  duration: 0.5,
}

interface AnimatedNavLinkProps {
  href: string
  label: string
  onClick?: () => void
  gradient?: string
  iconColor?: string
  className?: string
  isActive?: boolean
}

function AnimatedNavLink({
  href,
  label,
  onClick,
  gradient = "radial-gradient(circle, rgba(6,182,212,0.15) 0%, rgba(8,145,178,0.06) 50%, rgba(14,116,144,0) 100%)",
  iconColor = "text-cyan-400",
  className = "",
  isActive = false,
}: AnimatedNavLinkProps) {
  return (
    <motion.div className={`relative ${className}`} whileHover="hover" initial="initial">
      {/* Glow effect background */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        variants={glowVariants}
        style={{
          background: gradient,
          opacity: 0,
          borderRadius: "16px",
        }}
      />

      {/* 3D flip container */}
      <div className="block rounded-xl overflow-visible group relative" style={{ perspective: "600px" }}>
        {/* Front face */}
        <motion.div
          className="flex items-center gap-2 px-4 py-2 relative z-10 rounded-xl"
          variants={itemVariants}
          transition={sharedTransition}
          style={{ transformStyle: "preserve-3d", transformOrigin: "center bottom" }}
        >
          <Link
            href={href}
            onClick={onClick}
            className={`text-sm font-medium transition-colors ${
              isActive ? "text-cyan-400" : "text-white hover:text-cyan-400"
            }`}
          >
            {label}
          </Link>
        </motion.div>

        {/* Back face (colored on hover) */}
        <motion.div
          className="flex items-center gap-2 px-4 py-2 absolute inset-0 z-10 rounded-xl"
          variants={backVariants}
          transition={sharedTransition}
          style={{ transformStyle: "preserve-3d", transformOrigin: "center top", rotateX: 90 }}
        >
          <Link href={href} onClick={onClick} className={`text-sm font-medium ${iconColor} font-bold`}>
            {label}
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}

// Cyberpunk color schemes for the navbar
const navLinkColors = {
  cyan: {
    gradient: "radial-gradient(circle, rgba(6,182,212,0.15) 0%, rgba(8,145,178,0.06) 50%, rgba(14,116,144,0) 100%)",
    iconColor: "text-cyan-400",
  },
  pink: {
    gradient: "radial-gradient(circle, rgba(236,72,153,0.15) 0%, rgba(219,39,119,0.06) 50%, rgba(190,24,93,0) 100%)",
    iconColor: "text-pink-400",
  },
  purple: {
    gradient: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(124,58,237,0.06) 50%, rgba(109,40,217,0) 100%)",
    iconColor: "text-purple-400",
  },
  green: {
    gradient: "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)",
    iconColor: "text-green-400",
  },
}

function GlitchText({ children, className = "" }: { children: string; className?: string }) {
  return (
    <motion.span
      className={`${className} cursor-pointer`}
      whileHover={{
        scale: 1.1,
        textShadow: ["0 0 10px rgba(6,182,212,0.8)", "0 0 20px rgba(236,72,153,0.6)", "0 0 10px rgba(6,182,212,0.8)"],
        transition: { duration: 0.3 },
      }}
      animate={{
        textShadow: ["0 0 5px rgba(6,182,212,0.5)", "0 0 15px rgba(236,72,153,0.3)", "0 0 5px rgba(6,182,212,0.5)"],
      }}
      transition={{
        repeat: Number.POSITIVE_INFINITY,
        duration: 3,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.span>
  )
}

interface NavbarProps {
  currentPath?: string
}

export default function Navbar({ currentPath = "/" }: NavbarProps) {
  return (
    <header className="border-b border-gray-800 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/" className="text-2xl font-bold">
            <GlitchText className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
              MyDrugs.to
            </GlitchText>
          </Link>

          <nav className="flex flex-wrap justify-center md:justify-end space-x-2 md:space-x-2">
            <AnimatedNavLink href="/" label="Home" isActive={currentPath === "/"} {...navLinkColors.cyan} />
            <AnimatedNavLink href="/shop" label="Shop" isActive={currentPath === "/shop"} {...navLinkColors.pink} />
            <AnimatedNavLink
              href="/about"
              label="About"
              isActive={currentPath === "/about"}
              {...navLinkColors.purple}
            />
          </nav>
        </div>
      </div>
    </header>
  )
}
