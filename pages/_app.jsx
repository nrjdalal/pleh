import '../styles/globals.css'

import Mobile from 'components/Mobile' // ~ For mobile development only, remove at production

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="h-screen w-screen overflow-x-hidden bg-slate-100 font-dmSans tracking-wide">
        <Mobile>
          <Component {...pageProps} />
        </Mobile>
      </div>
    </>
  )
}

export default MyApp
