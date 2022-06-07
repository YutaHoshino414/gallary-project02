import Layout from '../components/Layout'
import '../styles/globals.css'
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  const route = useRouter();
  return (
    <AnimatePresence exitBeforeEnter>
      <Layout key={route.asPath}>
        <Component {...pageProps}  />
      </Layout>
    </AnimatePresence>
  )
}

export default MyApp
