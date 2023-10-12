import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import '@/styles/globals.css'
import Header from '@/components/Header'
//import InitMocks from '@/mocks'

//initMockAPI()
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Header/>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}