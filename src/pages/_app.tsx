import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import Header from '@/components/Header'
import { MSWComponent } from '@/mocks/MSWComponent'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MSWComponent>
      <title>Rapidus</title>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <Header />
        <Component {...pageProps} />
    </MSWComponent>
  )
}