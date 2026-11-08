
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <Link href="/" className="logo">
          Shop<span>Sphere.</span>
        </Link>

        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  )
}
