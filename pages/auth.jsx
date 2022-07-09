import Link from 'next/link'

const Home = () => {
  return (
    <div className="relative h-full w-full bg-slate-100 ">
      <div className="absolute bottom-0 px-8 text-slate-900">
        <h1 className="text-2xl">Please enter you number.</h1>

        <h2 className="mt-2 text-2xl">This is so we can book appointments for you.</h2>

        <input
          type="text"
          name=""
          className="mt-24 h-14 w-full rounded-full border-2 text-center font-mono text-3xl text-slate-700"
          maxLength="10"
        />

        <div className="mb-16 mt-12 flex justify-between">
          <Link href="/">
            <button className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-slate-900 bg-slate-100 text-xl tracking-wider text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-slate-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
          </Link>

          <Link href="/auth">
            <button className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-xl tracking-wider text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
