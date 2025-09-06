"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignInPage() {
    const router = useRouter();
    const [form, setForm] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const result = await signIn("credentials", {
                ...form,
                redirect: false, // Handle redirect manually
            });

            if (result?.error) {
                setError("Invalid email or password. Please try again.");
            } else if (result?.ok) {
                // On success, redirect to the dashboard or home page
                router.push("/"); // Change this to your desired path
                router.refresh(); // Refresh to update server components with new session
            }
        } catch (err) {
            setError("An unexpected error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl">Sign In</CardTitle>
                    <CardDescription>
                        Enter your credentials to access your account.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    value={form.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            {error && (
                                <p className="text-sm text-red-500 text-center">
                                    {error}
                                </p>
                            )}
                            <Button
                                type="submit"
                                disabled={loading}
                                className="w-full"
                            >
                                {loading ? "Signing In..." : "Sign In"}
                            </Button>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-center text-sm">
                    <p className="text-gray-600 dark:text-gray-400">
                        Don&apos;t have an account?{" "}
                        <Link
                            href="/auth/signup"
                            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                        >
                            Sign Up
                        </Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
}
