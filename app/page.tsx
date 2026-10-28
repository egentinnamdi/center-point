import { Navbar } from "@/components/landing/Navbar"
import { HeroSection } from "@/components/landing/HeroSection"
import { BankStrip } from "@/components/landing/BankStrip"
import { ServicesSection } from "@/components/landing/ServicesSection"
import { AccountsSection } from "@/components/landing/AccountsSection"
import { HowItWorksSection } from "@/components/landing/HowItWorksSection"
import { SecuritySection } from "@/components/landing/SecuritySection"
import { FaqSection } from "@/components/landing/FaqSection"
import { CtaSection } from "@/components/landing/CtaSection"
import { Footer } from "@/components/landing/Footer"

export default function LandingPage() {
  return (
    <main className="min-h-screen w-full bg-[#15193B]">
      <Navbar />
      <HeroSection />
      <BankStrip />
      <ServicesSection />
      <AccountsSection />
      <HowItWorksSection />
      <SecuritySection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
