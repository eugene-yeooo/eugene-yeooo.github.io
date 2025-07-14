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
            <p className="text-xl font-semibold max-w-md font-mono -translate-y-3">
              This site is best viewed <br />
              on a larger screen.
              <br />
              <br />
              For the full experience, <br />
              please use a desktop or <br />
              enlarge your window.
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
