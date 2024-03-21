import React from 'react'
import Image from 'next/image'

const Merit = () => {
  return (
    <div className="flex flex-col md:flex-row mx-10 mt-10">
      <div className="w-full">
        <h1 className="text-center text-[25px]">オープランの場合</h1>
        <div className="grid h-20 flex-grow card bg-[#00004d] rounded-box place-items-center text-white">
          content
        </div>

        <div className="grid h-20 flex-grow card bg-[#00004d] rounded-box place-items-center  text-white mt-7">
          content
        </div>
      </div>

      <div className="divider divider-horizontal"></div>

      <div className="flex flex-col md:mt-10 w-full">
        <h1 className="text-center text-[25px]">他社の場合</h1>
        <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
          content
        </div>
        <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center mt-7">
          content
        </div>
      </div>
    </div>
  )
}

export default Merit
