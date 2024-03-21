import React from 'react'
import Image from 'next/image'

const Card = ({ title, description, imgurl }) => {
  return (
    <div className="mt-5 card bg-base-100 shadow-xl">
      <figure className="block">
        <Image src={imgurl} alt="Shoes" width="500" height="250" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  )
}

export default Card
