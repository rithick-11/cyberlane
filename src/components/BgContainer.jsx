

const BgContainer = () => {
  return (
    <div className="fixed inset-0 -z-1 h-screen bg-gradient-to-br from-gray-800 to-gray-950">
        <div className="pink-animate h-[25vw] w-[25vw] -right-30 -top-20 opacity-60 absolute bg-cyan-500/20 rounded-full backdrop filter mix-blend-screen blur-3xl shadow-lg"></div>
        <div className="purple-animate h-[20vw] w-[20vw] -right-10 top-10 opacity-60 absolute bg-purple-500 rounded-full backdrop blur-3xl filter mix-blend-screen shadow-lg"></div>
        <div className="delay-1000 blur-flow absolute md:top-80 h-14 w-14 top-40 left-20 md:left-60 md:h-20 md:w-20 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="delay-700 blur-flow absolute md:top-90 h-14 w-14 top-30 left-14 md:left-50 md:h-20 md:w-20 bg-amber-500 rounded-full blur-3xl"></div>
        <div className="delay-1000 blur-flow absolute md:top-100 h-14 w-14 top-56 left-12 md:left-70 md:h-30 md:w-30 bg-orange-500/50 rounded-full blur-3xl"></div>
      </div>
  )
}

export default BgContainer