"use client"

import { motion, Variants } from "framer-motion";

// Variants for text animations
const textVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, duration: 0.6 },
  },
};

const GlobalHRIS: React.FC = () => {
  return (
    <section className="py-20 bg-[#FFFBF4]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row-reverse items-center gap-12">
        {/* Right Content (Text) */}
        <motion.div
          className="lg:w-1/2 space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p
            className="text-blue-500 font-semibold text-lg lg:text-xl"
            variants={textVariant}
          >
            GLOBAL HRIS
          </motion.p>
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
            variants={textVariant}
          >
            Reduce HR costs & save 150+ hours on compliance
          </motion.h2>
          <motion.div className="space-y-6 text-gray-700 text-lg lg:text-xl">
            <motion.p variants={textVariant}>
              Make spreadsheets and siloed data a thing of the past. Our
              global-first HR system consolidates your entire global workforce—
              local employees, EORs, and contractors—into one, powerful HR
              platform designed to give your team an exceptional experience.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-12 mt-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={cardVariant}>
              <p className="text-4xl lg:text-5xl font-bold text-gray-900">52%</p>
              <h3 className="text-xl lg:text-2xl text-gray-700 font-semibold">
                Saving in fees
              </h3>
            </motion.div>
            <motion.div variants={cardVariant}>
              <p className="text-4xl lg:text-5xl font-bold text-gray-900">150 hrs</p>
              <h3 className="text-xl lg:text-2xl text-gray-700 font-semibold">
                Saved on hiring compliance
              </h3>
            </motion.div>
          </motion.div>

          <motion.div variants={cardVariant}>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg transition text-lg lg:text-xl mt-8">
              Book a demo
            </button>
          </motion.div>
        </motion.div>

        {/* Left Image */}
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -60, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.img
            src="https://d2fl3xywvvllvq.cloudfront.net/wp-content/uploads/2021/11/working-scaled.jpg"
            alt="Global HRIS"
            className="w-full h-auto rounded-xl shadow-lg"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 100 }}
          />
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-6 mt-20 grid grid-cols-1 md:grid-cols-3 gap-12">
        <motion.div
          className="bg-[#FEF5E6] p-4 rounded-xl flex flex-col items-center text-center space-y-4"
          initial="hidden"
          whileInView="visible"
          variants={cardVariant}
          viewport={{ once: true }}
        >
          <h6 className="text-lg font-semibold text-gray-900">
            Automate onboarding tasks
          </h6>
          <p className="text-gray-600 text-base lg:text-lg">
            Contractor Pay helps eliminate manual work, and reduces onboarding
            time by over 50%. Run background checks, provision equipment and app
            access, and automate onboarding tasks and emails in just a few
            clicks.
          </p>
          <img
            src="https://website-media.deel.com/card_illustration_checklist_e338046a77.png"
            alt="Automate onboarding tasks"
            className="w-full max-w-xs h-auto"
          />
        </motion.div>

        <motion.div
          className="bg-[#FEF5E6] p-4 rounded-xl flex flex-col items-center text-center space-y-4"
          initial="hidden"
          whileInView="visible"
          variants={cardVariant}
          viewport={{ once: true }}
        >
          <h6 className="text-lg font-semibold text-gray-900">
            Manage day-to-day HR
          </h6>
          <p className="text-gray-600 text-base lg:text-lg">
            Empower your team with a self-serve HR platform. Upload documents,
            track payments, manage time off and expenses, get tax help, and much
            more with Contractor Pay.
          </p>
          <img
            src="https://website-media.deel.com/card_day_to_day_hr_86bbb5ae9c.png"
            alt="Manage day-to-day HR"
            className="w-full max-w-xs h-auto"
          />
        </motion.div>

        <motion.div
          className="bg-[#FEF5E6] p-4 rounded-xl flex flex-col items-center text-center space-y-4"
          initial="hidden"
          whileInView="visible"
          variants={cardVariant}
          viewport={{ once: true }}
        >
          <h6 className="text-lg font-semibold text-gray-900">
            Convert contractors to employees in 100+ countries
          </h6>
          <p className="text-gray-600 text-base lg:text-lg">
            Transition a contractor to an employee with Contractor Pay’s employer
            of record services, or pay them through your own entity. The HR
            platform scales with your business.
          </p>
          <img
            src="https://website-media.deel.com/card_switch_worker_type_e01dedee0d.png"
            alt="Convert contractors to employees"
            className="w-full max-w-xs h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalHRIS;
