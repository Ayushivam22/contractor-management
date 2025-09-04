"use client"

import { motion} from "framer-motion";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

const Tilt = dynamic(() => import("react-parallax-tilt"), { ssr: false });

export default function Hero(){
    return(
        <section className="relative bg-[#f0f7ff] overflow-hidden">
        {/* Background shape */}
        <div className="absolute right-0 inset-y-0 w-1/2">
            <svg
            className="absolute top-0 right-0 w-[950px] h-[950px] text-blue-100"
            viewBox="0 0 1109 1009"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path d="M583.273 1008.67L170.702 918.97L0 392.227L622.544 0L1108.42 509.573L583.273 1008.67Z" />
            </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 lg:px-6 pt-24 pb-24 lg:grid lg:grid-cols-2 lg:gap-6">
            {/* Left Content */}
            <motion.div
            className="max-w-xl lg:pt-16 z-20"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            >
            <p className="text-base font-semibold text-gray-800 mb-3">
                Contractor Pay
            </p>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-900">
                Easily hire contractors compliantly worldwide
            </h1>

            <p className="mt-6 text-lg text-gray-600">
                Hire and manage international contractors seamlessly. Our platform automates HR, ensures compliance, and guarantees on-time payments — all with unmatched flexibility.
            </p>

            {/* CTA Row */}
            <motion.div
                className="mt-8 flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
            >
                <Button
                size="lg"
                className="bg-[#0052cc] hover:bg-[#0041a8] text-white px-8 py-6 text-base font-medium"
                >
                Get a free 30-min demo
                </Button>
                <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-base font-medium border-gray-300 text-gray-700 hover:bg-gray-100"
                >
                Speak to sales
                </Button>
            </motion.div>
            </motion.div>

            {/* Right Images */}
            <div className="relative w-full mt-12 lg:mt-0 flex justify-center lg:justify-end z-10">
            <div className="relative w-full max-w-[900px]">
                {/* Large Image with Tilt */}
                <Tilt
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                perspective={1200}
                scale={1.05}
                transitionSpeed={400}
                glareEnable={false}
                className="overflow-hidden rounded-3xl shadow-xl h-[600px]"
                >
                <motion.img
                    src="https://images.ctfassets.net/pdf29us7flmy/7rUlJ13ZQSZTwrGC9eZJrV/143bed1e9db7ccf98001d0ca8a90d91e/GettyImages-517047052_optimized.jpg?w=720&q=100&fm=jpg"
                    alt="Contractor dashboard"
                    className="w-full h-full object-cover rounded-3xl"
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                />
                </Tilt>

                {/* Small Image at Bottom-Left with subtle motion */}
                <motion.div
                className="absolute bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4 w-1/2 lg:w-2/5 overflow-hidden rounded-3xl shadow-2xl"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                >
                <img
                    src="https://www.d-velop.com/blog/wp-content/uploads/2020/07/header-contract-management-process-scaled-1-1568x1046.jpg"
                    alt="Contractor workflow"
                    className="w-full h-auto object-cover rounded-3xl shadow-lg"
                />
                </motion.div>
            </div>
            </div>
        </div>
        </section>
    )
}