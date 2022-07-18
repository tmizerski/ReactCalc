import { React, Component } from 'react';

class CalcHistory extends Component {
  state = {  }

  render() { 
    return ( 
      <div className='calcHistory'>
          <p className='historyTitle'>Calculator History</p>
          <button className='historyBtn'>Clear history</button>
          <hr/>
          <ul className='history'>
          </ul>
        </div>
     );
  }
}
 
export default CalcHistory;