"use client"

import { motion, useInView} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import CountUp from 'react-countup';
import { 
  Globe, 
  Shield, 
  Users,
  Clock,
} from "lucide-react";



export default function Stats(){

    const statsRef = useRef(null);
    const statsInView = useInView(statsRef, { once: true });
    const [startCount, setStartCount] = useState(false);
    const accentFrom = "from-blue-500";
    const accentTo = "to-blue-600";

    useEffect(() => {
        if (statsInView) setStartCount(true);
    }, [statsInView]);

    return (
        <section ref={statsRef} className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Section Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900">Our Impact</h2>
        <p className="text-gray-600 mt-3 text-lg max-w-xl mx-auto">
          Supporting contractors and businesses worldwide with reliability and trust.
        </p>
      </div>

      {/* Subtle background shapes */}
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-blue-200 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-blue-100 rounded-full opacity-10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

          {/* Countries */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 text-center shadow-md rounded-2xl bg-white hover:shadow-lg transition-shadow duration-300">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`w-14 h-14 mx-auto mb-5 rounded-full bg-gradient-to-r ${accentFrom} ${accentTo} flex items-center justify-center text-white shadow-sm`}
              >
                <Globe className="w-6 h-6" />
              </motion.div>
              <div className={`text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${accentFrom} ${accentTo} mb-2`}>
                {startCount && <CountUp end={150} duration={2} suffix="+" />}
              </div>
              <div className="text-gray-700 font-medium">Countries supported</div>
            </Card>
          </motion.div>

          {/* Compliance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 text-center shadow-md rounded-2xl bg-white hover:shadow-lg transition-shadow duration-300">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`w-14 h-14 mx-auto mb-5 rounded-full bg-gradient-to-r ${accentFrom} ${accentTo} flex items-center justify-center text-white shadow-sm`}
              >
                <Shield className="w-6 h-6" />
              </motion.div>
              <div className={`text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${accentFrom} ${accentTo} mb-2`}>
                {startCount && <CountUp end={99.9} duration={2} suffix="%" />}
              </div>
              <div className="text-gray-700 font-medium">Compliance rate</div>
            </Card>
          </motion.div>

          {/* Active Contractors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="p-8 text-center shadow-md rounded-2xl bg-white hover:shadow-lg transition-shadow duration-300">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`w-14 h-14 mx-auto mb-5 rounded-full bg-gradient-to-r ${accentFrom} ${accentTo} flex items-center justify-center text-white shadow-sm`}
              >
                <Users className="w-6 h-6" />
              </motion.div>
              <div className={`text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${accentFrom} ${accentTo} mb-2`}>
                {startCount && <CountUp end={10000} duration={2} suffix="+" />}
              </div>
              <div className="text-gray-700 font-medium">Active contractors</div>
            </Card>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="p-8 text-center shadow-md rounded-2xl bg-white hover:shadow-lg transition-shadow duration-300">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`w-14 h-14 mx-auto mb-5 rounded-full bg-gradient-to-r ${accentFrom} ${accentTo} flex items-center justify-center text-white shadow-sm`}
              >
                <Clock className="w-6 h-6" />
              </motion.div>
              <div className={`text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${accentFrom} ${accentTo} mb-2`}>
                {startCount && <CountUp end={24} duration={2} suffix="/7" />}
              </div>
              <div className="text-gray-700 font-medium">Support available</div>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
    )
}