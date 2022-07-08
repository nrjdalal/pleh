import Link from 'next/link'

const Home = () => {
  return (
    <div className="relative h-full w-full bg-slate-100 ">
      <div className="absolute bottom-0 px-8 text-slate-900">
        <h1 className="text-2xl">We are Pleh!</h1>

        <h2 className="mt-2 text-2xl">And we are going to make us better.</h2>

        <Link href="/auth">
          <button className="mb-16 mt-24 rounded-full bg-slate-900 p-4 px-20 text-xl tracking-wider text-white">
            Let&apos;s Go
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Home
