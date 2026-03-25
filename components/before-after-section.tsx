'use client'

import { motion } from 'framer-motion'
import BeforeAfterSlider from './before-after-slider'

const transformations = [
  {
    beforeSrc: '/before-1.jpg',
    afterSrc: '/after-1.jpg',
    caption: 'Braces Treatment – 18 months',
  },
  {
    beforeSrc: '/before-1.jpg',
    afterSrc: '/after-1.jpg',
    caption: 'Teeth Whitening Treatment',
  },
  {
    beforeSrc: '/before-1.jpg',
    afterSrc: '/after-1.jpg',
    caption: 'Dental Implants Restoration',
  },
]

export default function BeforeAfterSection() {
  return (
    <section id="before-after" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Real Results</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Move the slider to see the transformation
          </p>
        </motion.div>

        {/* Sliders Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {transformations.map((transformation, index) => (
            <BeforeAfterSlider
              key={index}
              beforeSrc={transformation.beforeSrc}
              afterSrc={transformation.afterSrc}
              caption={transformation.caption}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
