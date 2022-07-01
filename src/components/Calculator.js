import React from 'react';
import calculate from '../logic/calculate';
import '../index.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  btnClick = (e) => {
    const { value } = e.target;
    const { total, next, operation } = calculate(this.state, value);
    this.setState({ total, next, operation });
    const result = document.getElementById('calcDisplay');
    if (next !== null) {
      result.innerHTML = next;
    } else if (total !== null) {
      result.innerHTML = total;
    } else {
      result.innerHTML = '0';
    }
  };

  render() {
    return (
      <div className="calculator">
        <div className="calc-display" id="calcDisplay"><span>0</span></div>
        <div className="top-options">
          <button type="button" onClick={this.btnClick} value="AC">AC</button>
          <button type="button" onClick={this.btnClick} value="x/-">+/-</button>
          <button type="button" onClick={this.btnClick}>%</button>
          <button type="button" onClick={this.btnClick} value="+" className="orange">+</button>
        </div>
        <div className="second-row">
          <button type="button" onClick={this.btnClick} value="7">7 </button>
          <button type="button" onClick={this.btnClick} value="8">8</button>
          <button type="button" onClick={this.btnClick} value="9">9</button>
          <button type="button" onClick={this.btnClick} value="*" className="orange">*</button>
        </div>
        <div className="third-row">
          <button type="button" onClick={this.btnClick} value="4">4 </button>
          <button type="button" onClick={this.btnClick} value="5">5</button>
          <button type="button" onClick={this.btnClick} value="6">6</button>
          <button type="button" onClick={this.btnClick} value="-" className="orange">-</button>
        </div>
        <div className="first-row">
          <button type="button" onClick={this.btnClick} value="1">1 </button>
          <button type="button" onClick={this.btnClick} value="2">2</button>
          <button type="button" onClick={this.btnClick} value="3">3</button>
          <button type="button" onClick={this.btnClick} value="+" className="orange">+</button>
        </div>
        <div className="bottom-row flex">
          <button type="button" onClick={this.btnClick} value="0" className="flex-child">0 </button>
          <button type="button" onClick={this.btnClick} value=".">.</button>
          <button type="button" onClick={this.btnClick} value="=" className="orange">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
