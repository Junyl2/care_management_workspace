// app/layout.tsx
import '../styles/globals.css';
import type { ReactNode } from 'react';
import Navbar from '@/components/layouts/Navbar';
import { Footer } from '@/components/layouts/Footer';
import PageTransition from '@/components/transition/PageTransition';
import { WebTitle } from '@/types';

export const metadata: WebTitle = {
  title: 'Service Site',
  description: 'Accessible service booking site',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <PageTransition>
          <main className="mainLayout">{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
