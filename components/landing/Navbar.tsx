"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: "Personal", href: "#personal" },
    { label: "Business", href: "#business" },
    { label: "Fees", href: "#services" },
    { label: "Security", href: "#security" },
    { label: "Help", href: "#faq" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-[#15193B]/95 backdrop-blur-md transition-colors">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-6 lg:px-[120px]">
        {/* Logo */}
        <Link href="/" className="flex items-center transition-opacity hover:opacity-90">
          <Image
            src="/assets/logo_16_3.svg"
            alt="centerpoint."
            width={174}
            height={30}
            priority
            className="h-[30px] w-auto"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[16px] font-medium text-white transition-colors hover:text-[#FF6B2C]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="#get-the-app"
            className="inline-flex items-center justify-center rounded-[14px] bg-[#FF6B2C] px-6 py-3 text-[16px] font-semibold text-white shadow-sm transition-all hover:bg-[#E85B20] active:scale-[0.98]"
          >
            Get the app
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 md:hidden"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-white/10 bg-[#15193B] px-6 pb-6 pt-2 md:hidden animate-slide-down">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[16px] font-medium text-white transition-colors hover:text-[#FF6B2C]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#get-the-app"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex w-full items-center justify-center rounded-[14px] bg-[#FF6B2C] py-3 text-[16px] font-semibold text-white transition-all hover:bg-[#E85B20]"
            >
              Get the app
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
