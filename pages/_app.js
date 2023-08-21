import '@/styles/globals.css'
import Layout from '@/components/Layout'
import { AnimatePresence } from "framer-motion"

export default function App({ Component, pageProps,router }) {
  return (
    <Layout>
      <AnimatePresence initial={false} mode="wait">
          <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </Layout>
  )
}
