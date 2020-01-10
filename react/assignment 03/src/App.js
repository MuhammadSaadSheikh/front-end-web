import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      itemName: '',
      itemList: [],
      activeIndex: '',
      flag: false
    }
  }


  render() {
    let { itemName, itemList, activeIndex, flag } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>{'Todo App'}</h1>
          <input type='text' placeholder='Add item ...' value={itemName} onchange ={e=>{console.log('e', e)}}/>
        </header>
      </div>
    );
  }
}

export default App;
