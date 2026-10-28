import React from "react"

export function BankStrip() {
  const banks = [
    "GTBank",
    "Access",
    "Zenith",
    "First Bank",
    "UBA",
    "Opay",
    "Kuda",
    "Moniepoint",
  ]

  return (
    <section className="w-full bg-[#F5F4F1] py-9">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-[18px] px-6 lg:px-[120px]">
        {/* Section Label */}
        <p className="text-center text-[11px] font-semibold tracking-[0.88px] uppercase text-[#6B6F8A]">
          SEND TO EVERY NIGERIAN BANK AND WALLET
        </p>

        {/* Bank Logos / Typography Strip */}
        <div className="flex w-full flex-wrap items-center justify-center gap-6 sm:gap-10 lg:justify-between lg:gap-12">
          {banks.map((bank) => (
            <span
              key={bank}
              className="text-[18px] font-semibold tracking-[-0.09px] text-[#6B6F8A] transition-colors hover:text-[#0E1028] cursor-default select-none"
            >
              {bank}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
