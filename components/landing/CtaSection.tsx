import React from "react"
import { AnimateIn } from "./AnimateIn"

export function CtaSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[120px]">
        <AnimateIn direction="up">
          <div className="relative overflow-hidden rounded-[32px] bg-[#FF6B2C] p-8 sm:p-12 lg:p-14 shadow-lg">
            {/* Background Decorative Stroke Ellipse */}
            <div
              className="pointer-events-none absolute -right-10 -top-16 h-[260px] w-[260px] rounded-full border-[36px] border-white/[0.18]"
              aria-hidden="true"
            />

            <div className="relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
              {/* Left Text */}
              <div className="flex flex-col gap-3">
                <h2 className="text-[32px] font-bold leading-[1.15] text-white sm:text-[44px]">
                  Be first when we launch.
                </h2>
                <p className="text-[18px] font-normal leading-[28px] text-[#FFE3D4] sm:text-[20px] sm:leading-[30px]">
                  Join the waitlist and get your account number on day one.
                </p>
              </div>

              {/* Right Store Badges */}
              <div className="flex flex-wrap items-center gap-3">
                {/* App Store Badge */}
                <a
                  href="#app-store"
                  className="inline-flex items-center gap-2.5 rounded-[14px] bg-[#0E1028] px-[18px] py-[10px] transition-transform duration-200 hover:scale-105 active:scale-95 shadow-md"
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

                {/* Google Play Badge */}
                <a
                  href="#google-play"
                  className="inline-flex items-center gap-2.5 rounded-[14px] bg-[#0E1028] px-[18px] py-[10px] transition-transform duration-200 hover:scale-105 active:scale-95 shadow-md"
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
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
