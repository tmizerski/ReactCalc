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
    ],
    history: []
  }
   }

   displayNumber = (value) => {
    if(value === '.' && this.state.currentNumber === '') {
        this.setState({
            currentNumber: '0.'
        })
    } 
    else if(value === '.' && this.state.currentNumber.includes('.')){
        return
  }
    else if((value === '.' || value === '00') && (this.state.currentNumber === '')){
    return
  } 
    
    else if(this.state.mathSign === '' || this.previousNumber !== ''){
    this.setState ({
      currentNumber: this.state.currentNumber + value
    })
  } 

}

   displaySign = (value) => {
    if(this.state.mathSign !== '' || this.state.currentNumber === '') {
        return
    }
    else {
        this.setState({
            mathSign: value,
            previousNumber: this.state.currentNumber,
            currentNumber: '',
        })
    }
}

addToHistory = () => {
        this.setState(prevState =>({
            history: [...prevState.history, (`<li>${this.state.previousNumber} ${this.state.mathSign} ${this.state.currentNumber} = ${this.state.result} </li>`)]
        }))
        console.log(this.state.history);
    }

    showResult = () => {
        let operator = this.state.mathSign;
        let a = Number(this.state.previousNumber);
        let b = Number(this.state.currentNumber);
        let result;
        switch(operator) {
         case operator = '+': 
            result = a + b;
         this.setState({ result: result,
        currentNumber: result});
         break;
         case operator = '-':
            result = a - b 
            this.setState({ result: result,
            currentNumber: result});
         break;
         case operator = 'X': 
         result = a * b
         this.setState({ result: result,
        currentNumber: result});
         break;
         case operator = ':': 
         result = a / b;
         this.setState({ result: result,
        currentNumber: result});
         break;
         case operator = '2^': 
         result = a ** b;
         this.setState({ result: result,
        currentNumber: result});
         break;
         default: return;
        }
        this.setState({
            previousNumber: '',
            mathSign: '',
        })
        this.addToHistory();

    }

 clearDisplay = () => {
    this.setState({
        mathSign: '',
        currentNumber: '',
        previousNumber: '',
        result: ''
    })
 }   

 handleType = (type, value) => {
    switch(type) {
      case type ='number': this.displayNumber(value);
      break;
      case type = 'operator': this.displaySign(value);
      break;
      case type = 'equals': this.showResult();
      break;
      case type = 'clear': this.clearDisplay();
      break;
    default: return;
    }
    }
    
  
  render() {
    
    return ( 
      <div className='calculator'>
      <div className='calculatorContainer'>
        <Screen currentNumber={this.state.currentNumber} mathSign={this.state.mathSign} previousNumber={this.state.previousNumber}/>
        <ButtonContainer buttons={this.state.buttons} specyfiType={this.handleType}/>
      </div>
      <CalcHistory/>
      </div>
     );
  }
}
 
export default CalculatorContainer;

