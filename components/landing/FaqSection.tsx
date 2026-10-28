"use client"

import React, { useState } from "react"
import { AnimateIn } from "./AnimateIn"

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqItems = [
    {
      question: "Why can’t I send money right after signing up?",
      answer:
        "New accounts start on Post-No-Debit (PND) while we review your details. You can receive money straight away, and transfers unlock once approved — usually within 24 hours (48 hours for businesses).",
    },
    {
      question: "What do I need to open an account?",
      answer:
        "For a personal account, you only need your BVN or NIN and a quick selfie. For a business account, you'll need your CAC registration documents, Tax Identification Number (TIN), and director KYC.",
    },
    {
      question: "How much does a transfer cost?",
      answer:
        "Transfers start from as low as ₦10 to any Nigerian bank or wallet, 24/7 with instant delivery and zero hidden charges.",
    },
    {
      question: "Can I open both a personal and business account?",
      answer:
        "Yes, you can easily open and operate both a personal and business account within the same Center Point app, switching seamlessly between them.",
    },
  ]

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="w-full bg-[#F5F4F1] py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:gap-16 lg:px-[120px]">
        {/* Left Column */}
        <div className="flex flex-col gap-3 lg:col-span-5">
          <AnimateIn direction="up">
            <span className="text-[11px] font-semibold tracking-[0.88px] uppercase text-[#FF6B2C]">
              FAQ
            </span>
            <h2 className="mt-2 text-[36px] font-bold leading-[1.18] tracking-[-1.1px] text-[#15193B] sm:text-[44px]">
              Questions,
              <br />
              answered
            </h2>
            <p className="mt-4 max-w-[340px] text-[16px] font-normal leading-[24px] text-[#6B6F8A]">
              Can’t find what you need? Chat with us in the app, 24/7.
            </p>
          </AnimateIn>
        </div>

        {/* Right Accordion Column */}
        <div className="flex flex-col gap-3 lg:col-span-7">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <AnimateIn
                key={item.question}
                direction="up"
                delay={index * 100}
                className="w-full"
              >
                <div
                  className={`overflow-hidden rounded-[20px] border border-[#E4E4EA] bg-white transition-all duration-300 ${
                    isOpen ? "shadow-sm" : "hover:border-[#FF6B2C]/40"
                  }`}
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left sm:px-7 sm:py-6"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[18px] font-semibold text-[#15193B]">
                      {item.question}
                    </span>
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors duration-200 ${
                        isOpen ? "bg-[#FF6B2C]" : "bg-[#F5F4F1]"
                      }`}
                    >
                      {isOpen ? (
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.5 4.5L9 9M9 9L13.5 13.5M9 9L13.5 4.5M9 9L4.5 13.5"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : (
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 3.75V9M9 9V14.25M9 9H3.75M9 9H14.25"
                            stroke="#15193B"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                  </button>

                  {/* Accordion Content */}
                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 text-[16px] font-normal leading-[24px] text-[#6B6F8A] sm:px-7 sm:pb-7 animate-fade-in">
                      {item.answer}
                    </div>
                  )}
                </div>
              </AnimateIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
