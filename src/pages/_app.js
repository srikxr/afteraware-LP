import '@/styles/globals.css'
import localFont from '@next/font/local'

const Sequel = localFont({
  src: './fonts/SequelBlack.otf',
  variable: '--font-Sequel-black',
})

export default function App({ Component, pageProps }) {
  return (
    <main className={`${Sequel.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}
