import React, { Component } from 'react'
import Card from './CardUI'

function Cards(props) {
  // const[]

  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="row">
        <div className="col-md-4"><Card /></div>
        <div className="col-md-4"><Card /></div>
        <div className="col-md-4"><Card /></div>
      </div>
    </div>
  )
}

export default Cards;

