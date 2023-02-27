import React, { Component } from 'react'
import CardList from './CardList'
import { robots } from './robots' 

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>RoboFriends</h1>
        <CardList robots ={robots}/>
      </div>
    )
  }
}
