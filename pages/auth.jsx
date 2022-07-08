import Link from 'next/link'

const Home = () => {
  return (
    <div className="relative h-full w-full bg-slate-100 ">
      <div className="absolute bottom-0 px-8 text-slate-900">
        <h1 className="text-2xl">Please enter you number.</h1>

        <h2 className="mt-2 text-2xl">This is so we can book appointments for you.</h2>

        <div className="mb-16 mt-24 flex justify-between">
          <input
            type="text"
            name=""
            className="h-14 w-[216px] rounded-2xl border-2 font-mono text-3xl text-slate-700"
            maxLength="10"
          />

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
