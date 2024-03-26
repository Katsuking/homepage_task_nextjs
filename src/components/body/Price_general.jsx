import React from 'react'
import Card from './Card'

const Price_general = ({ imgUrls1, imgUrls2, imgUrls3 }) => {
  return (
    <div className="diff-item-1">
      <div className="bg-base-200 text-primary-content">
        {/* card */}
        <div className="px-10 h-full flex flex-col justify-center">
          <div className="h-[10%] text-center items-center">
            <h3 className="pt-5 text-gray-500 text-5xl">GENERAL</h3>
          </div>
          <div className="h-[90%] mt-3 text-gray-700">
            <div className=" justify-center items-stretch grid grid-rows-1 grid-cols-3 grid-flow-row gap-4">
              {/* 1 */}
              <Card
                title="Microsoft 365
              Business Basic"
                price="1200"
                imgUrls={imgUrls1 ? imgUrls1 : null}
              />
              {/* 2 */}
              <Card
                title="Microsoft 365
              Business Standard"
                price="2500"
                imgUrls={imgUrls2 ? imgUrls2 : null}
              />
              {/* 3 */}
              <Card
                title="Microsoft 365
              Business Premium"
                price="3000"
                imgUrls={imgUrls3 ? imgUrls3 : null}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Price_general
