import React, { Component } from 'react'
import CardList from '../components/CardList'
import Scroll from '../components/Scroll'
import SearchBox from '../components/SearchBox'
import './App.css'
import {connect} from 'react-redux'
import { requestRobots, searchField } from '../actions'
import Header from '../components/Header'


const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(searchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}
class App extends Component {
    
    componentDidMount() {
      this.props.onRequestRobots()
    }
  
    render() {
      const {searchField, onSearchChange, robots, isPending} = this.props; 
      const filteredRobots = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
      })
      return isPending ?
        <h1>Loading</h1> :
        (
          <div className='tc'>
            <Header/>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
              <CardList robots={filteredRobots} />
            </Scroll>
          </div>
        );
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(App);
