import React, { useDebugValue } from 'react'
import Card from './card'

const Price = () => {
  return (
    <section>
      <div className="px-10  items-center text-center">
        <h2 className="text-6xl font-black">料金プラン</h2>
        {/* diff */}
        <div className="diff aspect-[16/9]">
          <div className="diff-item-1">
            <div className="bg-primary text-primary-content">
              {/* card */}
              <div className="px-10 h-full flex flex-col justify-center">
                <div className="h-1/6 text-center items-center">
                  <h3 className="text-5xl">OPLAN</h3>
                </div>
                <div className="className=h-5/6 justify-center items-stretch grid grid-rows-1 grid-cols-3 grid-flow-row gap-4">
                  {/* 1 */}
                  <Card
                    title="sample"
                    description="sample"
                    imgurl="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  />
                  {/* 2 */}
                  <Card
                    title="sample"
                    description="If a dog chews shoes whose shoes does he choose?"
                    imgurl="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  />
                  {/* 3 */}
                  <Card
                    title="sample"
                    description="If a dog chews shoes whose shoes does he choose?"
                    imgurl="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="diff-item-2">
            <div className="bg-base-200 text-9xl font-black grid place-content-center">
              <h3>general</h3>
              {/* card */}
            </div>
          </div>
          <div className="diff-resizer"></div>
        </div>
      </div>
    </section>
  )
}

export default Price
