import React, { Component } from 'react'

export default class Card extends Component {
 
  render() {
    console.log(this.props.id)
    return (
      <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
        <h1>Robots</h1>
        <img src={`https://robohash.org/${this.props.id}?200x200`} alt="robot" />
        <div>
            <h2>{this.props.name}</h2>
            <p>{this.props.email}</p>
        </div>
      </div>
    )
  }
}
