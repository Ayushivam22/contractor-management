import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    company: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords don't match");
      return;
    }
    
    setIsLoading(true);
    
    // Simulate account creation process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success("Account created successfully! Welcome to ContractorPay.");
    setIsLoading(false);
  };

  const handleSocialSignUp = (provider: string) => {
    if (provider === "Google") {
      window.location.href = "https://accounts.google.com/oauth/authorize?client_id=your-google-client-id&redirect_uri=your-redirect-uri&scope=openid%20email%20profile&response_type=code";
    } else if (provider === "Microsoft") {
      window.location.href = "https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=your-microsoft-client-id&response_type=code&redirect_uri=your-redirect-uri&response_mode=query&scope=openid%20email%20profile";
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="card-glass rounded-2xl p-8 animate-fade-in">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-6">
            <div className="text-3xl font-bold text-primary">ContractorPay</div>
          </div>
          <h1 className="text-2xl font-semibold text-foreground mb-2">
            Create your account
          </h1>
          <p className="text-muted-foreground text-sm">
            Join thousands of companies managing global teams
          </p>
        </div>

        {/* Social SignUp */}
        <div className="space-y-3 mb-6">
          <Button
            variant="outline"
            onClick={() => handleSocialSignUp("Google")}
            className="w-full h-12 border-border hover:bg-muted hover-lift transition-all duration-200 text-foreground"
          >
            <svg className="h-5 w-5 mr-3" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </Button>
          
          <Button
            variant="outline"
            onClick={() => handleSocialSignUp("Microsoft")}
            className="w-full h-12 border-border hover:bg-muted hover-lift transition-all duration-200 text-foreground"
          >
            <svg className="h-5 w-5 mr-3" viewBox="0 0 24 24">
              <path fill="#f25022" d="M0 0h11.5v11.5H0z"/>
              <path fill="#00a4ef" d="M12.5 0H24v11.5H12.5z"/>
              <path fill="#7fba00" d="M0 12.5h11.5V24H0z"/>
              <path fill="#ffb900" d="M12.5 12.5H24V24H12.5z"/>
            </svg>
            Continue with Microsoft
          </Button>
        </div>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <Separator className="w-full" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-3 text-muted-foreground">Or</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-sm font-medium text-foreground">
                First name
              </Label>
              <Input
                id="firstName"
                type="text"
                placeholder="John"
                value={formData.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
                className="h-12 px-4 border-border focus:ring-accent focus:border-accent transition-all duration-200"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-sm font-medium text-foreground">
                Last name
              </Label>
              <Input
                id="lastName"
                type="text"
                placeholder="Doe"
                value={formData.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
                className="h-12 px-4 border-border focus:ring-accent focus:border-accent transition-all duration-200"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-foreground">
              Work email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="you@company.com"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="h-12 px-4 border-border focus:ring-accent focus:border-accent transition-all duration-200"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company" className="text-sm font-medium text-foreground">
              Company name
            </Label>
            <Input
              id="company"
              type="text"
              placeholder="Your company"
              value={formData.company}
              onChange={(e) => handleChange("company", e.target.value)}
              className="h-12 px-4 border-border focus:ring-accent focus:border-accent transition-all duration-200"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium text-foreground">
              Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a strong password"
                value={formData.password}
                onChange={(e) => handleChange("password", e.target.value)}
                className="h-12 px-4 pr-12 border-border focus:ring-accent focus:border-accent transition-all duration-200"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-sm font-medium text-foreground">
              Confirm password
            </Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={(e) => handleChange("confirmPassword", e.target.value)}
                className="h-12 px-4 pr-12 border-border focus:ring-accent focus:border-accent transition-all duration-200"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full h-12 button-primary hover:hover-scale text-primary-foreground font-medium transition-all duration-300 mt-6"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                <span>Creating account...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <span>Create free account</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            )}
          </Button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="text-accent hover:text-accent-glow font-medium transition-colors"
            >
              Sign in
            </Link>
          </p>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground">
            By creating an account, you agree to our{" "}
            <a href="#" className="text-accent hover:underline">Terms of Service</a>
            {" "}and{" "}
            <a href="#" className="text-accent hover:underline">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;