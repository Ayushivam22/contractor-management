"use client"


import { motion } from "framer-motion";
import { useState } from "react";

    const faqs = [
        {
            question: "What is an international contractor? How do I hire one?",
            answer: `An international contractor is a self-employed professional who offers services to clients on a project-based or fixed-term basis. International contractors can be located anywhere in the world and are responsible for their own taxes and benefits. Hiring international contractors offers flexibility and scalability to companies who want to expand globally.`
        },
        {
            question: "How do I pay an international contractor?",
            answer: `Paying contractors around the world can be complex. You can pay contractors in multiple countries, currencies, and methods, and automate invoicing to ensure timely payments.`
        },
        {
            question: "What payment methods are available?",
            answer: `There are multiple international payment methods available including bank transfer, PayPal, Wise, Payoneer, and more.`
        },
        {
            question: "Can I onboard contractors from multiple countries?",
            answer: `Yes, you can hire and onboard contractors from multiple countries. Ensure that you follow local labor laws and compliance regulations to avoid misclassification risks.`
        },
        {
            question: "Do contractors need to handle their own taxes?",
            answer: `International contractors are typically responsible for their own taxes and benefits. It's important to provide clear contracts and guidance for tax compliance in their country.`
        },
        {
            question: "How can I ensure compliance when hiring globally?",
            answer: `You should assess misclassification risks, use proper contracts, collect all necessary documentation, and stay up-to-date with local labor laws. Tools that automate compliance checks can simplify this process.`
        },
    ];


    export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-[#FFFBF4] py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">FAQs</h2>
            <div className="space-y-4">
            {faqs.map((faq, index) => (
                <div key={index} className="border rounded-lg overflow-hidden">
                <button
                    className="w-full text-left p-4 bg-white flex justify-between items-center"
                    onClick={() => toggle(index)}
                >
                    <h3 className="text-xl font-semibold">{faq.question}</h3>
                    <span className="text-2xl">{openIndex === index ? "−" : "+"}</span>
                </button>
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={openIndex === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 bg-gray-50 text-gray-700"
                >
                    <p>{faq.answer}</p>
                </motion.div>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
}
