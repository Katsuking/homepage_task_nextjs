import React from 'react'
import Image from 'next/image'

const Card = ({ title, price, imgUrls }) => {
  const urls = imgUrls
  return (
    <>
      <div className="mt-5 card bg-base-100 shadow-xl content-between justify-between">
        <h2 className="pt-5 px-0 md:px-5 lg:px-10 card-title block">{title}</h2>
        <div className="rounded-xl items">
          <div className="mt-5 mx-10 grid grid-cols-3 grid-flow-row gap-4">
            {urls
              ? urls.map((value, index) => (
                  <div key={index} className="content-center items-center">
                    <Image
                      className="mt-0 sm:mt-5 md:rounded-none md:mt-0"
                      src={value.url}
                      alt={`img${index}`}
                      width="500"
                      height="500"
                    />
                  </div>
                ))
              : null}
          </div>
        </div>
        <div className="card-body items-center">
          <p className="flex items-end">
            <div className="flex-col">
              ￥<strong>{price}</strong>
              <br />
              ユーザー／月
            </div>
          </p>
          <div className="card-actions justify-center">
            <p></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
