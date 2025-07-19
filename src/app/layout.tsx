// app/layout.tsx
import './globals.css';
import type { ReactNode } from 'react';
import Navbar from '@/components/layouts/Navbar';
import PageTransition from '@/components/transition/PageTransition';
import { WebTitle } from '@/types/index';

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
      </body>
    </html>
  );
}
