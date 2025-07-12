import VantaNetBackground from '@/components/VantaNetBackground'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import VantaBackground from '@/components/VantaNetBackgroundDark'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        <VantaNetBackground />
        {/* <VantaBackground /> */}
        <main>{children}</main>
      </body>
    </html>
  )
}
