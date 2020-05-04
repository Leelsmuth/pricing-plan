import React, { useState } from 'react'
import Card from './CardUI'
import data from '../data'

function Cards(props) {
  const [products] = useState(data);

  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="row">
        {/* <div className="col-md-4"> */}
          {products.map(product => (
            <Card key={product.id} product={product} />
          ))}
        {/* </div> */}
      </div>
    </div>
  )
}

export default Cards;

