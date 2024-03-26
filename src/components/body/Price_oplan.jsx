import React from 'react'
import Card from './Card'

const Price_oplan = ({ imgUrls1, imgUrls2, imgUrls3 }) => {
  return (
    <div className="diff-item-2">
      <div className="bg-pink-300 text-primary-content">
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
                imgUrls={imgUrls1 ? imgUrls1 : null}
              />
              {/* 2 */}
              <Card
                title="Microsoft 365
                Business Standard"
                price="1360"
                imgUrls={imgUrls2 ? imgUrls2 : null}
              />
              {/* 3 */}
              <Card
                title="Microsoft 365
                Business Premium"
                price="2390"
                imgUrls={imgUrls3 ? imgUrls3 : null}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Price_oplan
