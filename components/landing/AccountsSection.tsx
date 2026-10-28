import React from "react"
import Link from "next/link"
import { AnimateIn } from "./AnimateIn"

export function AccountsSection() {
  const personalFeatures = [
    "Free account number in 5 minutes",
    "Instant transfers, airtime, data & bills",
    "PIN + Face ID on every payment",
  ]

  const businessFeatures = [
    "Team access with roles & approvals",
    "Bulk transfers & payroll from a CSV",
    "Payment links & downloadable statements",
  ]

  return (
    <section id="personal" className="w-full bg-[#F5F4F1] py-20 lg:py-28">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-12 px-6 lg:px-[120px]">
        {/* Header */}
        <AnimateIn direction="up">
          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-semibold tracking-[0.88px] uppercase text-[#FF6B2C]">
              TWO ACCOUNT TYPES
            </span>
            <h2 className="text-[36px] font-bold leading-[1.18] tracking-[-1.1px] text-[#15193B] sm:text-[44px]">
              Built for people and businesses
            </h2>
          </div>
        </AnimateIn>

        {/* 2 Large Cards Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Personal Account Card */}
          <AnimateIn direction="up" delay={100} className="h-full">
            <div className="flex h-full flex-col justify-between rounded-[32px] bg-[#FFE3D4] p-8 sm:p-10 transition-transform duration-300 hover:-translate-y-1">
              <div className="flex flex-col gap-6">
                {/* Icon Box */}
                <div className="flex h-11 w-11 items-center justify-center rounded-[18px] bg-[#FF6B2C]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.6667 9.33342C18.6667 11.9107 16.5773 14.0001 14 14.0001C11.4227 14.0001 9.33333 11.9107 9.33333 9.33342C9.33333 6.75609 11.4227 4.66675 14 4.66675C16.5773 4.66675 18.6667 6.75609 18.6667 9.33342Z"
                      stroke="white"
                      strokeWidth="2.33"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.66667 24.4999C4.66667 19.8333 8.86667 16.3333 14 16.3333C19.1333 16.3333 23.3333 19.8333 23.3333 24.4999"
                      stroke="white"
                      strokeWidth="2.33"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Card Title & Desc */}
                <div className="flex flex-col gap-2.5">
                  <span className="text-[11px] font-semibold tracking-[0.88px] uppercase text-[#FF6B2C]">
                    FOR YOU
                  </span>
                  <h3 className="text-[24px] font-semibold text-[#15193B]">
                    Personal account
                  </h3>
                  <p className="text-[16px] font-normal leading-[24px] text-[#6B6F8A]">
                    Open in minutes with your BVN or NIN and a quick selfie.
                  </p>
                </div>

                {/* Feature Checklist */}
                <div className="flex flex-col gap-3 pt-2">
                  {personalFeatures.map((feat) => (
                    <div key={feat} className="flex items-center gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-xl bg-[#E3F6EB]">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.91667 7.29159L5.54167 9.91659L11.0833 4.08325"
                            stroke="#12A150"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-[16px] font-normal text-[#0E1028]">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-8">
                <Link
                  href="#open-personal"
                  className="inline-flex items-center gap-2 rounded-[14px] bg-[#15193B] px-6 py-3.5 text-[16px] font-semibold text-white transition-all hover:bg-[#1f2552] active:scale-95"
                >
                  <span>Open personal account</span>
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
                </Link>
              </div>
            </div>
          </AnimateIn>

          {/* Business Account Card */}
          <AnimateIn direction="up" delay={200} className="h-full">
            <div
              id="business"
              className="flex h-full flex-col justify-between rounded-[32px] bg-[#15193B] p-8 sm:p-10 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col gap-6">
                {/* Icon Box */}
                <div className="flex h-11 w-11 items-center justify-center rounded-[18px] bg-[#FF6B2C]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.66669 24.5V5.83333C4.66669 5.21449 4.91252 4.621 5.3501 4.18342C5.78769 3.74583 6.38118 3.5 7.00002 3.5H16.3334C16.9522 3.5 17.5457 3.74583 17.9833 4.18342C18.4209 4.621 18.6667 5.21449 18.6667 5.83333V24.5"
                      stroke="white"
                      strokeWidth="2.33"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.6667 10.5H22.1667C22.4761 10.5 22.7729 10.6229 22.9916 10.8417C23.2104 11.0605 23.3334 11.3572 23.3334 11.6667V24.5"
                      stroke="white"
                      strokeWidth="2.33"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.33331 24.5001H25.6666M9.33331 8.16675H14M9.33331 12.8334H14M9.33331 17.5001H14"
                      stroke="white"
                      strokeWidth="2.33"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Card Title & Desc */}
                <div className="flex flex-col gap-2.5">
                  <span className="text-[11px] font-semibold tracking-[0.88px] uppercase text-[#FF6B2C]">
                    FOR YOUR BUSINESS
                  </span>
                  <h3 className="text-[24px] font-semibold text-white">
                    Business account
                  </h3>
                  <p className="text-[16px] font-normal leading-[24px] text-[#C9CCE8]">
                    For registered companies and sole proprietors. Verified with CAC,
                    TIN and director KYC.
                  </p>
                </div>

                {/* Feature Checklist */}
                <div className="flex flex-col gap-3 pt-2">
                  {businessFeatures.map((feat) => (
                    <div key={feat} className="flex items-center gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-xl bg-[#262B5E]">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.91667 7.29159L5.54167 9.91659L11.0833 4.08325"
                            stroke="#FF6B2C"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-[16px] font-normal text-white">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-8">
                <Link
                  href="#open-business"
                  className="inline-flex items-center gap-2 rounded-[14px] bg-[#FF6B2C] px-6 py-3.5 text-[16px] font-semibold text-white transition-all hover:bg-[#E85B20] active:scale-95"
                >
                  <span>Open business account</span>
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
                </Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
