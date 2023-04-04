import '@/styles/globals.css'
import '@/styles/Navbar.css'
import '@/styles/Mainpage.css'
import '@/styles/Modal.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
