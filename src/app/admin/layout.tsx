import React, { ReactNode } from 'react'
import '@/styles/globals.css';
import Sidebar from '@/components/layouts/Sidebar/Sidebar';
import Header from '@/components/layouts/Header/Header';

function AdminRootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <main className='admin-layout'>
          <Sidebar />
          <div className='admin-content'>
            <Header />
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}

export default AdminRootLayout