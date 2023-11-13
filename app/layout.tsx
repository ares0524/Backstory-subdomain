"use client"

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'react-quill/dist/quill.snow.css'
import { Provider } from 'react-redux'
import store from '@/store/store'
import 'react-toastify/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Backstory - Stuff',
//   description: 'Backstory Subdomain Website',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body className={inter.className}>
            {children}
            <ToastContainer />
        </body>
      </Provider>
    </html>
  )
}
