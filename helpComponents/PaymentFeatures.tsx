"use client"

import { motion } from "framer-motion";

const features = [
  {
    title: "Automate invoice management",
    description:
      "Unlike other systems, you’ll get instant, digital invoices after each payment. Plus, sync everything to your favorite accounting tools.",
    image: "https://website-media.deel.com/card_invoice_sync_83692a0e4a.png",
  },
  {
    title: "Pay globally in one transfer",
    description:
      "Review your team’s earnings, approve any expenses, then pay everyone with one bulk payment. We ensure your team is paid on time, every time.",
    image: "https://website-media.deel.com/card_pay_globally_52d9b29c32.png",
  },
  {
    title: "15 flexible payment options",
    description:
      "Let your team withdraw their earnings in 150 currencies with unrivalled payment options, including Crypto, Wise, Revolut and more. They’ll save on exchange rates and fees, and you don’t even have to lift a finger.",
    image: "https://website-media.deel.com/card_payment_options_a8a48426a9.png",
  },
  {
    title: "Give contractors access to Deel Card",
    description:
      "With a Deel Card, your team can access their funds fast, spend their earnings securely online or in-store, and hold their balance in USD for more stability.",
    image: "https://website-media.deel.com/card_deel_card_fca0359d3d.png",
  },
];

const FeatureCards=() => {
  return (
    <section className="bg-blue-400 w-full py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-start gap-6 bg-white rounded-xl shadow-lg p-6"
          >
            <h6 className="text-xl md:text-2xl font-semibold text-gray-900">
              {feature.title}
            </h6>
            <p className="text-md md:text-lg text-gray-800">{feature.description}</p>
            <motion.img
              src={feature.image}
              alt={feature.title}
              className="mt-4 w-full rounded-lg shadow-md object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 120 }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCards;
