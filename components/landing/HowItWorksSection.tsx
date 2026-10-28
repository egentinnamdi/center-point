import React from "react"
import { AnimateIn } from "./AnimateIn"

export function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Download & sign up",
      description:
        "Get Center Point on iOS or Android and verify your phone number.",
    },
    {
      number: "2",
      title: "Verify your identity",
      description:
        "Add your BVN or NIN and take a selfie. Business? Upload your CAC documents.",
    },
    {
      number: "3",
      title: "Send, pay & relax",
      description:
        "Start receiving immediately. Transfers unlock as soon as your review is approved.",
    },
  ]

  return (
    <section className="w-full bg-white py-20 lg:py-28">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-14 px-6 lg:px-[120px]">
        {/* Header */}
        <AnimateIn direction="up">
          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-semibold tracking-[0.88px] uppercase text-[#FF6B2C]">
              HOW IT WORKS
            </span>
            <h2 className="text-[36px] font-bold leading-[1.18] tracking-[-1.1px] text-[#15193B] sm:text-[44px]">
              Up and running in 3 steps
            </h2>
          </div>
        </AnimateIn>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {steps.map((step, idx) => (
            <AnimateIn key={step.number} direction="up" delay={idx * 150}>
              <div className="flex flex-col items-start gap-4">
                {/* Step Number Badge */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#15193B] text-[18px] font-semibold text-white shadow-sm transition-transform duration-300 hover:scale-110">
                  {step.number}
                </div>

                {/* Step Title & Description */}
                <h3 className="text-[24px] font-semibold text-[#15193B]">
                  {step.title}
                </h3>
                <p className="text-[16px] font-normal leading-[24px] text-[#6B6F8A]">
                  {step.description}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
