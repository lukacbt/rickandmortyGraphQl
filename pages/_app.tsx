import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from '../components/header'
import { Layout } from '../components/layout/Layout'
import { SearchContextProvider } from '../context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SearchContextProvider>
        <Header />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SearchContextProvider>
    </>
  ) 
}
export default MyApp
