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
                url1="icons/excel-icon.svg"
                url2="icons/excel-icon.svg"
                url3="icons/excel-icon.svg"
                url4="icons/excel-icon.svg"
                url5="icons/excel-icon.svg"
                url6="icons/excel-icon.svg"
                url7="icons/excel-icon.svg"
                url8="icons/excel-icon.svg"
                url9="icons/excel-icon.svg"
                url10="icons/excel-icon.svg"
                url11="icons/excel-icon.svg"
                url12="icons/excel-icon.svg"
              />
              {/* 2 */}
              <Card
                title="Microsoft 365
                Business Standard"
                price="1360"
                url1="icons/excel-icon.svg"
                url2="icons/excel-icon.svg"
                url3="icons/excel-icon.svg"
                url4="icons/excel-icon.svg"
                url5="icons/excel-icon.svg"
                url6="icons/excel-icon.svg"
                url7="icons/excel-icon.svg"
                url8="icons/excel-icon.svg"
                url9="icons/excel-icon.svg"
                url10="icons/excel-icon.svg"
                url11="icons/excel-icon.svg"
                url12="icons/excel-icon.svg"
              />
              {/* 3 */}
              <Card
                title="Microsoft 365
                Business Premium"
                price="2390"
                url1="icons/excel-icon.svg"
                url2="icons/excel-icon.svg"
                url3="icons/excel-icon.svg"
                url4="icons/excel-icon.svg"
                url5="icons/excel-icon.svg"
                url6="icons/excel-icon.svg"
                url7="icons/excel-icon.svg"
                url8="icons/excel-icon.svg"
                url9="icons/excel-icon.svg"
                url10="icons/excel-icon.svg"
                url11="icons/excel-icon.svg"
                url12="icons/excel-icon.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Price_oplan
