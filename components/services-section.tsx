'use client'

import { motion } from 'framer-motion'
import { Smile, Sparkles, Zap, Briefcase, Wind, Palette } from 'lucide-react'

const services = [
  {
    icon: Smile,
    title: 'General Dentistry',
    description: 'Comprehensive dental care including cleanings, fillings, and preventive treatments.',
  },
  {
    icon: Briefcase,
    title: 'Orthodontics & Braces',
    description: 'Advanced braces and aligners to achieve your perfect smile alignment.',
  },
  {
    icon: Sparkles,
    title: 'Teeth Whitening',
    description: 'Professional whitening treatments for a brighter, more radiant smile.',
  },
  {
    icon: Zap,
    title: 'Dental Implants',
    description: 'Durable and natural-looking implant solutions for missing teeth.',
  },
  {
    icon: Wind,
    title: 'Root Canal Treatment',
    description: 'Gentle and effective root canal therapy to save your natural teeth.',
  },
  {
    icon: Palette,
    title: 'Cosmetic Dentistry',
    description: 'Aesthetic treatments to enhance the beauty of your smile.',
  },
]

export default function ServicesSection() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Our Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive dental solutions tailored to your needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="bg-white border-2 border-border rounded-xl p-8 hover:border-secondary transition-all duration-300 group cursor-pointer"
              >
                {/* Icon Container */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-secondary mb-3 font-heading">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Top Border Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-t-xl" />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
