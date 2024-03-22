import React from 'react'
import Card from './Card'

const Price_general = () => {
  return (
    <div className="diff-item-1">
      <div className="bg-primary text-primary-content">
        {/* card */}
        <div className="px-10 h-full flex flex-col justify-center">
          <div className="h-[15%] text-center items-center">
            <h3 className="pt-5 text-gray-200 text-5xl">GENERAL</h3>
          </div>
          <div className="h-[85%] justify-center items-stretch grid grid-rows-1 grid-cols-3 grid-flow-row gap-4">
            {/* 1 */}
            <Card
              title="Microsoft 365
              Business Basic"
              price="1200"
              imgurl="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            />
            {/* 2 */}
            <Card
              title="Microsoft 365
              Business Standard"
              price="2500"
              imgurl="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            />
            {/* 3 */}
            <Card
              title="Microsoft 365
              Business Premium"
              price="3000"
              imgurl="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Price_general
