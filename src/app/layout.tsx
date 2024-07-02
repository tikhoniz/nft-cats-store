import MainFooter from '@/components/main-footer/main-footer'
import './globals.css'
import { MainHeader } from '@/components/main-header/main-header'

export const metadata = {
  title: 'Street Cats Lives',
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
        <div id="portal" />
      </body>
    </html>
  )
}
