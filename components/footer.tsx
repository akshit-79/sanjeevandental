'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <Link href="#home" className="flex items-center gap-2 mb-4">
              <Image
                src="/sanjeevan_logo.png"
                alt="Sanjeevan Dental Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <div>
                <div className="text-lg font-bold">SANJEEVAN</div>
                <div className="text-xs opacity-80">Dental Care</div>
              </div>
            </Link>
            <p className="text-sm opacity-80">
              Caring for your smile since 2014. Premium dental care with a gentle touch.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 font-heading">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link href="#home" className="hover:opacity-100 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:opacity-100 transition-opacity">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#why-us" className="hover:opacity-100 transition-opacity">
                  Why Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 font-heading">Services</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link href="#services" className="hover:opacity-100 transition-opacity">
                  General Dentistry
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:opacity-100 transition-opacity">
                  Orthodontics
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:opacity-100 transition-opacity">
                  Teeth Whitening
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:opacity-100 transition-opacity">
                  Implants
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4 font-heading">Contact</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link href="tel:+91-XXXXXXXXXX" className="hover:opacity-100 transition-opacity">
                  +91-XXXXXXXXXX
                </Link>
              </li>
              <li>
                <Link href="mailto:hello@sanjeevandental.com" className="hover:opacity-100 transition-opacity">
                  hello@sanjeevandental.com
                </Link>
              </li>
              <li>123 Smile Street</li>
              <li>Dental Plaza, City 12345</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-75">
          <p>
            © {currentYear} Sanjeevan Dental & Orthodontic Care. All rights reserved.
          </p>
          <p className="text-xs mt-4 md:mt-0">
            Disclaimer: Results may vary for individual patients.
          </p>
        </div>
      </div>
    </footer>
  )
}
