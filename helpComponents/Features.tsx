"use client"

import { motion, useInView, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Shield,
  DollarSign,
  FileText,
} from "lucide-react";


export default function Features(){

    const digitalContractsImage = "https://www.anitian.com/wp-content/uploads/2019/05/What-is-Compliance-Automation-Anitian.png?w=900"
    const globalNetworkImage = "https://www.itedgenews.africa/wp-content/uploads/2021/12/seamless-payment.jpg"
    const womanWorkingImage = "https://www.builtintelligence.com/cdn/shop/articles/Contract_Management_Software_c01187db-8a41-4a48-9e25-fd4ee32cdbc1.jpg?v=1747830744"

    const features = [
        {
            icon: Shield,
            title: "Automated Compliance",
            description: "Stay compliant with local tax laws and regulations in 150+ countries automatically.",
            stats: "99.9% compliance rate",
            image: digitalContractsImage,
        },
        {
            icon: DollarSign,
            title: "Seamless Payments",
            description: "Pay contractors in their preferred currency with competitive exchange rates.",
            stats: "50+ currencies",
            image: globalNetworkImage,
        },
        {
            icon: FileText,
            title: "Contract Management",
            description: "Create, manage, and store contracts with built-in legal templates.",
            stats: "Legal templates included",
            image: womanWorkingImage,
        },
    ];


    return(
        <section id="compliance-features" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center h-screen">
            {/* Left Content */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-8 lg:space-y-12"
            >
                <p className="text-gray-600 font-semibold uppercase tracking-wide">Compliance</p>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-snug">
                Global contractor hiring made easy with automated compliance
                </h2>
                <p className="text-lg lg:text-xl text-gray-700 max-w-lg">
                Our platform ensures you're always compliant while making contractor 
                payments seamless across the globe. Stay ahead with automatic updates, 
                compliant onboarding, and real-time alerts.
                </p>

                {/* Stats */}
                <div className="flex gap-12 mt-6">
                <div className="pr-4">
                    <p className="text-3xl lg:text-4xl font-bold text-gray-900">25%</p>
                    <p className="text-sm lg:text-base text-gray-600">Reduction in HR workload</p>
                </div>
                <div className="pr-4">
                    <p className="text-3xl lg:text-4xl font-bold text-gray-900">80%</p>
                    <p className="text-sm lg:text-base text-gray-600">Time saved on admin</p>
                </div>
                </div>

                {/* CTA */}
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
                >
                <Button size="lg" className="mt-6 lg:mt-8 bg-blue-600 hover:bg-blue-700 text-white">
                    Book a Demo
                </Button>
                </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative w-full lg:w-[110%] -translate-x-4 h-full flex items-center"
            >
                <img
                src="https://images.pexels.com/photos/7792863/pexels-photo-7792863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Contractor compliance illustration"
                className="rounded-2xl shadow-xl object-cover w-full h-full scale-105 hover:scale-110 transition-transform duration-700"
                />
            </motion.div>
            </div>

            {/* Feature Grid */}
            <div id="features" className="mt-20 bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
                >
                    <Card className="bg-[#FEF5E6] p-8 h-full flex flex-col justify-between rounded-xl shadow-sm hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-2 group">
                    {/* Text Section */}
                    <div>
                        <h3 className="text-xl font-bold mb-3 text-gray-900 transition-colors duration-300 group-hover:text-gray-800">
                        {feature.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                        {feature.description}
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="mt-6 overflow-hidden rounded-lg">
                        <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                    </Card>
                </motion.div>
                ))}
            </div>
            </div>
        </div>
        </section>
    )
}