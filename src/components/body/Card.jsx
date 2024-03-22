import React from 'react'
import Image from 'next/image'

const Card = ({ title, price, imgurl }) => {
  return (
    <>
      <div className="mt-5 card bg-base-100 shadow-xl">
        <h2 className="pt-5 md:pt-0 card-title block">{title}</h2>
        <div className="rounded-xl">
          <div className="mt-5 mx-10 grid grid-cols-3 grid-flow-row gap-4">
            <div className="content-center items-center">
              <Image
                className="mt-0 sm:mt-5 md:rounded-none md:mt-0"
                src={imgurl}
                alt="Shoes"
                width="500"
                height="500"
              />
            </div>
            <div>
              <Image
                className=" mt-0 sm:mt-5 md:rounded-none md:mt-0"
                src={imgurl}
                alt="Shoes"
                width="500"
                height="500"
              />
            </div>
            <div>
              <Image
                className=" mt-0 sm:mt-5 md:rounded-none md:mt-0"
                src={imgurl}
                alt="Shoes"
                width="500"
                height="500"
              />
            </div>
            <div>
              <Image
                className=" mt-0 sm:mt-5 md:rounded-none md:mt-0"
                src={imgurl}
                alt="Shoes"
                width="500"
                height="500"
              />
            </div>
            <div>
              <Image
                className=" mt-0 sm:mt-5 md:rounded-none md:mt-0"
                src={imgurl}
                alt="Shoes"
                width="500"
                height="500"
              />
            </div>
            <div className="content-center items-center">
              <Image
                className="mt-0 sm:mt-5 md:rounded-none md:mt-0"
                src={imgurl}
                alt="Shoes"
                width="500"
                height="500"
              />
            </div>
            <div className="content-center items-center">
              <Image
                className="mt-0 sm:mt-5 md:rounded-none md:mt-0"
                src={imgurl}
                alt="Shoes"
                width="500"
                height="500"
              />
            </div>
            <div>
              <Image
                className=" mt-0 sm:mt-5 md:rounded-none md:mt-0"
                src={imgurl}
                alt="Shoes"
                width="500"
                height="500"
              />
            </div>
            <div>
              <Image
                className=" mt-0 sm:mt-5 md:rounded-none md:mt-0"
                src={imgurl}
                alt="Shoes"
                width="500"
                height="500"
              />
            </div>
            <div>
              <Image
                className=" mt-0 sm:mt-5 md:rounded-none md:mt-0"
                src={imgurl}
                alt="Shoes"
                width="500"
                height="500"
              />
            </div>
            <div>
              <Image
                className=" mt-0 sm:mt-5 md:rounded-none md:mt-0"
                src={imgurl}
                alt="Shoes"
                width="500"
                height="500"
              />
            </div>
            <div className="content-center items-center">
              <Image
                className="mt-0 sm:mt-5 md:rounded-none md:mt-0"
                src={imgurl}
                alt="Shoes"
                width="500"
                height="500"
              />
            </div>
          </div>
        </div>
        <div className="card-body">
          <p>
            ￥<strong>{price}</strong>
            <p>ユーザー／月</p>
          </p>
          <div className="card-actions justify-center">
            <p>description</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
