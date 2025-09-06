import DeelLoginForm from "@/helpComponents/DeelLoginForm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const SignIn = () => {
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
                Welcome back to
                <br />
                <span className="text-accent">ContractorPay</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Sign in to access your global payroll dashboard and manage 
                your workforce with ease.
              </p>
            </div>

            {/* Feature highlights for sign in */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm text-muted-foreground">Access your dashboard</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm text-muted-foreground">Manage global payments</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm text-muted-foreground">Monitor compliance</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Login Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-md">
            {/* Mobile header */}
            <div className="lg:hidden text-center mb-8 animate-fade-in">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="text-3xl font-bold text-primary">ContractorPay</div>
              </div>
              <p className="text-muted-foreground">
                Sign in to your account
              </p>
            </div>

            <DeelLoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;