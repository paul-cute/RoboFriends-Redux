import React, { Component } from 'react'
import Card from './Card'
import { robots } from './robots'

export default class CardList extends Component {
  render() {
    return (
      <div>
        {this.props.robots.map((user, i )=> {
        return <Card 
                    key={i} 
                    id={robots[i].id} 
                    name={robots[i].name} 
                    email={robots[i].email}
                />    
        })}
      </div>
    )
  }
}
