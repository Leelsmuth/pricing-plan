import React from 'react';
import Img1 from '../assets/price.jpg'
import './card.style.css'

const Card = props => {

  return (
    <div className="col-md-4">
      <div className='card text-center'>
        <div className="overflow">
          <img src={Img1} alt="Image1" className="card-img-top" />
        </div>

        <div className='card-body text-dark'>
          <h4 className='card-title'>{props.product.title}</h4>
          <p className='card-text text-secondary'>Lorem Ipsum</p>
          <a href='#' className='btn btn-outline-success'>Go Anywhere</a>
        </div>

      </div>
    </div>
  );
}


export default Card;