import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mattheos Tasios| Freelancer',
  description: 'I build top Web application in REact js,React Native, JavaScript and Java',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
        
      </body>
      <div id="overlays"></div>
    </html>
  )
}
