import React from 'react'
import Card from './Card'

const Price_oplan = () => {
  return (
    <div className="diff-item-1">
      <div className="bg-primary text-primary-content">
        {/* card */}
        <div className="px-10 h-full flex flex-col justify-center">
          <div className="h-1/6 text-center items-center">
            <h3 className="text-5xl">OPLAN</h3>
          </div>
          <div className="className=h-5/6">
            {/* Carouselの挿入 */}
            <div className="justify-center items-stretch grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-4">
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
    </div>
  )
}

export default Price_oplan
