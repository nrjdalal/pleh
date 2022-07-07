import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Mobile from 'components/Mobile' // ~ For mobile development only, remove at production

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="h-screen w-screen overflow-x-hidden">
        <Mobile>
          <Component {...pageProps} />
        </Mobile>
      </div>
    </>
  )
}

export default MyApp
