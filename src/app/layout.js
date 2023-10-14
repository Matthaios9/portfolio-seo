import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mattheos Tasios| Freelancer',
  description: 'I build top Web application in REact js,React Native, JavaScript and Java',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <Script sync src="http://translate.google.com/translate_a/element.js?cb=loadGoogleTranslate">
      </Script>
      <Script strategy='afterInteractive'>
        {`function loadGoogleTranslate(){
          new google.translate.TranslateElement("google_element");
        }`}
      </Script>
      <body className={inter.className} id="google_element">
        {children}
        <div id="overlays"></div>
      </body>

    </html>
  )
}
