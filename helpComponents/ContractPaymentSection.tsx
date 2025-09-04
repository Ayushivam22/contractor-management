"use client"

import React from "react";
import { motion, Variants } from "framer-motion";
import FeatureCards from "./PaymentFeatures";
import Testimonials from "./Testimonials";

// Text animation variants
const textVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Stat card variants
const statVariant: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, duration: 0.6 },
  },
};

// Stagger container for stats
const statsContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3 } },
};

const ContractorPaymentsSection: React.FC = () => {
  return (
    <section className="w-full">
      {/* SVG Divider */}
      <div className="relative">
        <svg
          className="w-full h-32 text-blue-400"
          viewBox="0 0 1620 128"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0 128V74.6535L91.3465 48.8153C101.082 46.0615 111.106 44.4536 121.215 44.0243L1146.47 0.489582C1154.14 0.163835 1161.83 0.518387 1169.44 1.54908L1620 62.5824V128H0Z" />
        </svg>
      </div>

      {/* Payments Section */}
      <div className="bg-blue-400 w-full py-20">
        <div
          id="payments"
          className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.p
              className="text-base font-semibold text-gray-800 mb-2"
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              payments
            </motion.p>

            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "backOut" }}
              viewport={{ once: true }}
            >
              Simplify contractor payroll
            </motion.h2>

            <motion.p
              className="text-lg text-gray-800 mb-8"
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              Reduce admin time on global payments, and give your contractors
              the best payment experience possible. Contractor Pay is equipped
              with 15 different payment options, features to reduce duplicate,
              manual work—and has fewer fees than competitors.
            </motion.p>

            {/* Stats with staggered bounce-in */}
            <motion.div
              className="flex flex-col sm:flex-row gap-10 mb-8"
              id="benefits"
              initial="hidden"
              whileInView="visible"
              variants={statsContainer}
              viewport={{ once: true }}
            >
              <motion.div variants={statVariant}>
                <p className="text-3xl font-bold text-gray-900">200+</p>
                <h3 className="text-lg text-gray-800">Supported currencies</h3>
              </motion.div>
              <motion.div variants={statVariant}>
                <p className="text-3xl font-bold text-gray-900">150+</p>
                <h3 className="text-lg text-gray-800">
                  Countries where you can hire and pay
                </h3>
              </motion.div>
            </motion.div>

            {/* CTA Button */}
            <motion.a
              href="https://www.contractorpay.com/request-a-demo"
              target="_self"
              whileHover={{ scale: 1.1, rotate: -1 }}
              whileTap={{ scale: 0.95, rotate: 1 }}
            >
              <button className="px-6 py-3 bg-black text-white font-semibold rounded-xl shadow hover:bg-gray-900 transition">
                Book a demo
              </button>
            </motion.a>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 80, rotate: 2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.img
              src="https://website-media.deel.com/contractors_payments_a1db88dad1.jpg"
              alt="Contractor payments"
              className="w-full rounded-xl shadow-lg object-cover"
              whileHover={{ scale: 1.03, rotate: -0.5 }}
              transition={{ type: "spring", stiffness: 100 }}
            />
          </motion.div>
        </div>
      </div>

      <FeatureCards />
      <Testimonials />
    </section>
  );
};

export default ContractorPaymentsSection;
