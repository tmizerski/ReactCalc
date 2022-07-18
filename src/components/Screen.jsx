import {React, Component} from 'react';


class Screen extends Component {
  
  state = {  }

  render() { 
    return ( 
      <div className='screen'>
          <div className='previousNumber'>{this.props.previousNumber}</div>
          <span className='mathSign'>{this.props.mathSign}</span>
          <div className='currentNumber'>{this.props.currentNumber}</div>
        </div>
     );
  }
}
 
export default Screen;