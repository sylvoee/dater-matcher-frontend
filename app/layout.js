import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Script from 'next/script';
import { AuthProvider } from './context/AuthContext';

export const metadata = {
  title: 'CharmConnect — Modern Dating UI',
  description: 'A clean, mobile-friendly dating UI with Bootstrap + Next.js App Router.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
        {children}
        {/* Bootstrap JS (includes Popper) */}
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
     </AuthProvider>
      </body>
    </html>
  );
}
