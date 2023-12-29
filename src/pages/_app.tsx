import type { AppProps } from 'next/app'
import GlobalStyle from '@/styles/GlobalStyle'
import MSWComponent from '@/mocks/MSWComponent'
import Header from '@/components/Header'


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MSWComponent>
      <title>Rapidus</title>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <GlobalStyle/>
        <Header/>
         {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
    </MSWComponent>
  )
}