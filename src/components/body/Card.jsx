import React from 'react'
import Image from 'next/image'

const Card = ({ title, price, imgurl }) => {
  return (
    <>
      <div className="mt-5 card bg-base-100 shadow-xl text-oplan">
        <h2 className="pt-5 md:pt-0 card-title block">{title}</h2>
        <figure className="block">
          <Image
            className="rounded-xl mt-0 sm:mt-5 md:rounded-none md:mt-0"
            src={imgurl}
            alt="Shoes"
            width="500"
            height="250"
          />
        </figure>
        <div className="card-body">
          <p>
            ￥<strong>{price}</strong>
            <p>ユーザー／月</p>
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
