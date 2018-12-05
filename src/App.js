import React, { Component } from 'react';
import Header from './components/Header/header.js';
import List from './components/List/list.js';
import './App.css';

class App extends Component {

constructor(){
  super();

  this.addTask = this.addTask.bind(this);
  this.removeTask = this.removeTask.bind(this);
  this.crossChange = this.statusChange.bind(this);

  this.state = {
    items:[
        {id: "0000000001", title: "Pass test to apiko", isChecked: true}
    ]
}
}

idGenerator() {
  return Math.random();
};

removeTask(p){
  this.setState({
    items: this.state.items.filter(function(i){
      return i.id !== p
    })
  })
}

addTask(p){
  this.setState({
    items: [{id: this.idGenerator(), title: p, isChecked: false}, ...this.state.items]
   })
}

statusChange(p){
  this.setState({
    items: this.state.items.map(function(i){
      return p === i.id ? {id: i.id, title: i.title, isChecked: !i.isChecked} : i
    })
  })
}

filterChange(e){
  this.setState({
    filter: e.target.value
  })
}

render() {
    return (
      <div className="App">

        <Header
          onTaskAdd={this.addTask}
        />

        <List 
          itemList={this.state.items}
          onTaskRemove={this.removeTask}
          onCrossChange={this.crossChange}
        />
      </div>
    );
  }
}

export default App;
