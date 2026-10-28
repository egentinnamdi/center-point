import React from "react"
import { AnimateIn } from "./AnimateIn"

export function SecuritySection() {
  const securityFeatures = [
    {
      title: "PIN & Face ID",
      description: "Every payment needs your PIN or biometrics.",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 11H18C19.1046 11 20 11.8954 20 13V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V13C4 11.8954 4.89543 11 6 11Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 11V7C8 5.93913 8.42143 4.92172 9.17157 4.17157C9.92172 3.42143 10.9391 3 12 3C13.0609 3 14.0783 3.42143 14.8284 4.17157C15.5786 4.92172 16 5.93913 16 7V11"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Device binding",
      description: "Your account works only on devices you approve.",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.5 2.5H15.5C16.8807 2.5 18 3.61929 18 5V19C18 20.3807 16.8807 21.5 15.5 21.5H8.5C7.11929 21.5 6 20.3807 6 19V5C6 3.61929 7.11929 2.5 8.5 2.5Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 18H13"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Verified accounts",
      description: "BVN/NIN + selfie checks for every customer.",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 3L20 6V12C20 17 16.5 20 12 21C7.5 20 4 17 4 12V6L12 3Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 12L11 14L15 10"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "24/7 monitoring",
      description: "Unusual transfers are held and reviewed instantly.",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ]

  return (
    <section id="security" className="w-full bg-[#15193B] py-20 lg:py-28">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-12 px-6 lg:px-[120px]">
        {/* Header Row */}
        <AnimateIn direction="up">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="flex flex-col gap-3">
              <span className="text-[11px] font-semibold tracking-[0.88px] uppercase text-[#FF6B2C]">
                SECURITY
              </span>
              <h2 className="text-[36px] font-bold leading-[1.18] tracking-[-1.1px] text-white sm:text-[44px]">
                Your money is protected
                <br />
                at every step
              </h2>
            </div>
            <p className="max-w-[420px] text-[18px] font-normal leading-[28px] text-[#C9CCE8] sm:text-[20px] sm:leading-[30px]">
              We verify every customer, monitor every transaction and give you full
              control of your account.
            </p>
          </div>
        </AnimateIn>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {securityFeatures.map((feat, index) => (
            <AnimateIn
              key={feat.title}
              direction="up"
              delay={index * 100}
              className="h-full"
            >
              <div className="group flex h-full flex-col gap-4 rounded-[24px] bg-[#262B5E] p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-[#2d336e]">
                {/* Icon Box */}
                <div className="flex h-10 w-10 items-center justify-center rounded-[14px] bg-[#FF6B2C] shadow-sm transition-transform duration-300 group-hover:scale-105">
                  {feat.icon}
                </div>

                {/* Content */}
                <h3 className="text-[18px] font-semibold text-white">
                  {feat.title}
                </h3>
                <p className="text-[14px] font-normal leading-[22px] text-[#C9CCE8]">
                  {feat.description}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
