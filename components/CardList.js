import React from 'react'
import Card from './Card'
import Data from './Data'

const CardList = () => {
  const Menu = Data.map((data) => {
    return <Card key={data.id} data={data} />
  })

  return (
    <div className="mt-8 grid gap-5 sm:grid-cols-2 md:grid-cols-3">{Menu}</div>
  )
}

export default CardList
