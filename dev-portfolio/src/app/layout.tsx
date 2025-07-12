import Navbar from '../components/Navbar'
import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
