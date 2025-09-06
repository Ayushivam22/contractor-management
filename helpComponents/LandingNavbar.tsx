"use client";

import { motion } from "framer-motion";
import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingNavbar() {
    const { data: session, status } = useSession();

    return (
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
                        <a
                            href="#features"
                            className="text-foreground/80 hover:text-primary transition-smooth"
                        >
                            Features
                        </a>
                        <a
                            href="#benefits"
                            className="text-foreground/80 hover:text-primary transition-smooth"
                        >
                            Benefits
                        </a>
                        <a
                            href="#testimonials"
                            className="text-foreground/80 hover:text-primary transition-smooth"
                        >
                            Reviews
                        </a>
                        {status === "loading" ? (
                            <div className="h-10 w-48 animate-pulse rounded-md bg-gray-200/50" />
                        ) : session ? (
                            <>
                                <span className="font-medium text-foreground">
                                    Hi, {session.user?.name?.split(" ")[0]}
                                </span>
                                <Button
                                    onClick={() => signOut()}
                                    variant="outline"
                                >
                                    Sign Out
                                </Button>
                            </>
                        ) : (
                            <>
                                <Link href="/auth/signin">
                                    <Button variant="outline" className="mr-4">
                                        Log In
                                    </Button>
                                </Link>
                                <Link href="/auth/signup">
                                    <Button className="gradient-primary border-0 text-white shadow-primary transition-smooth hover:shadow-glow">
                                        Get Started
                                    </Button>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}
