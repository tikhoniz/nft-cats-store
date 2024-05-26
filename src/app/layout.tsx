import MainFooter from '@/components/main-footer/main-footer'
import MainHeader from '@/components/main-header/main-header'
import Head from 'next/head'
import './globals.css'

export const metadata = {
  title: 'Street Cat Lives',
  description:
    'Discover a collection of heartwarming NFTs showcasing the resilience of remarkable cats. From overcoming adversity to embracing second chances, each artwork captures the indomitable spirit of these feline companions. By acquiring these NFTs, you not only add captivating art to your collection but also support initiatives to aid animals in need. Join us in celebrating the strength and resilience of these extraordinary beings through digital storytelling',

  icons: {
    icon: '/icon.png',
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
      </body>
    </html>
  )
}
