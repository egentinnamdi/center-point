import React from "react"
import { AnimateIn } from "./AnimateIn"

export function ServicesSection() {
  const services = [
    {
      title: "Bank transfers",
      description: "Instant transfers to any bank or wallet, 24/7.",
      action: "From ₦10",
      iconBg: "bg-[#FFE3D4]",
      iconColor: "#FF6B2C",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 10H22.5M17.5 5L22.5 10L17.5 15M25 20H7.5M12.5 15L7.5 20L12.5 25"
            stroke="#FF6B2C"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Airtime",
      description: "MTN, Airtel, Glo and 9mobile — any amount.",
      action: "2% cashback",
      iconBg: "bg-[#FFF4DE]",
      iconColor: "#B7791F",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.625 3.125H19.375C21.1009 3.125 22.5 4.52411 22.5 6.25V23.75C22.5 25.4759 21.1009 26.875 19.375 26.875H10.625C8.89911 26.875 7.5 25.4759 7.5 23.75V6.25C7.5 4.52411 8.89911 3.125 10.625 3.125Z"
            stroke="#B7791F"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.75 22.5H16.25"
            stroke="#B7791F"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Data bundles",
      description: "Daily, weekly and monthly plans for every network.",
      action: "Best prices",
      iconBg: "bg-[#E7ECFC]",
      iconColor: "#3B5BDB",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.125 11.25C6.35822 8.26314 10.5983 6.60437 15 6.60437C19.4017 6.60437 23.6418 8.26314 26.875 11.25"
            stroke="#3B5BDB"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.875 15.625C9.07633 13.5598 11.9815 12.4103 15 12.4103C18.0185 12.4103 20.9237 13.5598 23.125 15.625"
            stroke="#3B5BDB"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.625 20C11.7933 18.8548 13.364 18.2134 15 18.2134C16.636 18.2134 18.2067 18.8548 19.375 20"
            stroke="#3B5BDB"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 24.375H15.0125"
            stroke="#3B5BDB"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Bill payments",
      description: "Electricity tokens, DStv, GOtv, internet & more.",
      action: "Instant tokens",
      iconBg: "bg-[#E3F6EB]",
      iconColor: "#12A150",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.5 3.75H22.5V26.25L18.75 23.75L15 26.25L11.25 23.75L7.5 26.25V3.75Z"
            stroke="#12A150"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.25 10H18.75M11.25 15H18.75"
            stroke="#12A150"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ]

  return (
    <section id="services" className="w-full bg-white py-20 lg:py-28">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-12 px-6 lg:px-[120px]">
        {/* Header Row */}
        <AnimateIn direction="up">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="flex flex-col gap-3">
              <span className="text-[11px] font-semibold tracking-[0.88px] uppercase text-[#FF6B2C]">
                WHAT YOU CAN DO
              </span>
              <h2 className="text-[36px] font-bold leading-[1.18] tracking-[-1.1px] text-[#15193B] sm:text-[44px]">
                Everything money.
                <br />
                One simple app.
              </h2>
            </div>
            <p className="max-w-[380px] text-[18px] font-normal leading-[28px] text-[#6B6F8A] sm:text-[20px] sm:leading-[30px]">
              One balance, every payment you make in a day.
            </p>
          </div>
        </AnimateIn>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((item, index) => (
            <AnimateIn
              key={item.title}
              direction="up"
              delay={index * 100}
              className="h-full"
            >
              <div className="group flex h-full flex-col justify-between rounded-[28px] bg-[#F5F4F1] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex flex-col gap-5">
                  {/* Icon Box */}
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-[20px] ${item.iconBg} transition-transform duration-300 group-hover:scale-105`}
                  >
                    {item.icon}
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[24px] font-semibold text-[#15193B]">
                      {item.title}
                    </h3>
                    <p className="text-[16px] font-normal leading-[24px] text-[#6B6F8A]">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-6">
                  <span className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#FF6B2C] transition-colors group-hover:text-[#E85B20]">
                    <span>{item.action}</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path
                        d="M3.33333 8H12.6667M8.66666 12L12.6667 8L8.66666 4"
                        stroke="#FF6B2C"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
