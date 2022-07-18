import { React, Component } from 'react';
import Screen from './Screen';
import ButtonContainer from './ButtonContainer';
import CalcHistory from './CalcHistory';

class CalculatorContainer extends Component {
  constructor() {
    super();
    this.state = { 
    currentNumber: '',
    previousNumber: '',
    mathSign: '',
    result: '',
    buttons: [
      {
        name: 'C',
        type: 'clear',
      },
      {
        name: '^2',
        type: 'operator'
      },
      {
        name: 'X',
        type: 'operator'
      },
      {
        name: ':',
        type: 'operator'
      },
      {
        name: '1',
        type: 'number'
      },
      {
        name: '2',
        type: 'number'
      },
      {
        name: '3',
        type: 'number'
      },
      {
        name: '+',
        type: 'operator'
      },
      {
        name: '4',
        type: 'number'
      },
      {
        name: '5',
        type: 'number'
      },
      {
        name: '6',
        type: 'number'
      },
      {
        name: '-',
        type: 'operator'
      },
      {
        name: '7',
        type: 'number'
      },
      {
        name: '8',
        type: 'number'
      },
      {
        name: '9',
        type: 'number'
      },
      {
        name: '=',
        type: 'equals'
      },
      {
        name: '0',
        type: 'number'
      },
      {
        name: '00',
        type: 'number'
      },
      {
        name: '.',
        type: 'number'
      }
    ]
  }
   }

   displayNumber = (value) => {
    if(this.state.mathSign === '' && this.state.currentNumber){
    this.setState ({
      currentNumber: value
    })
  }
    else {
      this.setState({
        previousNumber: this.state.currentNumber,
        currentNumber: value
      })
    }
   }

 handleType = (type, value) => {
    switch(type) {
      case type === 'number': this.displayNumber(value);
      break;
    //   case operator: displaySign(value);
    //   break;
    //   case equals: showResult();
    //   break;
    //   case clear: clearDisplay();
    //   break;
    default: alert('default value');
    }
    }
  
  render() {
    
    return ( 
      <div className='calculator'>
      <div className='calculatorContainer'>
        <Screen currentNumber={this.state.currentNumber} mathSign={this.state.mathSign} previousNumber={this.state.previousNumber}/>
        <ButtonContainer buttons={this.state.buttons} specyfiType={this.handleType.bind(this)}/>
      </div>
      <CalcHistory/>
      </div>
     );
  }
}
 
export default CalculatorContainer;

