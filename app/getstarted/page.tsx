import { Users, Globe, Shield, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import digitalHeroImg from "@/assets/digital-age-hero.jpg";

const GetStarted = () => {
  return (
    <div className="min-h-screen deel-gradient relative">
      <div className="min-h-screen flex">
        {/* Left Panel - Hero Content */}
        <div className="hidden lg:flex lg:w-1/2 flex-col justify-center px-12 relative">
          {/* Background image */}
          <div 
            className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(/assets/digital-age-hero.jpg)` }}
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40" />
          
          <div className="max-w-lg animate-fade-in relative z-10">
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-8">
                <div className="text-4xl font-bold text-primary">ContractorPay</div>
              </div>
              
              <h1 className="text-5xl font-bold text-primary mb-6 leading-tight">
                Global payroll
                <br />
                and compliance,
                <br />
                <span className="text-accent">simplified</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Simplify the way you hire, pay, and manage global teams with our 
                all-in-one platform. Deel helps companies scale with unmatched 
                speed, flexibility and compliance.
              </p>
            </div>

            {/* Feature highlights */}
            <div className="space-y-6 mb-12">
              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-2 rounded-lg mt-1">
                  <Users className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Global workforce</h3>
                  <p className="text-sm text-muted-foreground">Hire anyone, anywhere with full compliance</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-2 rounded-lg mt-1">
                  <Shield className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Secure & compliant</h3>
                  <p className="text-sm text-muted-foreground">Bank-grade security with global compliance</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-2 rounded-lg mt-1">
                  <Globe className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">150+ countries</h3>
                  <p className="text-sm text-muted-foreground">Operate globally with local expertise</p>
                </div>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span className="text-sm text-muted-foreground">Trusted by 35,000+ companies</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span className="text-sm text-muted-foreground">9,000+ 5-star reviews</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span className="text-sm text-muted-foreground">Advanced data security</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Call to Action */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-md text-center">
            {/* Mobile header */}
            <div className="lg:hidden mb-8 animate-fade-in">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="text-3xl font-bold text-primary">ContractorPay</div>
              </div>
              <p className="text-muted-foreground">
                Global payroll and compliance, simplified
              </p>
            </div>

            <div className="card-glass rounded-2xl p-8 animate-fade-in">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Ready to get started?
              </h2>
              <p className="text-muted-foreground mb-8">
                Join thousands of companies that trust ContractorPay for their global workforce management.
              </p>
              
              <div className="space-y-4">
                <Link href="/signin" className="block">
                  <Button className="cursor-pointer w-full h-12 button-primary hover:hover-scale text-primary-foreground font-medium transition-all duration-300">
                    <div className="flex items-center space-x-2">
                      <span>Sign In</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </Button>
                </Link>
                
                <Button 
                  variant="outline" 
                  className="w-full h-12 border-border hover:bg-muted hover-lift transition-all duration-200 text-foreground"
                >
                  <Link href="/signup" className="flex items-center space-x-2 w-full justify-center">
                    <span>Create Free Account</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="mt-8">
                <p className="text-xs text-muted-foreground">
                  Trusted by companies from startups to enterprise
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;