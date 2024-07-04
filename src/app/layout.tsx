import MainFooter from '@/components/main-footer/main-footer'
import { MainHeader } from '@/components/main-header/main-header'
import { SITE_DESCRIPTION, SITE_NAME } from '@/constant/seo.const'
import { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    absolute: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,

  icons: {
    shortcut: '/icon.png',
    icon: '/icon.png',
    apple: '/touch-icons/256x256.png', // для PWA
    other: [
      {
        rel: 'touch-icons',
        url: '/touch-icons/256x256.png',
        sizes: '256x256',
        type: 'image/png',
      },
    ],
  },
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: process.env.NEXT_PUBLIC_DOMAIN,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: process.env.NEXT_PUBLIC_DOMAIN,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_DOMAIN}/touch-icons/256x256.png`,
        width: 256,
        height: 256,
        alt: SITE_NAME,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
        <MainFooter />
        <div id="portal" />
      </body>
    </html>
  )
}
