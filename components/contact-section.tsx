'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export default function ContactSection() {
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
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We&apos;re here to answer your questions and help you schedule an appointment
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Details */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {/* Phone */}
            <motion.div variants={itemVariants} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary font-heading">
                  Phone
                </h3>
                <p className="text-muted-foreground">+91-XXXXXXXXXX</p>
                <p className="text-sm text-muted-foreground">Mon-Sat, 9AM-7PM</p>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div variants={itemVariants} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary font-heading">
                  Email
                </h3>
                <Link
                  href="mailto:hello@sanjeevandental.com"
                  className="text-primary hover:underline"
                >
                  hello@sanjeevandental.com
                </Link>
                <p className="text-sm text-muted-foreground">We&apos;ll reply within 24 hours</p>
              </div>
            </motion.div>

            {/* Address */}
            <motion.div variants={itemVariants} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary font-heading">
                  Location
                </h3>
                <p className="text-muted-foreground">
                  123 Smile Street, Dental Plaza
                  <br />
                  Your City, State 12345
                </p>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div variants={itemVariants} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary font-heading">
                  Hours
                </h3>
                <p className="text-muted-foreground">Monday – Saturday: 9:00 AM – 7:00 PM</p>
                <p className="text-muted-foreground">Sunday: Closed</p>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="pt-6 border-t border-border">
              <h3 className="text-lg font-semibold text-secondary mb-4 font-heading">
                Follow Us
              </h3>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary text-primary hover:text-white flex items-center justify-center transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary text-primary hover:text-white flex items-center justify-center transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary text-primary hover:text-white flex items-center justify-center transition-all"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-96 rounded-2xl overflow-hidden bg-gray-200"
          >
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.3344410000003!2d-74.0060!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a318f51d4a7%3A0x6f0f20a8a0c5e2f3!2sNew%20York%20City!5e0!3m2!1sen!2sus!4v1234567890"
              title="Sanjeevan Dental Clinic Location"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
