import React from 'react'
import Image from 'next/image'

const Card = (props) => {
  return (
    <div className="relative mt-4 overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-lg">
      <Image
        src={props.data.imageSRC}
        alt={props.data.imageALT}
        className="h-32 w-full object-cover sm:h-48"
      />
      <div className="m-4">
        <span className="font-bold">{props.data.recipeName}</span>
        <span className="block text-sm text-gray-500">
          Recipe by {props.data.recipeBy}
        </span>
      </div>
      <div className="absolute top-0 ml-2 mt-2 rounded-full bg-gray-200 px-2 py-1 text-gray-500">
        <span>{props.data.rating}⭐</span>
      </div>
    </div>
  )
}

export default Card