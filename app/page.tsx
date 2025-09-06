
import Hero from "@/helpComponents/Hero";
import LandingNavbar from "@/helpComponents/LandingNavbar";
import Stats from "@/helpComponents/Stats";
import Features from "@/helpComponents/Features";
import ContractorPaymentsSection from "@/helpComponents/ContractPaymentSection";
import GlobalHRIS from "@/helpComponents/GlobalHris";
import FAQ from "@/helpComponents/FAQ";
import Footer from "@/helpComponents/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#FFFBF4] ">
      <LandingNavbar />
      <Hero />
      <Stats />
      <Features />
      <ContractorPaymentsSection />

      <nav className="my-6 flex space-x-6 justify-center">
        <Link href="/auth/getstarted" className="text-blue-600 hover:underline">
          Get Started
        </Link>
        <Link href="/auth/signup" className="text-blue-600 hover:underline">
          Log In
        </Link>
      </nav>

      <div className="w-full overflow-hidden">
        <svg
          className="w-full text-blue-400"
          viewBox="0 0 1620 128"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M1620 0V53.3465L1528.65 79.1847C1518.92 81.9385 1508.89 83.5464 1498.79 83.9757L473.53 127.51C465.858 127.836 458.173 127.482 450.564 126.451L0 65.4176V0H1620Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <GlobalHRIS />
      <FAQ />
      <Footer />
    </div>
  );
}
