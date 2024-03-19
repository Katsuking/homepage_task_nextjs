import React, { useDebugValue } from 'react'

const Price = () => {
  return (
    <section>
      <div className="px-10 items-center text-center">
        <h2 className="text-[30px] font-bold">料金プラン</h2>
        <div className="diff aspect-[16/9]">
          <div className="diff-item-1">
            <div className="bg-primary text-primary-content text-9xl font-black grid place-content-center">
              <h3>OPLAN</h3>
            </div>
          </div>
          <div className="diff-item-2">
            <div className="bg-base-200 text-9xl font-black grid place-content-center">
              general
            </div>
          </div>
          <div className="diff-resizer"></div>
        </div>
      </div>
    </section>
  )
}

export default Price
