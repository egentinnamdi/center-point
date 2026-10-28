"use client"

import React, { useState } from "react"
import Image from "next/image"

export function HeroSection() {
  const [inputValue, setInputValue] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputValue.trim()) {
      setIsSubmitted(true)
    }
  }

  return (
    <section className="relative overflow-hidden bg-[#15193B] pt-8 pb-16 lg:pt-16 lg:pb-24">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-12 px-6 lg:flex-row lg:items-center lg:gap-10 lg:px-[120px]">
        {/* Left Copy Column */}
        <div className="flex max-w-[620px] flex-col items-start gap-7 text-left animate-slide-up">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.08] px-3.5 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-[#FF6B2C]" />
            <span className="text-[14px] font-medium text-[#FFE3D4]">
              Launching soon in Nigeria — join the waitlist
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[44px] font-extrabold leading-[1.05] tracking-[-2px] text-white sm:text-[60px] lg:text-[76px] lg:tracking-[-2.66px]">
            Your money,
            <br />
            at the <span className="text-[#FF6B2C]">centre.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-[18px] font-normal leading-[28px] text-[#C9CCE8] sm:text-[20px] sm:leading-[30px]">
            Send money to any Nigerian bank in seconds, buy airtime and data,
            and pay bills — for you and your business, all in one simple app.
          </p>

          {/* Waitlist Input Form */}
          <div className="w-full max-w-[480px]">
            {isSubmitted ? (
              <div className="flex items-center gap-3 rounded-[16px] bg-[#E3F6EB] px-6 py-4 text-[16px] font-medium text-[#12A150] shadow-sm animate-fade-in">
                <svg
                  className="h-5 w-5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>You&apos;re on the waitlist! We&apos;ll notify you when we launch.</span>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex w-full items-center rounded-[16px] bg-white p-1.5 pl-5 shadow-lg transition-all focus-within:ring-2 focus-within:ring-[#FF6B2C]"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Enter your email or phone number"
                  className="w-full min-w-0 bg-transparent text-[16px] font-normal text-[#0E1028] placeholder:text-[#6B6F8A] focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="ml-2 inline-flex shrink-0 items-center gap-2 rounded-[14px] bg-[#FF6B2C] px-5 py-3.5 text-[16px] font-semibold text-white transition-all hover:bg-[#E85B20] active:scale-95"
                >
                  <span>Join waitlist</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.33333 8H12.6667M8.66666 12L12.6667 8L8.66666 4"
                      stroke="white"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </form>
            )}
          </div>

          {/* Store Badges */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            {/* App Store */}
            <a
              href="#app-store"
              className="inline-flex items-center gap-2.5 rounded-[14px] bg-[#0E1028] px-[18px] py-[10px] border border-white/5 transition-all hover:border-white/20 active:scale-95"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.79167 2.29169H14.2083C15.474 2.29169 16.5 3.3177 16.5 4.58335V17.4167C16.5 18.6823 15.474 19.7084 14.2083 19.7084H7.79167C6.52601 19.7084 5.5 18.6823 5.5 17.4167V4.58335C5.5 3.3177 6.52601 2.29169 7.79167 2.29169Z"
                  stroke="white"
                  strokeWidth="1.83333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.0833 16.5H11.9167"
                  stroke="white"
                  strokeWidth="1.83333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex flex-col text-left">
                <span className="text-[12px] font-medium leading-none text-[#C9CCE8]">
                  Download on the
                </span>
                <span className="text-[18px] font-semibold leading-tight text-white">
                  App Store
                </span>
              </div>
            </a>

            {/* Google Play */}
            <a
              href="#google-play"
              className="inline-flex items-center gap-2.5 rounded-[14px] bg-[#0E1028] px-[18px] py-[10px] border border-white/5 transition-all hover:border-white/20 active:scale-95"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 2.75V13.75M15.5833 9.16667L11 13.75L6.41666 9.16667M3.66666 19.25H18.3333"
                  stroke="white"
                  strokeWidth="1.83333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex flex-col text-left">
                <span className="text-[12px] font-medium leading-none text-[#C9CCE8]">
                  Get it on
                </span>
                <span className="text-[18px] font-semibold leading-tight text-white">
                  Google Play
                </span>
              </div>
            </a>
          </div>

          {/* Trust Checkline */}
          <div className="flex items-center gap-2 pt-1 text-[#C9CCE8]">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0 text-[#FF6B2C]"
            >
              <path
                d="M12 3L20 6V12C20 17 16.5 20 12 21C7.5 20 4 17 4 12V6L12 3Z"
                stroke="#FF6B2C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 12L11 14L15 10"
                stroke="#FF6B2C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[14px] font-normal">
              Free to open · No monthly fees · Instant transfers
            </span>
          </div>
        </div>

        {/* Right Visual Column (Phone Mockup + Floating Badges) */}
        <div className="relative flex w-full max-w-[480px] justify-center lg:w-[480px] lg:justify-end animate-slide-up delay-200">
          {/* Decorative Orange Background Ring */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[38px] border-[#FF6B2C]/35 sm:h-[480px] sm:w-[480px] sm:border-[40px]"
            aria-hidden="true"
          />

          {/* Relative Container for Phone & Floating Badges */}
          <div className="relative z-10 w-[310px] sm:w-[340px]">
            {/* Phone Image */}
            <Image
              src="/assets/phone_mockup.png"
              alt="Center Point mobile app interface"
              width={340}
              height={700}
              priority
              className="relative z-10 h-auto w-full drop-shadow-[0_24px_48px_rgba(0,0,0,0.4)]"
            />

            {/* Floating Badge 1 (Top Left: Money In) */}
            <div
              className="absolute -left-6 top-[180px] z-20 flex items-center gap-3 rounded-[18px] bg-white px-4 py-3 shadow-[0_16px_36px_rgba(0,0,0,0.22)] animate-float-slow sm:-left-12 sm:top-[210px]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E3F6EB]">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 4L4 12M4 12V6M4 12H10"
                    stroke="#12A150"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[12px] font-medium leading-none text-[#6B6F8A]">
                  Money in
                </span>
                <span className="text-[16px] font-semibold leading-tight text-[#0E1028]">
                  +₦150,000.00
                </span>
              </div>
            </div>

            {/* Floating Badge 2 (Bottom Right: IKEDC Token) */}
            <div
              className="absolute -right-6 bottom-[170px] z-20 flex items-center gap-3 rounded-[18px] bg-white px-4 py-3 shadow-[0_16px_36px_rgba(0,0,0,0.22)] animate-float-delayed sm:-right-12 sm:bottom-[190px]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF4DE]">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.8334 1.66669L3.33337 11.6667H9.16671L8.33337 18.3334L15.8334 8.33335H10L10.8334 1.66669Z"
                    stroke="#B7791F"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[12px] font-medium leading-none text-[#6B6F8A]">
                  IKEDC token
                </span>
                <span className="text-[16px] font-semibold leading-tight text-[#0E1028]">
                  Paid in 3 seconds
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
