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

  addItem = () => {
    let { itemList, itemName } = this.state
    itemList.push(itemName)
    this.setState(
      { itemList, itemName: '' }
    )
    console.log("addItem", itemList)
  }

  editItem=()=>{
    let { itemList, itemName ,activeIndex} = this.state
    itemList.splice(activeIndex, 1, itemName)
    this.setState(
      {itemList ,itemName: ''}
    )
  }


  deleteItem = () => {
    let { itemList, activeIndex } = this.state
    itemList.splice(activeIndex,1)
    this.setState(
      {itemList},
      ()=>alert("Item Delete")
    )
    console.log("delete", itemList)   
  }


  render() {
    const { itemName, itemList, activeIndex, flag } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>{'Todo App'}</h1>
          <div>
            <input type='text'
              placeholder='Add item ...'
              value={itemName}
              onChange={e => this.setState({ itemName: e.currentTarget.value })} />
            <button onClick={flag ? this.editItem : this.addItem}>{flag ? 'Edit' :'Add'}</button>
          </div>
          <ul>
            {itemList.map((val, ind)=>{
              return (
                <div>
                  <li key={ind}>{val}</li>
                  <span>
                    <button onClick={() => (this.setState({ activeIndex: ind, flag: true, itemName: val }))}>{'Edit'}</button>
                    <button onClick={this.deleteItem}>{'Delete'}</button>
                  </span>
                </div>
              )
            })}
          </ul>



        </header>
      </div>
    );
  }
}

export default App;
