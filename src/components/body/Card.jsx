import React from 'react'
import Image from 'next/image'

const Card = ({
  title,
  price,
  url1,
  url2,
  url3,
  url4,
  url5,
  url6,
  url7,
  url8,
  url9,
  url10,
  url11,
  url12,
}) => {
  return (
    <>
      {/* {imgUrls.map((url, index) => (
                <Image
                  key={index}
                  className="mt-0 sm:mt-5 md:rounded-none md:mt-0"
                  src={url}
                  alt="img${index}"
                  width="500"
                  height="500"
                />
              ))} */}
      <div className="mt-5 card bg-base-100 shadow-xl">
        <h2 className="pt-5 md:pt-0 card-title block">{title}</h2>
        <div className="rounded-xl">
          <div className="mt-5 mx-10 grid grid-cols-3 grid-flow-row gap-4">
            <div className="content-center items-center">
              <Image
                className="mt-0 sm:mt-5 md:rounded-none md:mt-0"
                src={url1}
                alt="img"
                width="500"
                height="500"
              />
            </div>
            <div className="content-center items-center">
              <Image
                className="mt-0 sm:mt-5 md:rounded-none md:mt-0"
                src={url2}
                alt="img"
                width="500"
                height="500"
              />
            </div>
            <div className="content-center items-center">
              <Image
                className="mt-0 sm:mt-5 md:rounded-none md:mt-0"
                src={url3}
                alt="img"
                width="500"
                height="500"
              />
            </div>
            <div className="content-center items-center">
              <Image
                className="mt-0 sm:mt-5 md:rounded-none md:mt-0"
                src={url4}
                alt="img"
                width="500"
                height="500"
              />
            </div>
            <div className="content-center items-center">
              <Image
                className="mt-0 sm:mt-5 md:rounded-none md:mt-0"
                src={url5}
                alt="img"
                width="500"
                height="500"
              />
            </div>
            <div className="content-center items-center">
              <Image
                className="mt-0 sm:mt-5 md:rounded-none md:mt-0"
                src={url6}
                alt="img"
                width="500"
                height="500"
              />
            </div>
            <div className="content-center items-center">
              <Image
                className="mt-0 sm:mt-5 md:rounded-none md:mt-0"
                src={url7}
                alt="img"
                width="500"
                height="500"
              />
            </div>
            <div className="content-center items-center">
              <Image
                className="mt-0 sm:mt-5 md:rounded-none md:mt-0"
                src={url8}
                alt="img"
                width="500"
                height="500"
              />
            </div>
            <div className="content-center items-center">
              <Image
                className="mt-0 sm:mt-5 md:rounded-none md:mt-0"
                src={url9}
                alt="img"
                width="500"
                height="500"
              />
            </div>
            <div className="content-center items-center">
              <Image
                className="mt-0 sm:mt-5 md:rounded-none md:mt-0"
                src={url10}
                alt="img"
                width="500"
                height="500"
              />
            </div>
            <div className="content-center items-center">
              <Image
                className="mt-0 sm:mt-5 md:rounded-none md:mt-0"
                src={url11}
                alt="img"
                width="500"
                height="500"
              />
            </div>
            <div className="content-center items-center">
              <Image
                className="mt-0 sm:mt-5 md:rounded-none md:mt-0"
                src={url12}
                alt="img"
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
