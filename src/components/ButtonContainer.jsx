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