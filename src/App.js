import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: "Hello Pakistan",
      toggle: true
    }
  }

  updateState() {
    this.setState({
      text: (this.state.toggle) ? "Hello World" : "Hello Pakistan",
      toggle: !this.state.toggle
    })
  }

  renderDifference() {
    const myFuncTxt = "{this.myFunc}"
    const myFuncTxtThis = "{() => this.myFunc()}"
    const myFuncTxtThisBind = "{this.myFunc.bind(this)}"
    const myFuncTxtThisBindExample = "{this.myFunc.bind(this,arg1,arg2,arg3)}"
    return (
      <div class="box">
        <h3>Difference between onClick={myFuncTxt}, onClick={myFuncTxtThis} & onClick={myFuncTxtThisBind} and when to use which one</h3>
        <h4>1. {myFuncTxt}</h4>
        <p>
          i){myFuncTxt} stores the myFunc function into the onClick event and when the event is called then the function is also called.<br/>
          ii)By using this method we can't pass arguments in the function <br/>
          iii)By using this method we cannot refer parent class's "this".
        </p>
        <h4>2. {myFuncTxtThis}</h4>
        <p>
          i)By using a call back (Arrow) functions we can use parent class's "this" inside the function.<br/>
          ii)Advantage of this method is that we can also pas arguments in the function.
        </p>
        <h4>3. {myFuncTxtThisBind}</h4>
        <p>
          i) This type of method is kind of better version of {myFuncTxt}.<br/>
          ii) We can also pass arguments using this method in function. Eg: {myFuncTxtThisBindExample} <br/>
          iii) In {myFuncTxt} we can't use "this" to refer parent class's "this" so to overcome this problem we use the keyword "bind" to data bind "this" to the "myFunc" function. This results in "this" being binded to the function which in return allows us to use "this" in function to access parent class's elements.
        </p>
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title" onClick={() => this.updateState()}>{this.state.text}</h1>
        </header>
        {this.renderDifference()}
      </div>
    );
  }
}

export default App;