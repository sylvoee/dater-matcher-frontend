'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const navs = [
    { href: '/', label: 'Home' },
    { href: '/chat', label: 'Chat' },
    { href: '/login', label: 'Login' },
    { href: '/signup', label: 'Signup' }
  ];
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-blur sticky-top border-bottom border-light-subtle">
      <div className="container">
        <Link className="navbar-brand fw-bold" href="/">
          <span className="text-gradient">CharmConnect</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMain">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navMain">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {navs.map(n => (
              <li key={n.href} className="nav-item">
                <Link className={`nav-link ${pathname === n.href ? 'active' : ''}`} href={n.href}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
