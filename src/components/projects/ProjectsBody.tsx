'use client'

import AiSpy from './AiSpy'
import Crux from './Crux'
import Flattie from './Flattie'
import Meow from './Meow'

export default function ProjectBody() {
  return (
    <div className="text-black bg-white rounded-lg shadow-lg my-3 w-fit mx-auto flex  max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-[90vw] flex-col items-center text-center">
      <div className="">
        <h1 className="text-3xl font-bold mt-6 mx-4 text-black bg-green-200 py-2 font-mono px-3 inline-block">
          Full-Stack Projects
        </h1>
      </div>
      <div className="mt-5 m-8 flex gap-4">
        <Crux />
        <Flattie />
        <Meow />
        <AiSpy />
      </div>
    </div>
  )
}
