/* eslint-disable @next/next/no-img-element */
const Mobile = ({ children }) => {
  return (
    <>
      <div className="h-screen w-screen sm:hidden">{children}</div>

      {/* 640px view */}
      <div className="relative mt-4 hidden h-[98%] w-screen items-center justify-center sm:flex ">
        <div className="absolute top-4 aspect-[0.47/1] h-[92%] rounded-3xl" />

        <img className="absolute h-full" src="/md-iPhone-13-Pro.png" alt="" />

        <div
          id="hideScrollbar"
          className="z-10 aspect-[120.5/250] h-[88%] overflow-y-scroll rounded-b-[40px] rounded-t-[1%] "
        >
          {children}
        </div>
      </div>

      <style jsx>{`
        #hideScrollbar::-webkit-scrollbar {
          display: none;
        }
        #hideScrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  )
}

export default Mobile
