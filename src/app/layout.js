import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

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

      <Script id="googleScript" sync src="https://translate.google.com/translate_a/element.js?cb=loadGoogleTranslate">
      </Script>
      <Script strategy='afterInteractive' id="googleTranslate">
        {`function loadGoogleTranslate(){
          new google.translate.TranslateElement("google_element");
        }`}
      </Script>
      <Script async id="ggoleAnalytics" src="https://www.googletagmanager.com/gtag/js?id=G-Z08KQJ4YH6"></Script>
      <Script id="anayalyticsScript">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-Z08KQJ4YH6');`}
      </Script>
      <body className={inter.className} >
        <main id="google_element">
          <Theme>
            {children}
          </Theme>
        </main>
        <div id="overlays"></div>
      </body>

    </html>
  )
}
