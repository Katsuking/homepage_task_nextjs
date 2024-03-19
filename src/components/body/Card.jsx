import React from 'react'

const Card = ({ title, description, imgurl }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={imgurl} alt="Shoes" />
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
