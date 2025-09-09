"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const getInitials = (name: string = "") => {
    return name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase();
};

const LandingNavbar = ({ session }: { session: Session | null }) => {
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
                        {session?.user ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        className="relative h-10 w-10 rounded-full"
                                    >
                                        <Avatar className="h-10 w-10">
                                            <AvatarImage
                                                src={session.user.image ?? ""}
                                                alt={session.user.name ?? ""}
                                            />
                                            <AvatarFallback>
                                                {getInitials(
                                                    session.user.name ?? ""
                                                )}
                                            </AvatarFallback>
                                        </Avatar>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    className="w-56"
                                    align="end"
                                    forceMount
                                >
                                    <DropdownMenuLabel className="font-normal">
                                        <div className="flex flex-col space-y-1">
                                            <p className="text-sm font-medium leading-none">
                                                {session.user.name}
                                            </p>
                                            <p className="text-xs leading-none text-muted-foreground">
                                                {session.user.email}
                                            </p>
                                        </div>
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem asChild>
                                        <Link href="/dashboard">Dashboard</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => signOut()}>
                                        Sign out
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <>
                                <Link href="/signin">
                                    <Button
                                        variant="outline"
                                        className="mr-4 cursor-pointer "
                                    >
                                        Log In
                                    </Button>
                                </Link>
                                <Link href="/signup">
                                    <Button className="cursor-pointer gradient-primary text-white border-0 shadow-primary hover:shadow-glow transition-smooth">
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
};

export default LandingNavbar;
