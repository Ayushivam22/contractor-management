"use client"

import {motion} from "framer-motion"
import { Button } from "@/components/ui/button"


export default function LandingNavbar(){
    return(
        <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full z-50 glass backdrop-blur-lg border-b border-white/20"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="text-2xl font-bold text-gradient"
              whileHover={{ scale: 1.05 }}
            >
              ContractorPay
            </motion.div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-foreground/80 hover:text-primary transition-smooth">Features</a>
              <a href="#benefits" className="text-foreground/80 hover:text-primary transition-smooth">Benefits</a>
              <a href="#testimonials" className="text-foreground/80 hover:text-primary transition-smooth">Reviews</a>
              <Button variant="outline" className="mr-4">Log In</Button>
              <Button className="gradient-primary text-white border-0 shadow-primary hover:shadow-glow transition-smooth">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>
    )
}