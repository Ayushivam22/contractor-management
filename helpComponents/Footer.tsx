import { Input } from "../components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Twitter, Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  const productLinks = [
    { name: "Contractor Management", href: "#" },
    { name: "Global Payroll", href: "#" },
    { name: "Compliance Center", href: "#" },
    { name: "Payment Processing", href: "#" },
    { name: "Contract Templates", href: "#" },
    { name: "Time Tracking", href: "#" },
  ];

  const companyLinks = [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Partners", href: "#" },
    { name: "Contact", href: "#" },
  ];

  const supportLinks = [
    { name: "Help Center", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "API Reference", href: "#" },
    { name: "System Status", href: "#" },
    { name: "Community", href: "#" },
    { name: "Webinars", href: "#" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Security", href: "#" },
    { name: "Compliance", href: "#" },
  ];

  return (
    <footer className="bg-footer text-footer-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-footer-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-3">
                Stay updated with ContractorPay
              </h3>
              <p className="text-footer-muted text-lg">
                Get the latest updates on global hiring, compliance, and contractor management.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-footer-muted" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10 h-12 bg-footer-input border-footer-border text-footer-foreground placeholder:text-footer-muted"
                />
              </div>
              <Button variant="default" size="lg" className="h-12 px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-footer-brand mb-3">ContractorPay</h2>
              <p className="text-footer-muted text-base leading-relaxed">
                Simplifying global contractor hiring with automated compliance, seamless payments, 
                and unmatched flexibility for businesses worldwide.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-footer-muted hover:text-footer-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-footer-muted hover:text-footer-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-footer-muted hover:text-footer-accent transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-footer-muted hover:text-footer-accent transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-footer-foreground mb-4">Products</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-footer-muted hover:text-footer-accent transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-footer-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-footer-muted hover:text-footer-accent transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-footer-foreground mb-4">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-footer-muted hover:text-footer-accent transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-footer-foreground mb-4">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-footer-muted hover:text-footer-accent transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-footer-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-footer-muted text-sm">
              © 2024 ContractorPay. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-footer-muted text-sm">🌍 150+ Countries Supported</span>
              <span className="text-footer-muted text-sm">🔒 Enterprise Security</span>
              <span className="text-footer-muted text-sm">⚡ 24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;