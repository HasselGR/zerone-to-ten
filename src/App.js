import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    
    this.state={
      input:'',
      output:'',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(event) {
    const re = /^[0-1\b]+$/;
    if (event.target.value === '' || re.test(event.target.value)){
      this.setState({input: event.target.value})
    } else {
      alert('You are only allowed to input ones and zeroes! this is binary after all!')
      event.target.value= this.state.input;

    }
  }

  handleClick(event) {
    event.preventDefault()
    let decnumber = 0;
    let comparison = 0;
    let rate = 10;
    for (let index = 0; index < 8; index++) {
      const module = this.state.input % rate;

      if (module !== comparison){
        decnumber = decnumber + (1*2**index);
        comparison = module;

      }

      rate = rate*10;
      
    }
    this.setState({output: decnumber})
  }
  
  
  render () {
    return (
      <>
      <div className="App">
        <h1> ZerOne to Ten</h1>
        <h2> A page where you can go from OneZero(binary) to Ten(Decimal)</h2>
        <h3> yeah that joke sucked, anyway</h3>
      </div>
      <div className="converter-container">
        <span>
          <h6> Please put your binary number here to be converted, keep in mind that binary numbers consist from ones and zeroes!</h6>
          <input maxLength="8" value={this.state.value} onChange={this.handleChange}/>
        </span>
        <span>
          <h6> Here you will see the decimal number pop up once you click convert!</h6>
          <h1>{this.state.output}</h1>
        </span>
      </div>
      <button onClick={this.handleClick}>Convert</button>
      </>
    );
  }
  }

export default App;
