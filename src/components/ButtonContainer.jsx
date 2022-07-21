import { React, Component } from 'react';
import Button from './Button';

class ButtonContainer extends Component {
  

  render() { 
   
    return ( 
      
     <div className='buttonContainer'>
      {this.props.buttons.map((button, index) => 
      <Button name={button.name} btnType={button.type} key={index} specyfiType={this.props.specyfiType}/>
    )}
     </div>
     );
  }
}
 
export default ButtonContainer;

//  <div className='buttonContainer'>
//           <button className='clear' onClick={this.props.dziala}>C</button>
//           <button className='operator'>X<sup>2</sup></button>
//           <button className='operator'>X</button>
//           <button className='operator'>:</button>
//           <button className='number'>1</button>
//           <button className='number'>2</button>
//           <button className='number'>3</button>
//           <button className='operator'>+</button>
//           <button className='number'>4</button>
//           <button className='number'>5</button>
//           <button className='number'>6</button>
//           <button className='operator'>-</button>
//           <button className='number'>7</button>
//           <button className='number'>8</button>
//           <button className='number'>9</button>
//           <button className='equals'>=</button>
//           <button className='number'>0</button>
//           <button className='number'>00</button>
//           <button className='number'>.</button>
//         </div>