import React from 'react'
import Card from './Card'

const Price_oplan = () => {
  return (
    <div className="diff-item-2">
      <div className="bg-base-200 text-primary-content">
        {/* card */}
        <div className="px-10 h-full flex flex-col justify-center text-oplan">
          <div className="h-[15%] text-center items-center">
            <h3 className="pt-5 text-oplan text-5xl">OPLAN</h3>
          </div>
          <div className="h-[85%]">
            <div className="justify-center items-stretch grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-4">
              {/* 1 */}
              <Card
                title=" Microsoft 365
                Business Basic "
                price="800"
                imgurl="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              />
              {/* 2 */}
              <Card
                title="Microsoft 365
                Business Standard"
                price="1360"
                imgurl="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              />
              {/* 3 */}
              <Card
                title="Microsoft 365
                Business Premium"
                price="2390"
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
