import React from "react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  const productLinks = [
    { label: "Personal", href: "#personal" },
    { label: "Business", href: "#business" },
    { label: "Transfers", href: "#services" },
    { label: "Bills & airtime", href: "#services" },
    { label: "Cards (soon)", href: "#" },
  ]

  const companyLinks = [
    { label: "About us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Press", href: "#" },
  ]

  const supportLinks = [
    { label: "Help centre", href: "#" },
    { label: "Contact us", href: "#" },
    { label: "Report fraud", href: "#" },
    { label: "Status", href: "#" },
  ]

  const legalLinks = [
    { label: "Terms of use", href: "#" },
    { label: "Privacy policy", href: "#" },
    { label: "Cookie policy", href: "#" },
    { label: "Complaints", href: "#" },
  ]

  return (
    <footer className="w-full bg-[#0E1028] pt-16 pb-10 lg:pt-20 lg:pb-12 text-white">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-6 lg:px-[120px]">
        {/* Top 5-Column Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-5">
          {/* Brand Column */}
          <div className="flex flex-col gap-4 sm:col-span-2 md:col-span-1">
            <Link href="/" className="inline-block transition-opacity hover:opacity-90">
              <Image
                src="/assets/logo_17_284.svg"
                alt="centerpoint."
                width={160}
                height={28}
                className="h-[28px] w-auto"
              />
            </Link>
            <p className="text-[16px] font-normal text-[#C9CCE8]">
              Your money, at the centre.
            </p>
            {/* Social / Contact Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="#website"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#262B5E] text-white transition-all duration-200 hover:bg-[#FF6B2C] hover:scale-105"
                aria-label="Website"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1.5 9H16.5M9 1.5C10.875 3.5625 12 6.1875 12 9C12 11.8125 10.875 14.4375 9 16.5C7.125 14.4375 6 11.8125 6 9C6 6.1875 7.125 3.5625 9 1.5Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#support"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#262B5E] text-white transition-all duration-200 hover:bg-[#FF6B2C] hover:scale-105"
                aria-label="Customer Support"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 10.5V9C3 7.4087 3.63214 5.88258 4.75736 4.75736C5.88258 3.63214 7.4087 3 9 3C10.5913 3 12.1174 3.63214 13.2426 4.75736C14.3679 5.88258 15 7.4087 15 9V10.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.375 10.5H4.125C4.74632 10.5 5.25 11.0037 5.25 11.625V13.875C5.25 14.4963 4.74632 15 4.125 15H3.375C2.75368 15 2.25 14.4963 2.25 13.875V11.625C2.25 11.0037 2.75368 10.5 3.375 10.5Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.875 10.5H14.625C15.2463 10.5 15.75 11.0037 15.75 11.625V13.875C15.75 14.4963 15.2463 15 14.625 15H13.875C13.2537 15 12.75 14.4963 12.75 13.875V11.625C12.75 11.0037 13.2537 10.5 13.875 10.5Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#links"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#262B5E] text-white transition-all duration-200 hover:bg-[#FF6B2C] hover:scale-105"
                aria-label="External links"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 10.5002C7.77915 10.7837 8.11188 11.0088 8.47885 11.1624C8.84581 11.3161 9.23967 11.3952 9.6375 11.3952C10.0353 11.3952 10.4292 11.3161 10.7962 11.1624C11.1631 11.0088 11.4959 10.7837 11.775 10.5002L14.025 8.25022C14.5919 7.68332 14.9104 6.91444 14.9104 6.11272C14.9104 5.31101 14.5919 4.54213 14.025 3.97523C13.4581 3.40832 12.6892 3.08984 11.8875 3.08984C11.0858 3.08984 10.3169 3.40832 9.75 3.97523L9 4.72523"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.5 7.49996C10.2208 7.21651 9.88811 6.99141 9.52115 6.83776C9.15419 6.68411 8.76033 6.60498 8.3625 6.60498C7.96466 6.60498 7.57081 6.68411 7.20384 6.83776C6.83688 6.99141 6.50414 7.21651 6.225 7.49996L3.975 9.74996C3.4081 10.3169 3.08961 11.0857 3.08961 11.8875C3.08961 12.6892 3.4081 13.4581 3.975 14.025C4.5419 14.5919 5.31078 14.9103 6.1125 14.9103C6.91421 14.9103 7.6831 14.5919 8.25 14.025L9 13.275"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="flex flex-col gap-3.5">
            <h4 className="text-[14px] font-medium text-white">Product</h4>
            <ul className="flex flex-col gap-3.5">
              {productLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[14px] font-normal text-[#A7A9C8] transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="flex flex-col gap-3.5">
            <h4 className="text-[14px] font-medium text-white">Company</h4>
            <ul className="flex flex-col gap-3.5">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[14px] font-normal text-[#A7A9C8] transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="flex flex-col gap-3.5">
            <h4 className="text-[14px] font-medium text-white">Support</h4>
            <ul className="flex flex-col gap-3.5">
              {supportLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[14px] font-normal text-[#A7A9C8] transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col gap-3.5">
            <h4 className="text-[14px] font-medium text-white">Legal</h4>
            <ul className="flex flex-col gap-3.5">
              {legalLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[14px] font-normal text-[#A7A9C8] transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="w-full border-t border-white/10" />

        {/* Bottom Row */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <p className="max-w-[760px] text-[12px] font-medium leading-[18px] text-[#8A8EB0]">
            Center Point is a financial technology company, not a bank. Accounts
            and banking services are provided by 9 Payment Service Bank (9PSB). ©
            2026 Center Point. All rights reserved.
          </p>
          <p className="shrink-0 text-[12px] font-medium text-[#8A8EB0]">
            Lagos, Nigeria · hello@centerpoint.ng
          </p>
        </div>
      </div>
    </footer>
  )
}
