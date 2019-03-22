import React from 'react'

const OffersList = props => {
  return (
    <div>
      {props.offers.map(offer => {
          return <h1>{offer.name}</h1>
      })}
    </div>
  )
}

export default OffersList