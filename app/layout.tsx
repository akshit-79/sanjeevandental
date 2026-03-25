import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Sanjeevan Dental & Orthodontic Care | Premium Dental Solutions',
  description:
    'Advanced dental care with a gentle touch. Offering general dentistry, orthodontics, teeth whitening, implants, and cosmetic dental services.',
  keywords: [
    'dentist',
    'dental clinic',
    'orthodontics',
    'teeth whitening',
    'dental implants',
    'cosmetic dentistry',
  ],
  openGraph: {
    title: 'Sanjeevan Dental & Orthodontic Care',
    description: 'Your smile, perfected. Advanced dental care with a gentle touch.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#1B2F5E',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning style={{ fontFamily: inter.style.fontFamily }}>
      <head>
        <style suppressHydrationWarning>{`
          :root {
            --font-inter: ${inter.style.fontFamily};
            --font-poppins: ${poppins.style.fontFamily};
          }
        `}</style>
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
