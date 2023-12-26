import type { AppProps } from 'next/app'
import { MSWComponent } from '@/mocks/MSWComponent'
import GlobalStyle from '@/styles/GlobalStyle'
import Header from '@/components/Header'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MSWComponent>
      <title>Rapidus</title>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <GlobalStyle/>
        <Header/>
        <Component {...pageProps} />
    </MSWComponent>
  )
}