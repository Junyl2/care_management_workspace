    // app/layout.tsx
    import './globals.css';
    import type { ReactNode } from 'react';
    import Navbar from '@/components/layouts/Navbar';
    import PageTransition from '@/components/transition/PageTransition';

    export const metadata = {
      title: 'Service Site',
      description: 'Accessible service booking site',
    };

    export default function RootLayout({ children }: { children: ReactNode }) {
      return (
        <html lang="en">
          <body>
            <Navbar />
            <PageTransition>{children}</PageTransition>
          </body>
        </html>
      );
    }
