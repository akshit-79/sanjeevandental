'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Users, Stethoscope, Cpu, DollarSign, Shield, ClipboardCheck } from 'lucide-react'

const reasons = [
  {
    icon: Users,
    title: 'Experienced Team of Specialists',
    description: 'Highly qualified dental professionals with years of expertise',
  },
  {
    icon: Stethoscope,
    title: 'Pain-Free Modern Techniques',
    description: 'Latest technology ensuring comfortable and painless treatments',
  },
  {
    icon: Cpu,
    title: 'State-of-the-art Equipment',
    description: 'Advanced dental technology for precise and effective care',
  },
  {
    icon: DollarSign,
    title: 'Affordable EMI Options',
    description: 'Flexible payment plans to make dental care accessible',
  },
  {
    icon: Shield,
    title: 'Hygienic & Safe Environment',
    description: 'Strict sterilization protocols and safety standards',
  },
  {
    icon: ClipboardCheck,
    title: 'Personalized Care Plans',
    description: 'Customized treatment approaches for individual needs',
  },
]

export default function WhyUsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="why-us" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-96 md:h-full min-h-96"
          >
            <Image
              src="/placeholder.jpg"
              alt="Our dental team and facilities"
              fill
              className="object-cover rounded-2xl"
            />
          </motion.div>

          {/* Right: Content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="section-title"
            >
              Why Choose Us
            </motion.h2>

            <motion.div
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              {reasons.map((reason, index) => {
                const Icon = reason.icon
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-secondary font-heading">
                        {reason.title}
                      </h3>
                      <p className="text-muted-foreground mt-1">
                        {reason.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
