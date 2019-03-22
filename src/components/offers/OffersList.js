import React from 'react'

const OffersList = props => {
  return (
    <div>
      {props.offers.map(offer => {
          return <h1>
            Budget:{offer.budget}{offer.currency}
            Price Per Click:{offer.price_per_click}{offer.currency} 
            Price Per Impression:{offer.price_per_impression}{offer.currency} 
            Name:{offer.name} 
            Description:{offer.description} 
            Category: {offer.category}
          </h1>
      })}
    </div>
  )
}

export default OffersList