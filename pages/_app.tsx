import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from '../components/header'
import { Layout } from '../components/layout/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  ) 
}
export default MyApp
