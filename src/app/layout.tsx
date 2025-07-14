'use client'

import '../styles/globals.css'
import VantaBackground from '@/components/VantaNetBackgroundDark'
import { useIsMobile } from '@/hooks/useIsMobile'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isMobile = useIsMobile()

  return (
    <html lang="en">
      <body className="relative">
        {isMobile ? (
          <div className="h-screen w-screen flex items-center justify-center bg-black text-white px-6 text-center">
            <p className="text-xl font-semibold max-w-md font-mono">
              This site is best viewed on a larger screen.
              <br />
              <br />
              Please use a tablet or desktop for the full experience.
            </p>
          </div>
        ) : (
          <>
            <VantaBackground />
            <main>{children}</main>
          </>
        )}
      </body>
    </html>
  )
}
