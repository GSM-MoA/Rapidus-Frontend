import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import '@/styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/HomePage/Footer'
import { QueryClient, QueryClientProvider } from 'react-query'
//import InitMocks from '@/mocks'

//initMockAPI()

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <title>Rapidus</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </RecoilRoot>
    </QueryClientProvider>
  )
}