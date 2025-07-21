import '../styles/globals.css';
import type { ReactNode } from 'react';
import Navbar from '@/components/layouts/Navbar';
import { Footer } from '@/components/layouts/Footer';
import PageTransition from '@/components/transition/PageTransition';
import { Seo } from '@/components/common/Seo';
import Providers from './providers';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Providers>
          <Seo />
          <Navbar />
          <PageTransition>
            <main className="mainLayout">{children}</main>
          </PageTransition>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
