
import './globals.css'
import Navbar from '@/components/Navbar'
import { FavoriteProvider } from '@/context/FavoriteContext'

export const metadata = {
  title: 'ShopSphere | Product Showcase',
  description: 'Discover and explore our product collection.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <FavoriteProvider>
          <Navbar />
          {children}

          <footer className="footer">
            <p>
              © 2026 ShopSphere. Built with Next.js.
            </p>
          </footer>
        </FavoriteProvider>
      </body>
    </html>
  )
}
