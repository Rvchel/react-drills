import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Todo from './Todo'

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      list: []
    }
    this.handleAddTask = this.handleAddTask.bind(this)
  }

  newInput(value) {
    this.setState({input: value})
  }

  handleAddTask() {
    this.setState({
      input: '',
      list: [...this.state.list, this.state.input]
    })
  }
  
  
  
  
  
  render() {
    let list = this.state.list.map((element, index) => {
      return <Todo key={index} task={element} />
    })
    return (
      <div className='App'>
      <h1>My to-do List:</h1>

      <div>
        <input placeholder='Enter new task' value={this.state.input} onChange={(e) => this.newInput(e.target.value)} />
        <button onClick={this.handleAddTask}>Add</button>
      </div>

      <br />

      {list}

      </div>
    )
  }
}

export default App;
