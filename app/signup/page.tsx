"use client"

import SignUpForm from "@/helpComponents/SignUpForm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const SignUp = () => {
  return (
    <div className="min-h-screen deel-gradient relative">
      {/* Back to Home Button */}
      <div className="absolute top-6 left-6 z-10">
        <Link 
          href="/getstarted"
          className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="min-h-screen flex">
        {/* Left Panel - Hero Content */}
        <div className="hidden lg:flex lg:w-1/2 flex-col justify-center px-12 relative">
          {/* Background image */}
          <div 
            className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('/assets/digital-age-hero.jpg')` }}
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40" />
          
          <div className="max-w-lg animate-fade-in relative z-10">
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-8">
                <div className="text-4xl font-bold text-primary">ContractorPay</div>
              </div>
              
              <h1 className="text-5xl font-bold text-primary mb-6 leading-tight">
                Join the future
                <br />
                of global
                <br />
                <span className="text-accent">workforce</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Start managing your global team with confidence. 
                Trusted by 35,000+ companies worldwide.
              </p>
            </div>

            {/* Benefits for sign up */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-2 rounded-lg mt-1">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Free to get started</h3>
                  <p className="text-sm text-muted-foreground">No setup fees, no monthly minimums</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-2 rounded-lg mt-1">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Ready in minutes</h3>
                  <p className="text-sm text-muted-foreground">Quick setup and instant access</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-2 rounded-lg mt-1">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Global compliance</h3>
                  <p className="text-sm text-muted-foreground">Built-in compliance for 150+ countries</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - SignUp Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-md">
            {/* Mobile header */}
            <div className="lg:hidden text-center mb-8 animate-fade-in">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="text-3xl font-bold text-primary">ContractorPay</div>
              </div>
              <p className="text-muted-foreground">
                Create your free account
              </p>
            </div>

            <SignUpForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;